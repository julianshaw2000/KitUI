import { Kit } from "./kit";

export interface Job {
  id: number;
  name: string;
  description: string;
  kits: Kit[];
}
