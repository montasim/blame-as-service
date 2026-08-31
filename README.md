# 👉 Blame-as-a-Service

<p align="center">
  <img src="https://raw.githubusercontent.com/montasim/blame-as-service/main/assets/imgs/baas-with-blame-mascot.png" width="800" alt="Blame-as-a-Service Banner"/>
</p>


Ever needed a graceful way to explain what broke the build?<br>
This tiny API returns random, generic, creative, and sometimes painfully plausible developer blame — perfectly suited for incident channels, code reviews, demos, bots, or any moment when the root cause remains mysteriously unavailable.

Built for developers, outages, and humor.

<!-- Upstream Attribution -->
<p align="center">
  <a href="https://github.com/hotheadhacker/no-as-a-service">
    <strong>Inspired by No-as-a-Service</strong>
  </a>
</p>

<p align="center">
  This project is <strong>adapted from <a href="https://github.com/hotheadhacker/no-as-a-service">No-as-a-Service</a></strong> by <a href="https://github.com/hotheadhacker">hotheadhacker</a>.<br>
  The original copyright and MIT license notice are preserved in <a href="LICENSE">LICENSE</a>.
</p>

---

## 🚀 API Usage

**Base URL**
```
https://blame-as-a-service.netlify.app/blame
```

**Method:** `GET`  
**Rate Limit:** `120 requests per minute per IP`

### 🔄 Example Request
```http
GET /blame
```

### ✅ Example Response
```json
{
  "blame": "DNS, until proven otherwise."
}
```

Use it in apps, bots, landing pages, Slack integrations, incident reports, code reviews, or wherever a witty explanation is more useful than awkward silence.

---

## 🛠️ Self-Hosting

Want to run it yourself? It’s lightweight and simple.

### 1. Clone this repository
```bash
git clone https://github.com/montasim/blame-as-service.git
cd blame-as-service
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start the server
```bash
npm start
```

The API will be live at:
```
http://localhost:3000/blame
```

You can also change the port using an environment variable:
```bash
PORT=5000 npm start
```

---

## 📁 Project Structure

```
blame-as-service/
├── index.js            # Express API
├── blames.json         # 1000+ developer blame responses
├── package.json
├── .devcontainer.json  # VS Code / GitHub devcontainer setup
└── README.md
```

---

## 📦 package.json

For reference, here’s the package config:

```json
{
  "name": "blame-as-service",
  "version": "1.0.0",
  "description": "A lightweight API that returns a random developer blame.",
  "main": "index.js",
  "scripts": {
    "build": "node --check index.js && node --check netlify/functions/blame.mjs",
    "start": "node index.js"
  },
  "author": "montasim",
  "license": "MIT",
  "dependencies": {
    "cors": "^2.8.5",
    "express": "^4.18.2",
    "express-rate-limit": "^7.0.0"
  }
}
```

---

## ⚓ Devcontainer

If you open this repo in GitHub Codespaces, it will automatically use `.devcontainer.json` to set up your environment. If you open it in VS Code, it will ask you if you want to reopen it in a container.

---
## Projects Using Blame-as-a-Service

Here are some projects and websites that creatively integrate [Blame-as-a-Service](https://blame-as-a-service.netlify.app/blame) to deliver humorous or programmatic developer blame:

1. **[Your Project Here?](https://github.com/montasim/blame-as-service)**
   If you're using Blame-as-a-Service in your project, open a pull request to be featured here!

---

> Want to use Blame-as-a-Service in your own project? Check out the usage section in this README and start assigning **blame** like a pro.
---

## 👤 Author

Created with plausible deniability by [montasim](https://github.com/montasim)

---

## 📄 License

MIT — assign blame freely, but keep the required copyright and license notices.

---

## 🐧 Testimonials

> "I connected Blame-as-a-Service to our incident channel. It blamed DNS before the dashboard finished loading. 10/10, promoted to principal engineer."
> 
> — **A totally real staff engineer** (probably)
