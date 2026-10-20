import { Body, Controller, Post } from '@nestjs/common';
import { ClaimsService } from './claims.service';
import { AssessClaimDto } from './assess-claim.dto';

@Controller('api/claims')
export class ClaimsController {
  constructor(private readonly claimsService: ClaimsService) {}

  @Post('assess')
  assess(@Body() dto: AssessClaimDto) {
    return this.claimsService.assess(dto);
  }
}