import dotenv from "dotenv";

dotenv.config();

const config = {
  clientID: process.env.CLIENT_ID || "",
  clientSecret: process.env.CLIENT_SECRET || "",
};

export default config;
