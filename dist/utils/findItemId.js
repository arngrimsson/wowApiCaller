"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.findItemIdByName = void 0;
const fs_1 = __importDefault(require("fs"));
const csv_parser_1 = __importDefault(require("csv-parser"));
async function findItemIdByName(nameToFind) {
    return new Promise(async (resolve, reject) => {
        try {
            const fPath = "src/data/items.csv";
            const inputStream = fs_1.default.createReadStream(fPath, { encoding: "utf-8" });
            inputStream.pipe((0, csv_parser_1.default)()).on("data", (data) => {
                const item = data;
                if (data.name.trim().toLowerCase() === nameToFind.trim().toLowerCase()) {
                    console.log(item.name);
                    resolve(item);
                }
            });
        }
        catch (error) {
            reject(error);
        }
    });
}
exports.findItemIdByName = findItemIdByName;
//# sourceMappingURL=findItemId.js.map