"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchForItems = void 0;
const api_js_1 = require("./services/api.js");
const findItemId_js_1 = require("./utils/findItemId.js");
const Auctions_js_1 = require("./dataclass/Auctions.js");
async function searchForItems(itemName) {
    const auctionHouseData = await (0, api_js_1.getDataAH)();
    const auctionItem = await (0, findItemId_js_1.findItemIdByName)(itemName);
    const matchingItems = await auctionHouseData.filter((e) => e.item.id == auctionItem?.id);
    if (matchingItems.length === 0) {
        console.log("Found no items matching your search..");
    }
    let foundMatches = [];
    for (const attribute of matchingItems) {
        const { bid, buyout, quantity } = attribute;
        let a = new Auctions_js_1.Auctions(bid, buyout, quantity, auctionItem.name);
        foundMatches.push(a);
    }
    foundMatches.sort((a, b) => b.buyOut - a.buyOut);
    return foundMatches;
}
exports.searchForItems = searchForItems;
//# sourceMappingURL=main.js.map