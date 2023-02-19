import { prismaClient } from '../../prisma/client'

interface IOrderRequest {
  table:number;
  name: string;
}

export class CreateOrderService {
  async execute({table, name}: IOrderRequest){
    const order = await prismaClient.order.create({
      data: {
        table,
        name
      }
    }) 

    return order;
  }
}
