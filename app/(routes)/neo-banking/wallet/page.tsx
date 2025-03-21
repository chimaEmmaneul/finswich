"use client"

import { fetchTransactionRecords } from '@/app/api/fetchTransactionRecords'
import BalanceCard from '@/components/BalanceCard'
import TransactionRecordsTable from '@/components/TransactionRecordTable'
import { TransactionRecords } from '@/types/types'
import { useQuery } from '@tanstack/react-query'
import React from 'react'

const NeoBankingWallet = () => {

  const { data, isLoading, isError } = useQuery<TransactionRecords[], Error>({
    queryKey: ["transactionRecords"],
    queryFn: fetchTransactionRecords,
  })


  return (
    <div className=''>
      <BalanceCard />
      <TransactionRecordsTable records={data || []} loading={isLoading} isError={isError} />
    </div>
  )
}

export default NeoBankingWallet