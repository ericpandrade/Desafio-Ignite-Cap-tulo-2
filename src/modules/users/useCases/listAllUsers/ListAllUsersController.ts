import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    // Complete aqui
    let { user_id } = request.headers;
    user_id = user_id.toString();

    try {
      const listAll = this.listAllUsersUseCase.execute({ user_id });

      return response.json(listAll);
    } catch (err) {
      return response.status(400).json({
        error: err.message || "Unexpected Error",
      });
    }
  }
}

export { ListAllUsersController };
