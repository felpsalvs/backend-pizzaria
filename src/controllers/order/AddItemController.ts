import { Request, Response } from "express";
import { AddItemService } from "../../services/order/AddItemService";

class AddItemController {
    async handle(request: Request, response: Response) {
        const { order_id, amount, product_id } = request.body;
    
        const addItemService = new AddItemService();
    
        const order = await addItemService.execute({
        order_id,
        amount,
        product_id,
        });
    
        return response.json(order);
    }
    }

export { AddItemController };