import React from 'react'
import * as S from './styled'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ModalBoot } from './components/ModalBoot';

export const Budget = () => {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <main>
      <S.WrapperHandlerBudget>
        <S.Text>Deseja adicionar alguma meta ?</S.Text>
        <S.ButtonBoot variant="success" size='lg' onClick={() => setModalShow(true)}>ADICIONAR META</S.ButtonBoot>
      </S.WrapperHandlerBudget>

      <ModalBoot
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </main>
  )
}
