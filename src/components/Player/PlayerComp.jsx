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
} from "lucide-react";
import PlayerImages from "../../Images";

export default function PlayerComp() {
	return (
		<div className="player-comp fixed-bottom">
			<div className="d-flex justify-content-between py-2 px-3 px-lg-6">
				<div className="d-flex align-items-center">
					<a href="#">
						<img
							src={PlayerImages["music-1"]}
							alt="music"
							width="64"
							height="64"
						/>
					</a>
					<div className="mx-5">
						<a href="#" className="text-decoration-none">
							<h5>Monster</h5>
						</a>
						<a href="#" className="text-decoration-none">
							<h6 className="text-secondary">Don Diablo</h6>
						</a>
					</div>
					<button
						type="button"
						className="btn player-icon-btn d-lg-block d-none"
					>
						<SquarePlus />
					</button>
				</div>
				<div className="d-flex align-items-center">
					<button
						type="button"
						className="btn player-icon-btn d-lg-block d-none"
					>
						<Shuffle />
					</button>
					<button
						type="button"
						className="btn player-icon-btn d-lg-block d-none"
					>
						<SkipBack />
					</button>
					<button
						type="button"
						className="btn player-icon-btn player-footer-btn-circle player-bg rounded-circle p-3"
					>
						<Play />
					</button>
					<button type="button" className="btn player-icon-btn">
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
					<button type="button" className="btn player-icon-btn">
						<MicVocal />
					</button>
					<button type="button" className="btn player-icon-btn">
						<ListMusic />
					</button>
					<button type="button" className="btn player-icon-btn">
						<Volume2 />
					</button>
					<div className="accent-color">
						<input type="range" id="range" min="0" max="100" />
					</div>
					<button type="button" className="btn player-icon-btn">
						<Maximize2 />
					</button>
				</div>
			</div>
		</div>
	);
}
