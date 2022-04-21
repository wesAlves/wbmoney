import Modal from 'react-modal'
import { Container } from './styles'

interface NewTransactionModalProps {
    isOpen: boolean
    onResquestClose: () => void
}

Modal.setAppElement('#root')

export function NewTransactionModal({
    isOpen,
    onResquestClose,
}: NewTransactionModalProps) {
    return (
        <Container>
            <Modal
                isOpen={isOpen}
                onRequestClose={onResquestClose}
                overlayClassName="recat-modal-overlay"
                className="react-modal-content"
            >
                <h2>Add new transaction</h2>

                <input placeholder="Title" />

                <input type="number" placeholder="price" />

                <input placeholder="category" />

                <button type="submit">Create</button>
            </Modal>
        </Container>
    )
}
