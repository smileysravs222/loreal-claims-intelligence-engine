import { Test, TestingModule } from '@nestjs/testing';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from '../prisma/prisma.service';
import { ClaimsService } from './claims.service';
import OpenAI from 'openai';

describe('ClaimsService', () => {
  let service: ClaimsService;
  const assessment = {
    justified: true,
    confidenceScore: 75,
    reasoning: 'The evidence describes a controlled comparison.',
  };
  const prisma = {
    claim: {
      create: jest.fn().mockResolvedValue({ assessments: [assessment] }),
    },
  };

  beforeEach(async () => {
    jest.clearAllMocks();
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ClaimsService,
        { provide: PrismaService, useValue: prisma },
        {
          provide: ConfigService,
          useValue: {
            get: (key: string) =>
              ({
                AI_PROVIDER: 'ollama',
                OLLAMA_MODEL: 'llama3.2',
              })[key],
          },
        },
      ],
    }).compile();

    service = module.get<ClaimsService>(ClaimsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('uses Ollama and saves its assessment', async () => {
    const ollama = (service as unknown as { ollama: OpenAI }).ollama;
    jest
      .spyOn(ollama.chat.completions, 'create')
      .mockResolvedValue({
        choices: [{ message: { content: JSON.stringify(assessment) } }],
      } as never);

    await expect(
      service.assess({
        claimText: 'Reduces wrinkles by 20% in 4 weeks',
        evidence: 'A controlled study found a measured reduction.',
      }),
    ).resolves.toEqual(assessment);

    expect(prisma.claim.create).toHaveBeenCalled();
  });
});
