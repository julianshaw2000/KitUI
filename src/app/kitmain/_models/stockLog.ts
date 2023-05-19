export interface StockLog {
    stockLogId: number;
    fileType: number;
    quantity: number;
    adjustedOn: string;
    userName: string;
    comment: string;
}