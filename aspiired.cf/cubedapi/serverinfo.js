fetch("https://api.playerservers.com/servers", {
	method: 'POST', // *GET, POST, PUT, DELETE, etc.
	mode: 'cors', // no-cors, *cors, same-origin
	cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
	credentials: 'same-origin', // include, *same-origin, omit
	headers: {
		'Content-Type': 'application/json'
		// 'Content-Type': 'application/x-www-form-urlencoded',
	},
	redirect: 'follow', // manual, *follow, error
	referrerPolicy: 'no-referrer' // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
}).then(res => res.json())
.then(json => {
    var servers = json.servers
    for (const server of servers) {
        if (server.name !== "lobby" && server.name !== "lobby2") {
						
						var node = document.createElement('div')
						node.insertAdjacentHTML("beforeend", `<div class="server">
						<div id="title">
							<img src="https://i.znci.cf/aspiired.cf/csi/${server.displayitem}.png" width="24" alt=""> ${server.name}</div>
						<p id="players"><span id="panton">Online</span> ${server.onlinePlayers}/${server.maxPlayers}</p>
						<p id="playerslist"><span id="panton">Players</span> ${server.players.join(", ")}</p>
						<p id="boosters"><span id="panton">Boosters</span> ${server.boosters}</p>
						<p id="motd"><span id="panton">MOTD</span> ${server.motd}</p>
						<p id="version"><span id="panton">Version</span> ${server.version}</p>
					</div>`)
					document.getElementById('servers').appendChild(node)
						
        }
    }
})
