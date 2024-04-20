import { Injectable } from '@nestjs/common';
import { AuditLog } from '../audit/audit.entity';

@Injectable()
export class AuditService {
  async saveLog(message : AuditLog): Promise<void> {
    
    console.log('Received message:', message);
    try {
      // Sequelize를 통해 AuditLog 엔티티 모델을 사용하여 message 객체를 DB에 저장
      // Archiving 엔진을 사용하므로 Update 가 불가능 하기 때문에 바로 Insert 한다.
      const auditLog = await AuditLog.create({...message});
      console.log('AuditLog saved successfully:', auditLog);
    } catch (error) {
      console.error('Error saving AuditLog:', error);
    }
  }
}
