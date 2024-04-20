import { registerAs } from "@nestjs/config";

export default registerAs("kafka", () => ({
  brokers: process.env.KAFKA_BROKERS,
  id: process.env.KAFKA_ID || "timber-sawmill",
  groupId: process.env.GROUP_ID || "timber-sawmill-group"
}));