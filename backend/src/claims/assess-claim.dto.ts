import { IsString, MinLength } from 'class-validator';

export class AssessClaimDto {
  @IsString()
  @MinLength(5)
  claimText: string;

  @IsString()
  @MinLength(10)
  evidence: string;
}