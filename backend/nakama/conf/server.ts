import express from "express";
import router from "conf/routes";

const app = express();

app.use(express.json());
app.use("/auth", router);

export default app;
