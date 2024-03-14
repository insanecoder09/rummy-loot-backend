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
        isActive: false,
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

app.use(cors());

app.get('/', (req, res) => {
    res.send("Hello World");
})

app.get('/aniketBro/:key', (req, res) => {
    if (keys.includes(req.params.key))
        res.send(keyDetails[req.params.key])
    else res.send('0')
})

app.listen(3000, console.log("Server running on port 3000"));