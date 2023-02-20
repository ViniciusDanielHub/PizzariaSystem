import { prismaClient } from '../../prisma/client'

interface IDetailRequest {
  order_id: string;
}

export class DetailOrderService {
  async execute({ order_id }: IDetailRequest) {

    const orders = await prismaClient.item.findMany({
      where: {
        order_id
      },

      include: {
        product: true,
        order: true,
      }
    })

    return orders;
  }
}
