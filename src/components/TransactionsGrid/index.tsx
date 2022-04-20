import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";


export function TransactionsGrid(){
useEffect(()=>{
    api.get('transactions').then(response => console.log(response.data))
}, []);

    return(
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
        <tr>
            <td>Web develop</td>
            <td className="deposit">£12000.00</td>
            <td>Category</td>
            <td>20/02/2022</td>
        </tr>
        
        <tr>
            <td>Web develop</td>
            <td className="withdraw">- £12000.00</td>
            <td>Category</td>
            <td>20/02/2022</td>
        </tr>
    </table>
</Container>
        )
}