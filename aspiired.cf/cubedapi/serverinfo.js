
$.ajax({url: "https://thingproxy.freeboard.io/fetch/https://api.playerservers.com/servers", success: function(json){
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
}});
