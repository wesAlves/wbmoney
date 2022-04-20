import logoImg from '../../assets/logo.svg'

import Modal from 'react-modal'

import {Container, Content} from './styles'
import { useState } from 'react'

interface IHeaderProps{
    onOpenNewTransactionModal: () => void;
}

export function Header({onOpenNewTransactionModal}:IHeaderProps){

    

    return (
      <Container>
          <Content>

          <img src={logoImg} alt="wb money" />
          <button onClick={onOpenNewTransactionModal}>
              New transaction
          </button>

          
          </Content>
      </Container>
    )
}