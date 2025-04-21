"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sqlite3_1 = __importDefault(require("sqlite3"));
const db = new sqlite3_1.default.Database(':memory:');
db.serialize(() => {
    db.run("CREATE TABLE trig_data (id INTEGER PRIMARY KEY, angle REAL)");
    db.run("INSERT INTO trig_data (angle) VALUES (30)");
    db.run("INSERT INTO trig_data (angle) VALUES (45)");
    db.run("INSERT INTO trig_data (angle) VALUES (60)");
});
exports.default = db;
