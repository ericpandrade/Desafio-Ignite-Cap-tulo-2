import { Request, Response } from "express";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) {}

  handle(request: Request, response: Response): Response {
    // Complete aqui
    const { user_id } = request.params;

    try {
      const userAdminModified = this.turnUserAdminUseCase.execute({ user_id });

      return response.status(200).json(userAdminModified);
    } catch (err) {
      return response
        .status(404)
        .json({ error: err.message || "Unexpected error" });
    }
  }
}

export { TurnUserAdminController };
