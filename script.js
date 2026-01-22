fetch("/api/online")
.then(res => res.json())
.then(data => {
  const c = document.getElementById("users")
  c.innerHTML = ""
  Object.values(data).forEach(u => {
    c.innerHTML += `
      <div class="user">
        <b>${u.username}</b><br>
        ${u.displayName}<br>
        <span class="online">ONLINE</span>
      </div>
    `
  })
})
