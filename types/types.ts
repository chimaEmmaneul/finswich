export type User = {
  name: string;
  uid: string;
};

export type Balance = {
  available: number;
  income: number;
  expense: number;
};

export type Transactions = {
  months: string[];
  income: number[];
  expense: number[];
};

export type FinancialData = {
  user: User;
  balance: Balance;
  transactions: Transactions;
};

export type ChartDataItem = {
  month: string;
  income: number;
  expense: number;
};

export type TransactionRecords = {
  id: string;
  amount: number;
  exchangeRate: string;
  reference: string;
  senderEmail: string;
  timestamp: Date;
  balance: number;
  fee: number;
};

export type BalanceRecords = {
  id: string;
  balance: number;
  earnings: number;
};
export type TabType = "payment" | "store" | "wallet" | "more";
