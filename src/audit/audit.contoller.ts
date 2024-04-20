import { Controller } from '@nestjs/common';
import { AuditService } from './audit.service';
import {
  Ctx,
  KafkaContext,
  MessagePattern,
  Payload,
} from '@nestjs/microservices';
import { ConfigService } from "@nestjs/config";
import { AuditLog } from '../audit/audit.entity';


@Controller()
export class AuditController {
  constructor(private configService: ConfigService,private readonly auditService: AuditService) {}
  @MessagePattern('timber__topic-audit-api')
  processMessage(
    @Payload() message: AuditLog,
    @Ctx() context: KafkaContext,
  ) {
    const originalMessage = context.getMessage();
    const response = originalMessage.value;

    console.log('Topic:', context.getTopic());
    console.log('Partition:', context.getPartition());
    this.auditService.saveLog(message);
  }
}