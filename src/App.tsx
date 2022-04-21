import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Headers";
import { GlogalStyles } from "./styles/global"
import {createServer} from 'miragejs'
import { useState } from "react";
import { NewTransactionModal } from "./components/NewTransactionModal";

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

    const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false)
    
    function handleOpenNewTransactionModal(){
      setIsNewTransactionModalOpen(true)
    }
    
    function handleCloseNewTransactionModal(){
        setIsNewTransactionModalOpen(false)
    }


  return (
    <>
    <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
    <Dashboard />
    <NewTransactionModal isOpen={isNewTransactionModalOpen} onResquestClose={handleCloseNewTransactionModal}/>

  
      <GlogalStyles />
    </>
  );
}

