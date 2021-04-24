import { Column, Entity, PrimaryColumn, CreateDateColumn } from "typeorm";

@Entity("messages")
class Message {
  id: string;

  admin_id: string;

  user_id: string;

  text: string;

  created_at: Date;


}

export { Message }