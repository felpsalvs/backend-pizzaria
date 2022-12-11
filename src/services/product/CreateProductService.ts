import prismaClient from "../../prisma";

interface ProductRequest {
    name: string;
    price: string;
    description: string;
    category_id: string;
    banner: string;
}
class CreateProductService {
  async execute({ name, price, description, category_id, banner }: ProductRequest) {

    const product = await prismaClient.product.create({
      data: {
        name,
        price,
        description,
        category_id,
        banner,
      },
    });

    return product;
  }
}



export { CreateProductService };