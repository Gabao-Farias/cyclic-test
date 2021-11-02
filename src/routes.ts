import { Router } from 'express';
import { UserController, SurveyController, TestController } from './controllers';

const router = Router();

const surveyController = new SurveyController();
const userController = new UserController();
const testController = new TestController();

// POST
router.post("/surveys", surveyController.create);
router.post("/users", userController.create);

// GET
router.get("/surveys", surveyController.show);
router.get("/test", testController.test);

export { router };
