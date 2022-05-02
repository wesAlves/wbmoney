import { useTransactions } from '../../hooks/useTransactions'
import { Container } from './styles'

export function TransactionsGrid() {
    const { transactions } = useTransactions()

    if (transactions.length <= 0) {
        return <>none</>
    } else {
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
}
