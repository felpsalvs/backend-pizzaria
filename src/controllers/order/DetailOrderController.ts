import { Request, Response } from "express";
import { DetailOrderService } from "../../services/order/DetailOrderService";

class DetailOrderController {
  async handle(request: Request, response: Response) {
    const order_id = request.query.order_id as string;

    const detailOrderService = new DetailOrderService();

    const orders = await detailOrderService.execute({
        order_id
    });

    return response.json(orders);
  }
}

export { DetailOrderController };