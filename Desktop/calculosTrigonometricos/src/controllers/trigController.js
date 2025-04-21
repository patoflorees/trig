"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTan = exports.getCos = exports.getSin = void 0;
const database_1 = __importDefault(require("../db/database"));
const getSin = (req, res) => {
    const id = req.params.id;
    database_1.default.get("SELECT angle FROM trig_data WHERE id = ?", [id], (err, row) => {
        if (err) {
            res.status(500).send(err.message);
        }
        else {
            const result = Math.sin(row.angle * Math.PI / 180);
            res.json({ angle: row.angle, sin: result });
        }
    });
};
exports.getSin = getSin;
const getCos = (req, res) => {
    const id = req.params.id;
    database_1.default.get("SELECT angle FROM trig_data WHERE id = ?", [id], (err, row) => {
        if (err) {
            res.status(500).send(err.message);
        }
        else {
            const result = Math.cos(row.angle * Math.PI / 180);
            res.json({ angle: row.angle, cos: result });
        }
    });
};
exports.getCos = getCos;
const getTan = (req, res) => {
    const id = req.params.id;
    database_1.default.get("SELECT angle FROM trig_data WHERE id = ?", [id], (err, row) => {
        if (err) {
            res.status(500).send(err.message);
        }
        else {
            const result = Math.tan(row.angle * Math.PI / 180);
            res.json({ angle: row.angle, tan: result });
        }
    });
};
exports.getTan = getTan;
