import axios from "axios";
import config from "./../config";

let token: string = "";
let realmID = 5261;
let auctionHouseID = 2;
const queryParamsForAH: Record<string, string> = {
  region: "eu",
  namespace: "dynamic-classic1x-eu",
  access_token: token,
};

export async function getOAuthToken() {
  const clientId = config.clientID;
  const clientSecret = config.clientSecret;
  const authString = `${clientId}:${clientSecret}`;
  const base64Auth = Buffer.from(authString).toString("base64");
  try {
    const response = await axios.post("https://oauth.battle.net/token", "grant_type=client_credentials", {
      headers: {
        Authorization: `Basic ${base64Auth}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
    return response.data.access_token;
  } catch (error) {
    console.log(error);
  }
}

export async function getDataAH() {
  const fetcedToken = await getOAuthToken();
  queryParamsForAH.access_token = fetcedToken;
  const url = new URL(`https://eu.api.blizzard.com/data/wow/connected-realm/${realmID}/auctions/${auctionHouseID}`);
  try {
    if (queryParamsForAH) {
      Object.keys(queryParamsForAH).forEach((key) => {
        url.searchParams.append(key, queryParamsForAH[key]);
      });
    }
    const response = await axios.get(url.toString());
    const allAuctionsData = response.data.auctions;
    console.log("Fetching your data from the API....");
    return allAuctionsData;
  } catch (error) {
    console.log("Damn, Could not fetch data from API...");
  }
}
