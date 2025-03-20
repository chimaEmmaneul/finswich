import BalanceCard from '@/components/BalanceCard'
import TransactionRecordsTable from '@/components/TransactionRecordTable'
import { transactionRecords } from '@/constants/transaction'
import React from 'react'

const NeoBankingWallet = () => {
  return (
    <div className=''>
      <BalanceCard />
      <TransactionRecordsTable records={transactionRecords} />
    </div>
  )
}

export default NeoBankingWallet