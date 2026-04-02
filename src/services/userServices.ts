import { Request, Response } from "express";
import { User } from "../domain/User";

const users: User[] = [
    {
        id: "1",
        name: "John Doe",
        email: "[EMAIL_ADDRESS]",
        password: "password"
    },
    {
        id: "2",
        name: "Jane Doe",
        email: "[EMAIL_ADDRESS]",
        password: "password"
    }
]

export class UserService {

    getAll(_: Request, res: Response) {
        return res.json(users);
    }

    getById(req: Request, res: Response) {
        const { id } = req.params;
        const user = users.find(u => u.id === id);
        return res.json(user);
    }

    save(req: Request, res: Response) {
        const user = req.body;
        console.log(user);
        return res.json({ msg: "Users Microservice Running! 🌉" })
    }
}