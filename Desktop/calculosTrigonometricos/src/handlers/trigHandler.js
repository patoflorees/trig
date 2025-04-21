"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const trigController_1 = require("../controllers/trigController");
const router = (0, express_1.Router)();
router.get('/sin/:id', trigController_1.getSin);
router.get('/cos/:id', trigController_1.getCos);
router.get('/tan/:id', trigController_1.getTan);
exports.default = router;
