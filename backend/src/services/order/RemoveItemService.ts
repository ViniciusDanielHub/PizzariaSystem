import { prismaClient } from '../../prisma/client'

interface IItemRequest {
  item_id: string;
}

export class RemoveItemService {
  async execute({ item_id }: IItemRequest) {

    const order = await prismaClient.item.delete({
      where: {
        id: item_id
      }
    })

    return order;
  }
}
