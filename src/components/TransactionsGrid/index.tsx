import { useEffect, useState } from 'react'
import { api } from '../../services/api'
import { Container } from './styles'

interface TransactionProps {
    id: number
    title: string
    amount: number
    type: string
    category: string
    createdAt: string
}

export function TransactionsGrid() {
    const [transactions, setTransactions] = useState<TransactionProps[]>([])

    useEffect(() => {
        api.get('transactions').then((response) =>
            setTransactions(response.data.transactions)
        )
    }, [])

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Amount</th>
                        <th>Category</th>
                        <th>Date</th>
                    </tr>
                </thead>

                <tbody>
                    {transactions.map((transaction) => (
                        <tr key={transaction.id}>
                            <td>{transaction.title}</td>
                            <td className={transaction.type}>
                                {new Intl.NumberFormat('pt-pt', {
                                    style: 'currency',
                                    currency: 'EUR',
                                }).format(transaction.amount)}
                            </td>
                            <td>{transaction.category}</td>
                            <td>
                                {new Intl.DateTimeFormat().format(
                                    new Date(transaction.createdAt)
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Container>
    )
}
