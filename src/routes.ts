import { Router } from 'express';
import {  TestController } from './controllers';

const router = Router();

const testController = new TestController();

// GET
router.get("/test", testController.test);

export { router };
