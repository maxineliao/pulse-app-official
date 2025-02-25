import {
	Search,
	Music,
	Telescope,
	History,
	Plus,
	Library,
	DiscAlbum,
	Heart,
	SquareUserRound,
	Pin,
} from "lucide-react";
import PlayerImages from "../../Images";
export default function PlayerSideMenu() {
	return (
		<>
			<ul className="side-menu list-group mb-3 border-transparent rounded-4 player-bg">
				<li className="list-group-item border-0 pb-0">
					<a
						href="#"
						className="d-flex text-decoration-none align-items-center py-3 px-2 rounded-3"
					>
						<Telescope className="icon me-3" />
						<h6 className="mb-0">發現</h6>
					</a>
				</li>
				<li className="list-group-item border-0 py-0">
					<a
						href="#"
						className="d-flex text-decoration-none align-items-center py-3 px-2 rounded-3"
					>
						<Search className="icon me-3" />
						<h6 className="mb-0">搜尋</h6>
					</a>
				</li>
				<li className="list-group-item border-0 pt-0">
					<a
						href="#"
						className="d-flex text-decoration-none align-items-center py-3 px-2 rounded-3"
					>
						<History className="icon me-3" />
						<h6 className="mb-0">最近播放</h6>
					</a>
				</li>
			</ul>
			<ul className="side-menu list-group rounded-4 border-transparent mb-9 mb-lg-5 player-bg">
				<li className="list-group-item border-0 d-flex align-items-center player-list-border p-4">
					<Music className="me-5" />
					<h5 className="mb-0">我的音樂庫</h5>
					<button
						type="button"
						className="btn ms-auto player-icon-btn"
					>
						<Plus className="icon rotate90" />
					</button>
				</li>
				<li className="list-group-item border-0 py-0">
					<a
						href="#"
						className="d-flex text-decoration-none align-items-center py-3 px-2 rounded-3"
					>
						<Library className="icon me-3" />
						<h6 className="mb-0">總覽</h6>
					</a>
				</li>
				<li className="list-group-item border-0 py-0">
					<a
						href="#"
						className="d-flex text-decoration-none align-items-center py-3 px-2 rounded-3"
					>
						<DiscAlbum className="icon me-3" />
						<h6 className="mb-0">收藏專輯</h6>
					</a>
				</li>
				<li className="list-group-item border-0 py-0">
					<a
						href="#"
						className="d-flex text-decoration-none align-items-center py-3 px-2 rounded-3"
					>
						<SquareUserRound className="icon me-3" />
						<h6 className="mb-0">收藏藝人</h6>
					</a>
				</li>
				<li className="list-group-item border-0 py-0 player-list-border">
					<a
						href="#"
						className="d-flex text-decoration-none align-items-center py-3 px-2 rounded-3 mb-1"
					>
						<Heart className="icon me-3" />
						<h6 className="mb-0">我的播放清單</h6>
					</a>
				</li>
				<li className="list-group-item border-0 px-3 pt-1">
					<a href="#" className="d-flex text-decoration-none p-2 rounded-3">
						<img
							className="rounded-2"
							src={PlayerImages["playlist-1"]}
							width="64"
							height="64"
						/>
						<div className="ms-3">
							<h6 className="mt-1">已按讚的歌曲</h6>
							<p className="text-secondary mb-0">
								<Pin
									fill="white"
									size={16}
									className="icon text-white me-2"
								/>
								500 首歌曲
							</p>
						</div>
					</a>
				</li>
				<li className="list-group-item border-0 px-3">
					<a href="#" className="d-flex text-decoration-none p-2 rounded-3">
						<img
							className="rounded-2"
							src={PlayerImages["playlist-2"]}
							alt="discoveries every week"
							width="64"
							height="64"
						/>
						<div className="ms-3">
							<h6 className="mt-1">每週最新發現</h6>
							<p className="text-secondary mb-0">
								<Pin
									fill="white"
									size={16}
									className="icon text-white me-2"
								/>
								100 首歌曲
							</p>
						</div>
					</a>
				</li>
				<li className="list-group-item border-0 px-3 py-1">
					<a href="#" className="d-flex text-decoration-none p-2 rounded-3">
						<img
							className="rounded-2"
							src={PlayerImages["playlist-3"]}
							alt="guitar"
							width="64"
							height="64"
						/>
						<div className="ms-3">
							<h6 className="mt-1">Guitar</h6>
							<p className="text-secondary mb-0">207 首歌曲</p>
						</div>
					</a>
				</li>
				<li className="list-group-item border-0 px-3 py-1">
					<a href="#" className="d-flex text-decoration-none p-2 rounded-3">
						<img
							className="rounded-2"
							src={PlayerImages["playlist-4"]}
							alt="relax"
							width="64"
							height="64"
						/>
						<div className="ms-3">
							<h6 className="mt-1">Relax</h6>
							<p className="text-secondary mb-0">100 首歌曲</p>
						</div>
					</a>
				</li>
				<li className="list-group-item border-0 px-3 py-1">
					<a href="#" className="d-flex text-decoration-none p-2 rounded-3">
						<img
							className="rounded-2"
							src={PlayerImages["playlist-5"]}
							alt="pop music"
							width="64"
							height="64"
						/>
						<div className="ms-3">
							<h6 className="mt-1">華語流行音樂合輯</h6>
							<p className="text-secondary mb-0">50 首歌曲</p>
						</div>
					</a>
				</li>
			</ul>
        </>
	);
}
