# 🐶 PetInfo

![PetInfo](https://sihproject-psi.vercel.app/)

Welcome to **PetInfo** – your ultimate hub to discover breeds, browse photos, and access care tips for various types of pets!

🌐 **Live Demo:** [https://sihproject-psi.vercel.app/](https://sihproject-psi.vercel.app/)

## 🐾 Features

- **Dog Search:** Discover various dog breeds and sub-breeds powered by the [Dog API](https://dog.ceo/dog-api/).
- **Cat Information:** Dedicated section for cat lovers (`/cat`).
- **Cattle & Buffalo:** Explore details about livestock (`/Cattle`).
- **Pet Market:** Browse the pet market services (`/pet`).
- **Pet Appointments:** Schedule appointments or contact us (`/contact`).
- **Help Center:** Find assistance and helpful resources (`/help`).

## 🛠️ Built With

- **Backend:** [Node.js](https://nodejs.org/) & [Express.js](https://expressjs.com/)
- **Templating Engine:** [EJS](https://ejs.co/)
- **API Fetching:** [Axios](https://axios-http.com/)
- **Deployment:** Vercel

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

Make sure you have Node.js installed on your machine.
- [Node.js](https://nodejs.org/en/download/)

### Installation

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   ```

2. **Navigate to the project directory:**
   ```bash
   cd sihproject
   ```

3. **Install the dependencies:**
   ```bash
   npm install
   ```
   *(This will install `express`, `ejs`, `axios`, and `nodemon`)*

4. **Start the development server:**
   ```bash
   npm start
   ```

5. **Open your browser and visit:**
   ```
   http://localhost:3000
   ```

## 📁 Project Structure

```text
├── public/          # Static files (CSS, images, etc.)
├── views/           # EJS templates (index, about, services, contact, Cattle, help)
├── partials/        # Reusable EJS components (headers, footers)
├── server.js        # Main Express server and route definitions
├── package.json     # Project metadata and dependencies
└── vercel.json      # Vercel deployment configuration
```

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📝 License

This project is licensed under the ISC License.
