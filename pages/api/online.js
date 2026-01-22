import users from "./store"

export default function handler(req, res) {
  const now = Date.now()
  // Remove users inactive for 10s
  for (const id in users) {
    if (now - users[id].lastSeen > 10000) {
      delete users[id]
    }
  }

  res.status(200).json(users)
}
