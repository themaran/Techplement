const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

// connecting to mongo db
mongoose
    .connect("mongodb://localhost:27017/quote-app")
    .then(() => {
        console.log("DB Connected Successfully!");
    })
    .catch((err) => {
        console.error(err);
    });

// creating schema
const quoteSchema = new mongoose.Schema({
    quote: {
        required: true,
        type: String,
    },
    author: {
        required: true,
        type: String,
    },
});

// creating model
const quoteModel = mongoose.model("Quote", quoteSchema);

// get quotes

app.get("/quotes", async(req, res) => {
    try {
        const quotes = await quoteModel.find();
        res.json(quotes);
    } catch(error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
});

const port = 3000;
app.listen(port, () => {
    console.log("Server is listening in port:", port);
});