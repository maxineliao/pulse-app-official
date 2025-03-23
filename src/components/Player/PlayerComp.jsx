import {
	SquarePlus,
	Shuffle,
	SkipBack,
	Play,
	Repeat,
	MicVocal,
	ListMusic,
	Volume2,
	Maximize2,
    SkipForward,
	Pause,
} from "lucide-react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useSpotifyPlayer } from "../../hooks/useSpotifyPlayer";
import { selectSpotifyAccessToken } from "../../slice/spotifyAuthSlice";

export default function PlayerComp() {
	const spotifyAccessToken = useSelector(selectSpotifyAccessToken);
	const { togglePlay, skipToNext, skipToPrev, toggleShuffle } = useSpotifyPlayer();
	const isPlaying = useSelector((state) => state.player.isPlaying);
	const isShuffled = useSelector((state) => state.player.shuffle);
	useEffect(()=> {
		console.log(isShuffled);
	})
	return (
		<div className="player-comp fixed-bottom">
			<div className="d-flex justify-content-between py-2 px-3 px-lg-6">
				<div className="d-flex align-items-center">
					
						<img
							src={useSelector((state) => state.player.image)}
							alt="music"
							width="64"
							height="64"
						/>
					
					<div className="mx-5">
						<h5>{useSelector((state) => state.player.trackName)}</h5>
						{/* <a href="#" className="text-decoration-none"> */}
						<h6 className="text-secondary">{useSelector((state) => state.player.artists)}</h6>
						{/* </a> */}
					</div>
					{/* <button
						type="button"
						className="btn player-icon-btn d-lg-block d-none"
					>
						<SquarePlus />
					</button> */}
				</div>
				<div className="d-flex align-items-center">
					<button
						type="button"
						className={isShuffled ? "btn player-icon-btn d-lg-block d-none text-primary-yellow" : "btn player-icon-btn d-lg-block d-none"}
						onClick={toggleShuffle}
					>
						<Shuffle />
					</button>
					<button
						type="button"
						className="btn player-icon-btn d-lg-block d-none"
						onClick={skipToPrev}
					>
						<SkipBack />
					</button>
					<button
						type="button"
						className="btn player-icon-btn player-footer-btn-circle player-bg rounded-circle p-3"
						onClick={() => { 
							togglePlay();
						}}
					>
						{isPlaying ? <Pause /> : <Play />}
					</button>
					<button type="button" className="btn player-icon-btn" onClick={skipToNext}>
						<SkipForward />
					</button>
					<button
						type="button"
						className="btn player-icon-btn d-lg-block d-none"
					>
						<Repeat />
					</button>
				</div>
				<div className="d-lg-flex align-items-center d-none">
					{/* <button type="button" className="btn player-icon-btn">
						<MicVocal />
					</button> */}
					<button type="button" className="btn player-icon-btn">
						<ListMusic />
					</button>
					<button type="button" className="btn player-icon-btn">
						<Volume2 />
					</button>
					<div className="accent-color">
						<input type="range" id="range" min="0" max="100" />
					</div>
					{/* <button type="button" className="btn player-icon-btn">
						<Maximize2 />
					</button> */}
				</div>
			</div>
		</div>
	);
}
