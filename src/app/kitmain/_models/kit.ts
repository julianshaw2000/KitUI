// import { Compcount } from "./compcount";

import { Compcount } from "./compcount";

export interface Kit {
  id: number;
  code: string;
  name: string;
  templateCode: string;
  customer: string;
  dateAdded: Date;
  currentQty: number;
  compcount: Compcount[];
}
// export interface Kit {
//   id: number;
//   isActive: boolean;
//   name: string;
//   description: string;
//   comps: number[];
// }

