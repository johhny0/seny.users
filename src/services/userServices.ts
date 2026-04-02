import { Request, Response } from "express";
import { User } from "../domain/User";
import { validationResult } from "express-validator";

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
        if (!req.body) {
            return res.status(400).json({ msg: "Body is required" });
        }

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const user = req.body;
        user.id = (users.length + 1).toString();
        users.push(user);
        return res.status(201).json({ msg: "User created successfully", user });
    }

    update(req: Request, res: Response) {
        const { id } = req.params;
        let user = users.find(u => u.id === id);
        if (!user) {
            return res.status(404).json({ msg: "User not found" });
        }

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        return res.status(200).json({ msg: "User updated successfully", user });
    }

    delete(req: Request, res: Response) {
        const { id } = req.params;
        const user = users.find(u => u.id === id);
        if (!user) {
            return res.status(404).json({ msg: "User not found" });
        }
        users.splice(users.indexOf(user), 1);
        return res.status(200).json({ msg: "User deleted successfully" });
    }
}