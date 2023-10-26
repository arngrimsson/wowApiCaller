import express, { Express, Request, Response } from "express";
import { searchForItems } from "./main";
import { Auctions } from "./dataclass/Auctions";

const app: Express = express();
const port = 3000;

// Define a simple route
app.get("/d", async (req: Request, res: Response) => {
  try {
    const auction: Auctions[] = await searchForItems("Helm of Narv ");
    console.log(auction.toString());
    res.send(auction.toString());
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
