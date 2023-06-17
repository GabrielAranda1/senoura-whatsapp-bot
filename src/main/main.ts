import dotenv from "dotenv";

dotenv.config();

import app from "./app";

console.log("Starting server on port 3000...")

app.listen(process.env.PORT || 3000);