import fs from "fs";
import csv from "csv-parser";

interface Item {
  id: number;
  name: string;
}

export async function findItemIdByName(nameToFind: string): Promise<Item> {
  return new Promise<Item>(async (resolve, reject) => {
    try {
      const fPath = "src/data/items.csv";
      const inputStream = fs.createReadStream(fPath, { encoding: "utf-8" });
      inputStream.pipe(csv()).on("data", (data: Item) => {
        const item: Item = data;
        if (data.name.trim().toLowerCase() === nameToFind.trim().toLowerCase()) {
          console.log(item.name);
          resolve(item);
        }
      });
    } catch (error) {
      reject(error);
    }
  });
}
