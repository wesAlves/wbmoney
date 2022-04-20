import { Container } from "./styles"

import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'

export function Summary(){
    return (
        <Container>
            <div>
                <header>
                    <p>Income</p>
                    <img src={incomeImg} alt="Income" />
                </header>
                <strong>£1000.00</strong>
            </div>
            <div>
                <header>
                    <p>Outcome</p>
                    <img src={outcomeImg} alt="Income" />
                </header>
                <strong>-£300.00</strong>
            </div>
            <div className="green">
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="Income" />
                </header>
                <strong>£700.00</strong>
            </div>
        </Container>
    )
}