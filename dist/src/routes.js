"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = require("express");
var controllers_1 = require("./controllers");
var router = (0, express_1.Router)();
exports.router = router;
var surveyController = new controllers_1.SurveyController();
var userController = new controllers_1.UserController();
var testController = new controllers_1.TestController();
// POST
router.post("/surveys", surveyController.create);
router.post("/users", userController.create);
// GET
router.get("/surveys", surveyController.show);
router.get("/test", testController.test);
