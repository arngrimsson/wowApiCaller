"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDataAH = exports.getOAuthToken = void 0;
const axios_1 = __importDefault(require("axios"));
const config_1 = __importDefault(require("./../config"));
let token = "";
let realmID = 5261;
let auctionHouseID = 2;
const queryParamsForAH = {
    region: "eu",
    namespace: "dynamic-classic1x-eu",
    access_token: token,
};
async function getOAuthToken() {
    const clientId = config_1.default.clientID;
    const clientSecret = config_1.default.clientSecret;
    const authString = `${clientId}:${clientSecret}`;
    const base64Auth = Buffer.from(authString).toString("base64");
    try {
        const response = await axios_1.default.post("https://oauth.battle.net/token", "grant_type=client_credentials", {
            headers: {
                Authorization: `Basic ${base64Auth}`,
                "Content-Type": "application/x-www-form-urlencoded",
            },
        });
        return response.data.access_token;
    }
    catch (error) {
        console.log(error);
    }
}
exports.getOAuthToken = getOAuthToken;
async function getDataAH() {
    const fetcedToken = await getOAuthToken();
    queryParamsForAH.access_token = fetcedToken;
    const url = new URL(`https://eu.api.blizzard.com/data/wow/connected-realm/${realmID}/auctions/${auctionHouseID}`);
    try {
        if (queryParamsForAH) {
            Object.keys(queryParamsForAH).forEach((key) => {
                url.searchParams.append(key, queryParamsForAH[key]);
            });
        }
        const response = await axios_1.default.get(url.toString());
        const allAuctionsData = response.data.auctions;
        console.log("Fetching your data from the API....");
        return allAuctionsData;
    }
    catch (error) {
        console.log("Damn, Could not fetch data from API...");
    }
}
exports.getDataAH = getDataAH;
//# sourceMappingURL=api.js.map