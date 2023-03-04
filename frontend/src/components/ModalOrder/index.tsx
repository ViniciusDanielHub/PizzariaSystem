import Modal from 'react-modal';

import * as S from './styles'

import { FiX } from 'react-icons/fi';

import { OrderItemProps } from 'pages/dashboard';

interface ModalOrderProps{
  isOpen: boolean;
  onRequestClose: () => void;
  order: OrderItemProps[] | undefined;
  handleFinishOrderModal: (id: string | undefined) => void
}

export function ModalOrder({isOpen, onRequestClose, order, handleFinishOrderModal}: ModalOrderProps) {

  const customStyles = {
    content: {
      top: '50%',
      bottom: 'auto',
      left: '50%',
      right: 'auto',
      padding: '30px',
      transform: 'translate(-50%, -50%)',
      backgroundColor: '#1d1d2e'
    }
  };

  return(
    <Modal
    isOpen={isOpen}
    onRequestClose={onRequestClose}
    style={customStyles}
    >
      <S.ButtonModal
      type='button'
      onClick={onRequestClose}
      >
       <FiX size={40} color="#f34748"/>
      </S.ButtonModal>

      <S.ContainerModal>
        <S.TitleOrderModal>
          Detalhes do pedido
        </S.TitleOrderModal>

        <S.Table>
         Mesa: <strong>{order?.[0].order.table} </strong>
        </S.Table>

        {order?.map(item => (
          <S.ContainerItem key={item.id}>

            <S.AmountItem>
              {item.amount} 
              -
               <strong>
                {item.product.name}
                </strong>
              </S.AmountItem>

              <S.Description>
                {item.product.description}
              </S.Description>
          </S.ContainerItem>
        ))}

        <S.ButtonOrder onClick={() => {handleFinishOrderModal(order?.[0].order_id) }}>
          Concluir pedido
        </S.ButtonOrder>
      </S.ContainerModal>
    </Modal>
  )
}