# 🎥 Confera – Video Call App

A modern, real-time video conferencing app built with WebRTC, Node.js, and React/Next.js that allows users to create, join, and manage video calls seamlessly.

---

## 🌟 Features

- **📞 One-on-One & Group Calls**: Supports 1‑on‑1 and multi-user video conferences.
- **🔐 Room Management**: Create secure rooms, invite participants via unique links or codes.
- **🎤 Mute/Unmute / Video Toggle**: Full media control during calls.
- **💬 In-Call Chat**: Real-time messaging alongside video feed.
- **🛠️ Recording** *(optional)*: Recording support using RTCPeerConnection or third-party service.
- **📲 Responsive UI**: Works across mobile, tablet, and desktop.
- **🔐 Authentication**: Integrates with JWT / OAuth for secure access.

---

## 📦 Tech Stack
- **Frontend**: React or Next.js with modern hooks and context/state management.
- **Communication**: WebRTC + WebSocket (e.g., via Socket.io) for signaling.
- **Backend**: Node.js + Express.js for signaling server and REST APIs.
- **Database**: MongoDB / PostgreSQL for storing room & user data.
- **Deployment**: Vercel/Netlify for front end, Heroku/DigitalOcean/AWS for backend.

---

## ⚡️ Getting Started

### ✅ Prerequisites

- Node.js ≥ `14.x`
- npm or yarn
- *(Optional)* MongoDB / PostgreSQL instance

---

### 🛠️ Setup & Run Locally

#### 1️⃣ Clone the Repo

```bash
git clone https://github.com/prashantsingh-01/Confera-Video-Call.git
cd Confera-Video-Call
```
#### 2️⃣ Install Backend Dependencies
```bash
cd server
npm install
```

#### 3️⃣ Install Frontend Dependencies
- server/.env

```bash
PORT=4000
# Optional:
# JWT_SECRET=your_jwt_secret
# MONGO_URI=your_mongo_connection_string
```

- client/.env
``` bash
REACT_APP_SERVER_URL=http://localhost:4000
# Optional:
# REACT_APP_JWT_TOKEN
```
#### 5️⃣ Start the Backend Server
```bash
cd client
npm start
```
---
### ✅ You're all set! Open http://localhost:3000 in your browser to start a video call.
---

### 🚀 Usage
- Create a Room: Use the UI to generate a unique call room.
- Share the Link: Invite others using the link or room ID.
- Join the Call: Participants can join via the shared URL.
- Enjoy: Use mic/video controls and the chat panel during the call.
___
### 🤝 Contributing
#### Contributions are welcome!

**1.**  Fork this repo

**2.** Create a new branch:

```bash
git checkout -b feature-name
 ```

**3.** Make your changes and commit:

```bash
git commit -m "Add feature"
```

**4.** Push to your fork:

```bash
git push origin feature-name
```
**5.** Create a Pull Request

---
### 🙌 Credits
 * Developed by @prashantsingh-01
 * Inspired by modern WebRTC and real-time collaboration apps.
