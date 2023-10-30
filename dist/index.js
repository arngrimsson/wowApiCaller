"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const main_1 = require("./main");
const app = (0, express_1.default)();
const port = 3000;
const arg = process.argv.slice(2).toString();
console.log("🚀 ~ file: index.ts:8 ~ arg:", arg);
app.get("/auctions", async (req, res) => {
    try {
        const auction = await (0, main_1.searchForItems)(arg);
        console.log(auction.toString());
        res.send(auction.toString());
    }
    catch (error) {
        console.error(error);
        res.status(500).send("Internal server error");
    }
});
app.get("/", async (req, res) => {
    try {
        res.send("hej");
    }
    catch (error) {
        console.error(error);
        res.status(500).send("Internal server error");
    }
});
// Start the server
app.listen(port, () => {
    console.log(`server is urnning on port ${port}`);
});
//# sourceMappingURL=index.js.map