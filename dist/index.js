"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const main_1 = require("./main");
const app = (0, express_1.default)();
const port = 3000;
app.get("/", async (req, res) => {
    try {
        const auction = await (0, main_1.searchForItems)("silk cloth ");
        auction.forEach((element) => {
            element.toJSON();
        });
        res.send(auction);
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