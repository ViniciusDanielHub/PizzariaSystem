import { useContext, useEffect, useState } from 'react';
import Head from 'next/head';

import * as S from './styles'

import { AuthContext } from 'context/auth/authContext';
import UserSession from 'pages/usersession';
import { Header } from 'components/Header';
import { canSSRAuth } from 'utils/canSSRAuth';
import { FiRefreshCcw } from 'react-icons/fi';
import { setupAPIClient } from 'services/api/api';
import Modal from 'react-modal';
import { ModalOrder } from 'components/ModalOrder';

type OrderProps = {
  id: string;
  table: number;
  status: boolean;
  draft: boolean;
  name: string | null;
}

type HomeProps = {
  orders: OrderProps[];
}

export type OrderItemProps = {
  id: string;
  amount: number ;
  order_id: string;
  product_id: string;
  product: {
    id: string;
    name: string;
    description: string;
    price: string;
    banner: string;
  }
  order: {
    id: string;
    table: string | number;
    status: boolean;
    name: string | null; 
  }
}

export default function Dashboard({orders}: HomeProps) {

  const [orderList, setOrderList] = useState(orders || [])
  const [modalItem, setModalItem] = useState<OrderItemProps[]>()
  const [modalVisible, setModalVisible] = useState(false)

  function handleCloseModal() {
    setModalVisible(false);
  }

  async function handleOpenModalView(id: string) {
    const apiClient = setupAPIClient();

    const response = await apiClient.get('/order/detail', {
      params: {
        order_id: id,
      }
    })

    setModalItem(response.data)
    setModalVisible(true)
  }

  async function handleFinishOrderModal(id: string | undefined){
   const apiClient = setupAPIClient()
   await apiClient.put('/order/finish', {
    order_id: id
   })

   const response = await apiClient.get('/orders');

    setOrderList(response.data);

   setModalVisible(false)
  }

  async function handleRefreshOrders() {
    const apiClient = setupAPIClient()

    const response = await apiClient.get('/orders');

    setOrderList(response.data);
  }

  Modal.setAppElement('#__next');

  return (
    <>
      <Head>
        <title>Pizzaria System - Dashboard</title>
      </Head>

      <Header />

      <S.ContainerCenter>
        <S.OrderHeader>

          <S.TitleOrder>
            Últimos Pedidos
          </S.TitleOrder>

          <S.ButtonRefresh onClick={handleRefreshOrders}>
            <FiRefreshCcw size={24} color='#3CD3C1'/>
          </S.ButtonRefresh>

        </S.OrderHeader>

        <S.ListOrders>

         {orderList.length === 0 && (
          <S.EmptyListText>
            Nenhum pedido aberto foi encontrado...
          </S.EmptyListText>
         )}

          {orderList.map(item => (
            <S.OrderItem key={item.id}>
              <S.ButtonOrderItem onClick={() => handleOpenModalView(item.id)}>
                <S.Tag />
                <S.NameTable>Mesa {item.table}</S.NameTable>
              </S.ButtonOrderItem>
            </S.OrderItem>
          ))}
        </S.ListOrders>

      </S.ContainerCenter>

      { modalVisible && (
        <ModalOrder
          isOpen={modalVisible}
          onRequestClose={handleCloseModal}
          order={modalItem}
          handleFinishOrderModal={handleFinishOrderModal}
        />
      )}
    </>
  )
}

export const getServerSideProps = canSSRAuth(async (ctx) => {

  const apiClient = setupAPIClient(ctx);

  const response = await apiClient.get('/orders');

  return {
    props: {
      orders: response.data
    }
  }
})