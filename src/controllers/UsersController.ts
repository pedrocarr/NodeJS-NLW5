import { UsersService } from "../services/UsersService";
import { Request, Response } from "../services/UsersService"



class UsersController {

  async create(request: Request, response: Response) {
    const usersService = new UsersService();
  }

}

export { UsersController }