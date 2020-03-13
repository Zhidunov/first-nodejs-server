const express = require("express");

const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

let hardRes = {
  users: [
    {
      id: 1,
      avatarURL:
        "https://previews.123rf.com/images/studiostoks/studiostoks1708/studiostoks170800016/84215159-surprise-woman-pop-art-avatar-character-icon.jpg",
      followed: true,
      name: "Дмитрий",
      status: "I-m the frontend developer",
      location: { country: "Russia", city: "Sochi" }
    },
    {
      id: 2,
      avatarURL:
        "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto/gigs/21514027/original/bf55eef1cfc1ba545ac9153cedebf61abe38af8a/create-your-pop-art-avatar-from-your-image.jpg",
      followed: false,
      name: "Алексей",
      status: "I-m the backend developer",
      location: { country: "Russia", city: "Saint-Petersburg" }
    },
    {
      id: 3,
      avatarURL:
        "https://previews.123rf.com/images/studiostoks/studiostoks1707/studiostoks170700393/83085765-avatar-portrait-of-a-man-straightens-his-tie-pop-art-retro-vector-illustration.jpg",
      followed: true,
      name: "Сергей",
      status: "I-m the fullstack developer",
      location: { country: "Germany", city: "Berlin" }
    }
  ]
};

const port = 4000;

app.get("/users", (req, res) => {
  res.send(hardRes);
});

app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});