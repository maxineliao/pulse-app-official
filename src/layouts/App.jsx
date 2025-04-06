import { useEffect, useState } from "react";
import { Outlet } from "react-router";
import { GlobalPlayerManager } from "../components/GlobalPlayerManager";
import { PlayerProvider } from "../contexts/PlayerContext";

export default function App() {
	const [sdkReady, setSdkReady] = useState(false);

	useEffect(() => {
        if (!document.getElementById("spotify-sdk")) {
            const script = document.createElement("script");
            script.id = "spotify-sdk";
            script.src = "https://sdk.scdn.co/spotify-player.js";
            script.async = true;
            script.onload = () => setSdkReady(true);
            document.body.appendChild(script);
        } else {
            setSdkReady(true);
        }
    }, []);

	return (
		<>  
            <PlayerProvider>
                {sdkReady && <GlobalPlayerManager />}
                <Outlet />
            </PlayerProvider>
		</>
	);
}