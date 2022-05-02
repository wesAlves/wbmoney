import { Container } from './styles'

import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'
import { useTransactions } from '../../hooks/useTransactions'

export function Summary() {
    const { transactions } = useTransactions()

    if (!transactions) {
        return <>None</>
    } else {
        const totalDeposits = transactions.reduce(
            (acc, transaction) => {
                if (transaction.type === 'deposit') {
                    acc.deposit += transaction.amount
                    acc.total += transaction.amount
                } else {
                    acc.withdraws += transaction.amount
                    acc.total -= transaction.amount
                }

                return acc
            },
            {
                deposit: 0,
                withdraws: 0,
                total: 0,
            }
        )

        return (
            <Container>
                <div>
                    <header>
                        <p>Income</p>
                        <img src={incomeImg} alt="Income" />
                    </header>
                    <strong>
                        {new Intl.NumberFormat('pt-pt', {
                            style: 'currency',
                            currency: 'EUR',
                        }).format(totalDeposits.deposit)}
                    </strong>
                </div>
                <div>
                    <header>
                        <p>Outcome</p>
                        <img src={outcomeImg} alt="Income" />
                    </header>
                    <strong>
                        -
                        {new Intl.NumberFormat('pt-pt', {
                            style: 'currency',
                            currency: 'EUR',
                        }).format(totalDeposits.withdraws)}
                    </strong>
                </div>
                <div className="green">
                    <header>
                        <p>Total</p>
                        <img src={totalImg} alt="Income" />
                    </header>
                    <strong>
                        {new Intl.NumberFormat('pt-pt', {
                            style: 'currency',
                            currency: 'EUR',
                        }).format(totalDeposits.total)}
                    </strong>
                </div>
            </Container>
        )
    }
}
