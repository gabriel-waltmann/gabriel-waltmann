export interface BankToNotionLogEntity {
  id: string;
  totalInvoices: number;
  bank: "inter" | "nubank";
  created_at: string;
  executed_at: string;
}