import prismaClient from "../../prisma";

interface ItemRequest {
  order_id: string;
  amount: number;
  product_id: string;
}

class AddItemService {
  async execute({ order_id, amount, product_id }: ItemRequest) {
    const order = await prismaClient.item.create({
      data: {
        amount,
        product_id: product_id,
        order_id: order_id,
      },
    });

    return order;
  }
}

export { AddItemService };
