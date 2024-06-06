import express from "express";
import cors from "cors";
import userRouter from "./router/user.router.js";

const app = express();
const PORT = 8080;

app.use(express.json());
const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use("/api/user", userRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
