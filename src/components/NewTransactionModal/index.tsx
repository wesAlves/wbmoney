import Modal from 'react-modal'
import { Container, TransactionTypeContainer, RadioBox } from './styles'

import closeImg from '../../assets/close.svg'
import income from '../../assets/income.svg'
import outcome from '../../assets/outcome.svg'
import { useState } from 'react'

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
            <Container>
                <h2>Add new transaction</h2>

                <input placeholder="Title" />

                <input type="number" placeholder="price" />

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

                <input placeholder="category" />

                <button type="submit">Create</button>
            </Container>
        </Modal>
    )
}
