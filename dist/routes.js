"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = require("express");
var controllers_1 = require("./controllers");
var router = (0, express_1.Router)();
exports.router = router;
var testController = new controllers_1.TestController();
// GET
router.get("/test", testController.test);
