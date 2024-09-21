import express, { Request, Response, NextFunction } from "express";
import studentRouter from "./router/studentRouter";

const app = express();
app.use(express.json());

app.use("/students", studentRouter);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({ status: 'error', 'message': err.message });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is Up on Port => ${PORT}`);
});
