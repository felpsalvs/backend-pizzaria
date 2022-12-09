import { Request, Response } from "express";
import { DetailUserServices } from "../../services/user/DetailUserServices";

class DetailUserController {
    async handle(request: Request, response: Response) {

        const user_id = request.user_id;

        const detailUserServices = new DetailUserServices();

        const user = await detailUserServices.execute(user_id);

        return response.json(user);
    }
}

export { DetailUserController };