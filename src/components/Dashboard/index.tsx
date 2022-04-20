import { Summary } from "../Summary";
import { TransactionsGrid } from "../TransactionsGrid";
import { Container } from "./styles";

export function Dashboard(){
    return(
        <Container>
            <Summary />
    <TransactionsGrid />

        </Container>
    )
}