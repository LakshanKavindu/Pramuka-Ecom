import express from "express";
import cors from "cors";

const app = express();
const PORT = 8080;

app.use(express.json());
const corsOptions = {
    origin: "http://localhost:3000",
    credentials: true,
    optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});



