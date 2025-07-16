# 🎥 Confera – Video Call App

A modern, real-time video conferencing app built with WebRTC, Node.js, and React/Next.js that allows users to create, join, and manage video calls seamlessly.

## 🌟 Features

- **📞 One-on-One & Group Calls**: Supports 1‑on‑1 and multi-user video conferences.
- **🔐 Room Management**: Create secure rooms, invite participants via unique links or codes.
- **🎤 Mute/Unmute / Video Toggle**: Full media control during calls.
- **💬 In-Call Chat**: Real-time messaging alongside video feed.
- **🛠️ Recording** *(optional)*: Recording support using RTCPeerConnection or third-party service.
- **📲 Responsive UI**: Works across mobile, tablet, and desktop.
- **🔐 Authentication** : Integrates with JWT / OAuth for secure access.

---

## 📦 Tech Stack

- **Frontend**: React or Next.js with modern hooks and context/state management.
- **Communication**: WebRTC + WebSocket (e.g., via Socket.io) for signaling.
- **Backend**: Node.js + Express.js for signaling server and REST APIs.
- **Database** : MongoDB / PostgreSQL for storing room & user data.
- **Deployment**: Vercel/Netlify for front end, Heroku/DigitalOcean/AWS for backend.

---

## ⚡️ Getting Started

### Prerequisites

- Node.js ≥ `14.x`
- npm or yarn
- *(Optional)* MongoDB / PostgreSQL instance

### Setup & Run Locally

```bash
# 1. Clone the repo
git clone https://github.com/prashantsingh-01/Confera-Video-Call.git
cd Confera-Video-Call

# 2. Install dependencies
cd server
npm install
cd ../client
npm install

# 3. Setup environment variables
Create `.env` files in both `server/` and `client/`:
# server/.env
PORT=4000
# (Optional) JWT_SECRET=your_jwt_secret
# (Optional) MONGO_URI=your_mongo_connection_string

# client/.env
REACT_APP_SERVER_URL=http://localhost:4000
# (Optional) REACT_APP_JWT_TOKEN
