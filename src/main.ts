import { getDataAH } from "./services/api.js";
import { findItemIdByName } from "./utils/findItemId.js";
import { Auctions } from "./dataclass/Auctions.js";

export async function searchForItems(itemName: string) {
  const auctionHouseData = await getDataAH();
  const auctionItem = await findItemIdByName(itemName);
  const matchingItems = await auctionHouseData.filter(
    (e: { item: { id: number | undefined } }) => e.item.id == auctionItem?.id
  );
  if (matchingItems.length === 0) {
    console.log("Found no items matching your search..");
  }

  let foundMatches = [];
  for (const attribute of matchingItems) {
    const { bid, buyout, quantity } = attribute;
    let a = new Auctions(bid, buyout, quantity, auctionItem.name);
    foundMatches.push(a);
  }
  foundMatches.sort((a, b) => b.buyOut - a.buyOut);
  foundMatches.forEach((auction) => {
    console.log(auction.toString());
  });
  return foundMatches;
}
