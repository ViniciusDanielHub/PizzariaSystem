import { prismaClient } from '../../prisma/client'

interface IOrderRequest {
  order_id: string;
}

export class FinishOrderService {
  async execute({order_id}: IOrderRequest) {

    const order = await prismaClient.order.update({
      where: {
        id: order_id
      },

      data: {
        status: true,
      }
    })

    return order;
  }
}
