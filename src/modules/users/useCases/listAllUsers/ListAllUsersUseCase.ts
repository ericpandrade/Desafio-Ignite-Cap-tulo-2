import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    // Complete aqui
    const user = this.usersRepository.findById(user_id);

    if (!user) {
      throw new Error("User not found.");
    }

    if (user !== undefined && user.admin !== true) {
      throw new Error("Use a admin user to list all users.");
    }

    const listAllUsers = this.usersRepository.list();

    return listAllUsers;
  }
}

export { ListAllUsersUseCase };
