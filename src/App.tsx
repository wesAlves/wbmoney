import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Headers";
import { GlogalStyles } from "./styles/global"
import {createServer} from 'miragejs'

createServer({
  routes(){
    this.namespace = 'api'

    this.get('/transactions', () =>{
      return [
        {
          id: 1,
          title: "Transaction 1",
          amount: 400,
          type: 'deposit',
          category: 'Food',
          createdAt: new Date()
        }
      ]
    })
  }
})

export function App() {
  return (
    <>
    <Header />
    <Dashboard />
      <GlogalStyles />
    </>
  );
}

