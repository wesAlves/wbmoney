import { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from './services/api'

interface Transaction {
    id: number
    title: string
    amount: number
    type: string
    category: string
    createdAt: string
}

type CreateTransaction = Omit<Transaction, 'id' | 'createdAt'>

interface TransacitonPrividerProps {
    children: ReactNode
}

interface TransactionsContextData {
    transactions: Transaction[]
    CreateTransaction: (transaction: CreateTransaction) => void
}

export const TransactionsContext = createContext<TransactionsContextData>(
    {} as TransactionsContextData
)

export function TrasactionsProvider({ children }: TransacitonPrividerProps) {
    const [transactions, setTransactions] = useState<Transaction[]>([])

    useEffect(() => {
        api.get('transactions').then((response) =>
            setTransactions(response.data.transactions)
        )
    }, [])

    function CreateTransaction(transaction: CreateTransaction) {
        api.post('/transactions', transaction)
    }

    return (
        <TransactionsContext.Provider
            value={{ transactions, CreateTransaction }}
        >
            {children}
        </TransactionsContext.Provider>
    )
}
