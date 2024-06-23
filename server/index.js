import express from "express";
import cors from "cors";
import userRouter from "./router/user.router.js";
import requireUserAuth from "./middleware/user.middleware.js";
import HomeRouter from "./router/home.router.js";
import AdminRouter from "./router/admin.router.js";
import ProductRouter from "./router/product.router.js";

const app = express();
const PORT = 8080;

app.use(express.json());
const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use("/api/auth/*", requireUserAuth);
app.use("/api", userRouter);
app.use("/api/home", HomeRouter);
app.use("/api/admin", AdminRouter);
app.use("/api/product", ProductRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
