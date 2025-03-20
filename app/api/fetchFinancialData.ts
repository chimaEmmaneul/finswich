import { FinancialData } from "@/types/types";

export const fetchFinancialData = async (): Promise<FinancialData> => {
  const userResponse = await fetch(
    "https://jsonplaceholder.typicode.com/users/1"
  );

  if (!userResponse.ok) {
    throw new Error("Failed to fetch data");
  }

  const user = await userResponse.json();

  return {
    user: {
      name: user.name,
      uid: "2348101010181",
    },
    balance: {
      available: 20000.32,
      income: 20000.32,
      expense: 20000.32,
    },
    transactions: {
      months: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL"],
      income: [20000, 25000, 18000, 30000, 22000, 25000, 20000],
      expense: [15000, 20000, 12000, 25000, 15000, 20000, 15000],
    },
  };
};
