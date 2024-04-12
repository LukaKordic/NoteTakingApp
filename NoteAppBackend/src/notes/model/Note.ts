import { sys } from "typescript";
import { unixTimestampInSeconds } from "../../utils/TimeUtils";

export class Note {
  id: string;
  title: string;
  content: string;
  createdAt: number;
  updatedAt: number | null;

  constructor(
    id: string,
    title: string,
    content: string,
    createdAt: number = unixTimestampInSeconds(),
    updatedAt: number | null = null
  ) {
    this.id = id;
    this.title = title;
    this.content = content;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}
