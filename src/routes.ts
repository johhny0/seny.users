import { Request, Response, Router } from "express";
import { UserService } from "./services/userServices";
import { userValidation, userValidationUpdate } from "./validations/userValidation";

const router = Router();

const userService = new UserService();

router.get("/", (_: Request, res: Response) => res.json({ msg: "Users Microservice Running! 🌉" }));

router.get("/users", userService.getAll);

router.get("/users/:id", userService.getById);

router.put("/users/:id", userValidationUpdate, userService.update);

router.post("/users", userValidation, userService.save);

router.delete("/users/:id", userService.delete);

router.all("/{*path}", (_: Request, res: Response) => res.status(404).json({ msg: "Users Microservice: Route Does Not Exists! 🛑🤚" }));

export default router;