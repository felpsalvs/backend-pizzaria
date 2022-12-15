import { Request, Response } from "express";
import { SendOrderService } from "../../services/order/SendOrderService";

class SendOrderController {
  async handle(request: Request, response: Response) {
    const { order_id } = request.body;

    const sendOrder = new SendOrderService();

    const order = await sendOrder.execute({
      order_id,
    });

    return response.json(order);
  }
}

export { SendOrderController };
