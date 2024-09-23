// import cors from "cors";
// import dotenv from "dotenv";
// import express from "express";
// import mongoose from "mongoose";
// import userRoutes from "./routes/users.js";
// import answerRoutes from "./routes/Answers.js";
// import questionRoutes from "./routes/Questions.js";

// const app = express();
// dotenv.config();

// app.use(express.json({ limit: "30mb", extended: true }));
// app.use(express.urlencoded({ limit: "30mb", extended: true }));
// app.use(cors());

// app.get("/", (req, res) => {
//   res.send("This is a stack overflow clone API");
// });

// app.use("/user", userRoutes);
// app.use("/answer", answerRoutes);
// app.use("/questions", questionRoutes);

// const PORT = process.env.PORT || 5000;

// const DATABASE_URL = process.env.CONNECTION_URL;

// mongoose.set("strictQuery", true);
// mongoose
//   .connect(DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() =>
//     app.listen(PORT, () => {
//       console.log(`server running on port ${PORT}`);
//     })
//   )
//   .catch((err) => console.log(err.message));

import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import userRoutes from "./routes/users.js";
import answerRoutes from "./routes/Answers.js";
import questionRoutes from "./routes/Questions.js";

const app = express();

// Set up your connection URL and port directly in the file
const DATABASE_URL = "mongodb+srv://admin:test@stackoverflow.zbadp.mongodb.net/?retryWrites=true&w=majority&appName=stackoverflow";
const PORT = 5000;

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.send("This is a stack overflow clone API");
});

app.use("/user", userRoutes);
app.use("/answer", answerRoutes);
app.use("/questions", questionRoutes);

mongoose.set("strictQuery", true);

// Connect to MongoDB and start the server
mongoose
  .connect(DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => console.error("Error connecting to MongoDB:", err.message));
