// import { Compcount } from "./compcount";

import { Compcount } from "./compcount";

export interface Kit {
    id: number;
    kitCode: string;
    name: string;
    dateAdded: string;
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

