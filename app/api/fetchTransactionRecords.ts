import { TransactionRecords } from "@/types/types";

export const fetchTransactionRecords = async (): Promise<
  TransactionRecords[]
> => {
  const recordResponse = await fetch(
    "https://67dbfb451fd9e43fe476b7a9.mockapi.io/finswich/transactionrecords"
  );

  if (!recordResponse.ok) {
    throw new Error("Failed to fetch data");
  }

  const records = await recordResponse.json();

  return records;
};
