import { useEffect } from "react";
import { Outlet } from "react-router";
import { GlobalPlayerManager } from "../components/GlobalPlayerManager";
import { PlayerProvider } from "../contexts/PlayerContext";

export default function App() {

	useEffect(() => {
        if (!document.getElementById("spotify-sdk")) {
            const script = document.createElement("script");
            script.id = "spotify-sdk";
            script.src = "https://sdk.scdn.co/spotify-player.js";
            script.async = true;
            document.body.appendChild(script);
        } 
    }, []);

	return (
		<>  
            <PlayerProvider>
                <GlobalPlayerManager />
                <Outlet />
            </PlayerProvider>
		</>
	);
}