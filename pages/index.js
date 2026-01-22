import { useEffect, useState } from "react"

export default function Home() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch("/api/online")
      const data = await res.json()
      setUsers(Object.values(data))
    }

    fetchUsers()
    const interval = setInterval(fetchUsers, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="container">
      <h1>SxN Active Users</h1>

      {users.length === 0 && <p>No users online</p>}

      {users.map(u => (
        <div className="user" key={u.userId}>
          <img src={`https://www.roblox.com/headshot-thumbnail/image?userId=${u.userId}&width=100&height=100&format=png`} />
          <div className="info">
            <b>{u.username}</b>
            <div className="sub">{u.displayName}</div>
            <span className={`rank ${u.rank.toLowerCase()}`}>{u.rank}</span>
          </div>
        </div>
      ))}
    </div>
  )
}
