const mongoose = require("mongoose");
const data = require("./data");
const Blog = require("../models/blog");

// creating connection with mongodb
const MONGO_URL = "mongodb://127.0.0.1:27017/cyber_phoenix";
main()
    .then(() => console.log("connection with db successful"))
    .catch((err) => console.log(err));

async function main() {
    await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
    await Blog.deleteMany({});
    await Blog.insertMany(data);
};


app.get("/addevents", async (req, res) => {
    await Event.deleteMany({});
    const events = [
        {
            title: "Phoenix 0x1: Dark Web - The Internet's Hidden Face",
            date: new Date(2025, 2, 27),
            keywords: [
                "Cyber Awareness",
                "Online Privacy",
                "Dark Web",
                "Bitcoin Billionare",
                "Cyber Safety",
                "CIA Triad",
                "Safe Browsing",
                "Virtual Private Networks",
            ],
        },
        {
            title: "CyberNexus: Bridging Expertise and Practices",
            date: new Date(2025, 3, 21),
            keywords: [
                "OSI Model",
                "Firewalls",
                "Cloud Services (SaaS/IaaS)",
                "System Hacking",
                "Kali Linux",
                "Packet Tracer",
                "Metasploit",
                "Cryptography",
            ],
        },
        // {
        //     title: "OSINT - The First Step in Digital Forensics",
        //     date: new Date(2025, 4, 2),
        //     keywords: [
        //         "OSINT",
        //         "Google Dorking",
        //         "Social Media OSINT",
        //         "Hacking",
        //         "Hacking Phases",
        //         "Reconnaissance",
        //     ],
        // },
    ];
    const result = await Event.insertMany(events);
    res.send(result);
});
initDB();
