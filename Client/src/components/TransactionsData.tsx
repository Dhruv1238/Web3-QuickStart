import { Typography } from "@material-tailwind/react";
import { TransactionContext } from "../context/TransactionContext.tsx";
import { useContext } from "react";

export const TransactionsData = () => {
    const { transactionCount } = useContext(TransactionContext);
  return (
    <>
      <div className="md:flex p-5 text-center justify-center items-center h-screen bg-gradient-to-b from-[#b44948]">
        <div className="flex flex-col md:justify-center md:items-center ">
        <Typography className="text-white text-5xl">
           Total Transactions through the contract: {transactionCount}
        </Typography>
        </div>
        {/* <div className="flex md:col-1 justify-center items-center ">
        <Typography className="text-white text-5xl">
           Most Recent Transaction fnqakjfnqkjfhqekj
        </Typography>
        </div> */}
      </div>
    </>
  );
};
