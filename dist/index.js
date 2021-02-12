"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = express_1.default();
app.get('/', function (req, res) {
    res.header({
        'Access-Control-Allow-Origin': '*',
    });
    res.json({ message: 'Hello world' });
});
app.listen(8080, function () {
    console.info('Server running on port 8080.');
});
