import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { selectSpotifyAccessToken } from "../../slice/spotifyAuthSlice";
import PlayerCardSong from "../../components/Player/PlayerCardSong";
import { useParams } from "react-router";
const { VITE_SPOTIFY_API_PATH } = import.meta.env;

export default function UsersSinglePlaylist() {
    const params = useParams();
    const {id} = params;
    const spotifyAccessToken = useSelector(selectSpotifyAccessToken);
    const [playlistData, setPlaylistData] = useState([]);
    const [playlistInfo, setPlaylistInfo] = useState();
    const getUsersSinglePlaylist = async() => {
        try {
            const url = `${VITE_SPOTIFY_API_PATH}playlists/${id}/tracks`
            const response = await axios.get(url,{
                headers: {
                    'Authorization': `Bearer ${spotifyAccessToken}`,
                }
            })
            setPlaylistData(response.data.items);
        } catch (error) {
            console.log(error);
        }
    }
    const getPlaylistInfo = async() => {
        try {
            const url = `${VITE_SPOTIFY_API_PATH}playlists/${id}`
            const response = await axios.get(url,{
                headers: {
                    'Authorization': `Bearer ${spotifyAccessToken}`,
                }
            })
            setPlaylistInfo(response.data);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        if(spotifyAccessToken) {
            getUsersSinglePlaylist();
            getPlaylistInfo();
        }
    },[id])
    
    return (
        <>
			<div className="col-lg-9 col-12 player-scrollbar">
				<div className="p-5 border-transparent rounded-4 player-bg mb-5">
					<div className="row mb-5">
						<div className="col-12">
							<div className="d-flex justify-content-between align-items-center mb-5">
								<h4 className="h4 mb-0">{playlistInfo && playlistInfo.name}</h4>
							</div>
							<div className="row">
                                {playlistData.length > 0 && playlistData.map((item) => {
                                    return (
                                        <div className="col-12" key={item.id}>
                                            <PlayerCardSong
                                                cardImage={item.track.album.images[0].url}
                                                cardTitle={item.track.name}
                                                cardContent={item.track.artists.map((artist) => artist.name).join(", ")}
									        />
								        </div>
                                    )
                                })
                                }
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
    )
}