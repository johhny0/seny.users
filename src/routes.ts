import { Request, Response, Router } from "express";
import { UserService } from "./services/userServices";

const router = Router();

const userService = new UserService();

router.get("/", (_: Request, res: Response) => res.json({ msg: "Users Microservice Running! 🌉" }));

router.get("/users", userService.getAll);

router.get("/users/:id", userService.getById);

router.post("/users", userService.save);

router.all("/{*path}", (_: Request, res: Response) => res.status(404).json({ msg: "Users Microservice: Route Does Not Exists! 🛑🤚" }));

export default router;