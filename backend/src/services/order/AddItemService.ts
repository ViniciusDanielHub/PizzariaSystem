import { prismaClient } from '../../prisma/client'

interface IItemRequest {
  order_id: string;
  product_id: string;
  amount: number;
}

export class AddItemService {
  async execute({ order_id, product_id, amount }: IItemRequest) {

    const order = await prismaClient.item.create({
      data: {
        order_id:order_id,
        product_id:product_id,
        amount
      }
    })

    return order;
  }
}
