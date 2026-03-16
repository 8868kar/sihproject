const express = require("express");
const app = express();
const path = require("path");
const axios = require("axios");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

// Middleware for form data
app.use(express.urlencoded({ extended: true }));

// Contact page (GET)
app.get("/contact", (req, res) => {
  res.render("contact");
});

// Contact form submission (POST)
app.post("/contact", (req, res) => {
  const { name, email, message } = req.body;
  console.log("New Contact Form Submission:");
  console.log("Name:", name);
  console.log("Email:", email);
  console.log("Message:", message);

  res.send(`<h2>Thanks ${name}, your message has been received! 🐶</h2>`);
});

app.get("/help", (req, res) => {
  res.render("help"); 
});

// app.get("/Cattle", (req, res) => {
//   res.render("Cattle"); 
// });

// About page route
app.get("/cat", (req, res) => {
  res.render("about");
});

// Services page route
app.get("/pet", (req, res) => {
  res.render("services");
});


app.get("/", async (req, res) => {
    try {
        // Fetch all breeds from dog.ceo API
        const response = await axios.get("https://dog.ceo/api/breeds/list/all");
        const breedData = response.data.message; // object with breeds and sub-breeds

        res.render("index", { breeds: breedData }); // Pass to EJS
    } catch (err) {
        console.error(err);
        res.render("index", { breeds: {} });
    }
});

app.get("/Cattle", (req, res) => {
  res.render("Cattle"); 
});
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server running");
});
