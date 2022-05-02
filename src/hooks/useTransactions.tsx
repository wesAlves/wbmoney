import {
    createContext,
    ReactNode,
    useContext,
    useEffect,
    useState,
} from 'react'
import { api } from '../services/api'

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
    CreateTransaction: (transaction: CreateTransaction) => Promise<void>
}

const TransactionsContext = createContext<TransactionsContextData>(
    {} as TransactionsContextData
)

export function TrasactionsProvider({ children }: TransacitonPrividerProps) {
    const [transactions, setTransactions] = useState<Transaction[]>([])

    async function GetTransactions() {
        const response = await api.get('/')
        setTransactions(response.data)
        return response.data
    }

    GetTransactions()
    // useEffect(()  => {
    //     api.get('/').then((response) =>
    //         setTransactions(response.data.transactions)
    //     )
    // }, [])

    async function CreateTransaction(transactionInput: CreateTransaction) {
        const response = await api.post('/', {
            ...transactionInput,
            createdAt: new Date(),
        })

        const { transaction } = response.data

        setTransactions([...transactions, transaction])
    }

    return (
        <TransactionsContext.Provider
            value={{ transactions, CreateTransaction }}
        >
            {children}
        </TransactionsContext.Provider>
    )
}

export function useTransactions() {
    const context = useContext(TransactionsContext)

    return context
}
