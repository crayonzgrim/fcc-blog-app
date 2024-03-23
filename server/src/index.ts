import express from "express";

const app = express();

app.use(express.json());

const PORT = 8800;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
