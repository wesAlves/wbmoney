import Modal from 'react-modal'
import { Container, TransactionTypeContainer, RadioBox } from './styles'

import closeImg from '../../assets/close.svg'
import income from '../../assets/income.svg'
import outcome from '../../assets/outcome.svg'
import { FormEvent, useState } from 'react'
import { useTransactions } from '../../hooks/useTransactions'

interface NewTransactionModalProps {
    isOpen: boolean
    onResquestClose: () => void
}

Modal.setAppElement('#root')

export function NewTransactionModal({
    isOpen,
    onResquestClose,
}: NewTransactionModalProps) {
    const [type, setType] = useState('deposit')

    const [title, setTitle] = useState('')
    const [amount, setAmount] = useState(0)
    const [category, setCategory] = useState('')

    const { CreateTransaction } = useTransactions()

    async function handleSubmitNewTransaction(event: FormEvent) {
        event.preventDefault()

        await CreateTransaction({
            title,
            amount,
            category,
            type,
        })

        setTitle('')
        setType('deposit')
        setAmount(0)
        setCategory('')
        onResquestClose()
    }

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onResquestClose}
            overlayClassName="recat-modal-overlay"
            className="react-modal-content"
        >
            <button
                type="button"
                onClick={onResquestClose}
                className="react-modal-close"
            >
                <img src={closeImg} alt="close" />
            </button>
            <Container onSubmit={handleSubmitNewTransaction}>
                <h2>Add new transaction</h2>

                <input
                    placeholder="Title"
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                />

                <input
                    type="number"
                    placeholder="amount"
                    value={amount}
                    onChange={(event) => setAmount(Number(event.target.value))}
                />

                <TransactionTypeContainer>
                    <RadioBox
                        type="button"
                        onClick={() => setType('deposit')}
                        isActive={type === 'deposit'}
                        activeColor="green"
                    >
                        <img src={income} alt="income" />
                        <p>Income</p>
                    </RadioBox>

                    <RadioBox
                        type="button"
                        onClick={() => setType('withdraw')}
                        isActive={type === 'withdraw'}
                        activeColor="red"
                    >
                        <img src={outcome} alt="income" />
                        <p>Outcome</p>
                    </RadioBox>
                </TransactionTypeContainer>

                <input
                    placeholder="category"
                    value={category}
                    onChange={(event) => setCategory(event.target.value)}
                />

                <button type="submit">Create</button>
            </Container>
        </Modal>
    )
}
