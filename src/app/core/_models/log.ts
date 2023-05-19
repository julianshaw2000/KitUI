import { Dbasetype } from './dbasetype.enum';
import { Actiontype } from './actiontype.enum';

export interface Log {
  id: number;
  logDate: Date;
  user: string;
  description: string;
  dbaseid: number;
  dbase: Dbasetype;
  action: Actiontype;
}
