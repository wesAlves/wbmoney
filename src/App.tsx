import { Dashboard } from './components/Dashboard'
import { Header } from './components/Headers'
import { GlogalStyles } from './styles/global'
import { createServer, Model } from 'miragejs'
import { useState } from 'react'
import { NewTransactionModal } from './components/NewTransactionModal'
import { TrasactionsProvider } from './hooks/useTransactions'

createServer({
    models: {
        transaction: Model,
    },

    seeds(server) {
        server.db.loadData({
            transactions: [
                {
                    id: 1,
                    title: 'Transaction 1',
                    amount: 400,
                    type: 'deposit',
                    category: 'Food',
                    createdAt: new Date(),
                },
                {
                    id: 2,
                    title: 'Transaction 2',
                    amount: 400,
                    type: 'withdraw',
                    category: 'Food',
                    createdAt: new Date(),
                },
            ],
        })
    },

    routes() {
        this.namespace = 'api'

        this.get('/transactions', () => {
            return this.schema.all('transaction')
        })

        this.post('/transactions', (schema, request) => {
            const data = JSON.parse(request.requestBody)

            return schema.create('transaction', data)
        })
    },
})

export function App() {
    const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] =
        useState(false)

    function handleOpenNewTransactionModal() {
        setIsNewTransactionModalOpen(true)
    }

    function handleCloseNewTransactionModal() {
        setIsNewTransactionModalOpen(false)
    }

    return (
        <TrasactionsProvider>
            <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
            <Dashboard />
            <NewTransactionModal
                isOpen={isNewTransactionModalOpen}
                onResquestClose={handleCloseNewTransactionModal}
            />

            <GlogalStyles />
        </TrasactionsProvider>
    )
}
