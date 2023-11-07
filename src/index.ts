import express, { Express, Request, Response } from "express";
import { searchForItems } from "./main";
import { Auctions } from "./dataclass/Auctions";

const app: Express = express();
const port = 3000;

app.get("/", async (req: Request, res: Response) => {
  try {
    const auction: Auctions[] = await searchForItems("silk cloth ");
    auction.forEach((element) => {
      element.toJSON();
    });
    res.send(auction);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
});

// Start the server
app.listen(port, () => {
  console.log(`server is urnning on port ${port}`);
});
