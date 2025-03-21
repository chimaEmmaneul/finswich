import { BalanceRecords } from "@/types/types";

export const fetchBalanceData = async (): Promise<BalanceRecords> => {
  const balanceResponse = await fetch(
    "https://67dcce6be00db03c4068f6d5.mockapi.io/balance/balance/2"
  );

  if (!balanceResponse.ok) {
    throw new Error("Failed to fetch data");
  }

  const balance = await balanceResponse.json();

  return balance;
};
