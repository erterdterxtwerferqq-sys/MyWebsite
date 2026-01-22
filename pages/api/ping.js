import users from "./store"

export default function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end()

  const { userId, username, displayName, rank } = req.body
  if (!userId) return res.status(400).json({ error: "No userId" })

  users[userId] = {
    userId,
    username,
    displayName,
    rank: rank || "Member",
    lastSeen: Date.now()
  }

  res.status(200).json({ ok: true })
}
