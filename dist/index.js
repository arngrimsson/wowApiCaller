"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const main_1 = require("./main");
const app = (0, express_1.default)();
const port = 3000;
// Define a simple route
app.get("/d", async (req, res) => {
    try {
        const auction = await (0, main_1.searchForItems)("Helm of Narv ");
        console.log(auction.toString());
        res.send(auction.toString());
    }
    catch (error) {
        console.error(error);
        res.status(500).send("Internal server error");
    }
});
// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
//# sourceMappingURL=index.js.map