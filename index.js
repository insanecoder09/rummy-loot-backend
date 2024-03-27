import express from 'express'
import cors from 'cors'

const app = express();

const keys = [
    "dht-dct-ksy",
    "ahr-dhv-eut",
    "yet-kgt-eit",
]

const keyDetails = {
    "dht-dct-ksy": {
        name: "Vivek",
        isActive: true,
    },
    "ahr-dhv-eut": {
        name: "Lala",
        isActive: true,
    },
    "yet-kgt-eit": {
        name: "Lali",
        isActive: false,
    },
}

const getNewPrediction = () => {
    var leftTemp, rightTemp;
    leftTemp = Math.floor(Math.random() * 13) + 1

    const findingRightCard = () => {
        rightTemp = Math.floor(Math.random() * 13) + 1;
        if (rightTemp == leftTemp) findingRightCard();
    }
    findingRightCard();
    // leftTemp and rightTemp contain two non equal card numbers.


    // Generating random symbols

    let symbols = ["spades", "clubs", "diamonds", "hearts"];
    const symbol1 = symbols[Math.floor(Math.random() * 4)];
    const symbol2 = symbols[Math.floor(Math.random() * 4)];

    // Generating file name.

    var leftFileName, rightFileName;
    if (leftTemp < 10) leftFileName = "0";
    else leftFileName = "";
    leftFileName =
        "https://rummywinnner.com/wp-content/uploads/2024/03/" +
        leftFileName +
        leftTemp +
        symbol1 +
        ".png";
    if (rightTemp < 10) rightFileName = "0";
    else rightFileName = "";
    rightFileName =
        "https://rummywinnner.com/wp-content/uploads/2024/03/" +
        rightFileName +
        rightTemp +
        symbol2 +
        ".png";

    return { leftFileName, rightFileName }
}

app.use(cors());

app.get('/', (req, res) => {
    res.send("Hello World");
})

app.get('/aniketBro/:key', (req, res) => {
    if (keys.includes(req.params.key))
        res.send(keyDetails[req.params.key]);
    else res.send('0')
})

app.get('/newPrediction/:key', (req, res) => {
    if (keys.includes(req.params.key))
    {
        const Prediction = getNewPrediction();
        res.send(Prediction);
    }
    else res.send('0')
})


app.listen(3000, console.log("Server running on port 3000"));
