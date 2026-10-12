# HDM Chat ~ Himitsu

A lightweight anonymous chat application built with Node.js, Express, and Socket.IO. Users can enter a waiting queue, get matched with another online user, and chat in real time without needing a database or authentication system.

## Overview

HDM Chat ~ Himitsu is a simple web-based anonymous chat platform designed for spontaneous conversations. It allows users to:

- join a matchmaking queue
- connect with another user instantly
- send and receive messages in real time
- switch between light and dark themes
- continue searching for a new partner after disconnection

## Features

- Real-time messaging using Socket.IO
- Anonymous peer-to-peer matching
- Responsive single-page client interface
- Theme toggle for better usability
- Lightweight architecture with static front-end files
- No external database required

## Tech Stack

- Node.js
- Express
- Socket.IO
- HTML
- CSS
- JavaScript

## Project Structure

```text
.
├── client/
│   ├── index.html
│   ├── chat.html
│   ├── login.html
│   ├── register.html
│   └── public/
│       └── style.css
├── package.json
├── package-lock.json
├── server.js
└── README.md
```

## Requirements

- Node.js 18 or newer
- npm

## Installation

1. Clone the repository:

```bash
git clone https://github.com/hudtakim/hdm-chat-himitsu.git
cd hdm-chat-himitsu
```

2. Install dependencies:

```bash
npm install
```

## Running the Application

Start the server:

```bash
npm start
```

Then open the application in your browser:

```text
http://localhost:3077
```

## How It Works

- The server maintains a waiting list of users.
- When two users are available, the server matches them automatically.
- Messages are exchanged directly between the paired users over Socket.IO.
- When a user disconnects or requests a new match, the connection is reset and the user returns to the queue.

## Notes

This project is intentionally simple and is suitable as a learning project or lightweight prototype for anonymous chat functionality. It does not currently include user accounts, persistent chat history, or database storage.

## License

This project is currently unlicensed. If you plan to distribute or use it commercially, consider adding an appropriate open-source license.

## Author

- hudtakim
