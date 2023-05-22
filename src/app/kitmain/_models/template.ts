
import { Compcount } from "./compcount";

export interface Template {
  id: number;
  name: string;
  code: string;
  lowLimit: number;
  dateAdded: string;
  compcount: Compcount[];
}

// import { Comp } from "./comp";
// import { Kit } from "./kit";

// export interface Template {
//   id: number;
//   name: string;
//   description?: string;
//   count?: number;
//   components?: Comp[];
// }
