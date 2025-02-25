import { HeartIcon, ChevronRight, ChevronLeft } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import PlayerImages from "../Images";
import PlayerHeader from "../components/Player/PlayerHeader";
import PlayerSideMenu from "../components/Player/PlayerSideMenu";
import PlayerComp from "../components/Player/PlayerComp";
import PlayerCardArtist from "../components/Player/PlayerCardArtist";
import PlayerCardGenre from "../components/Player//PlayerCardGenre";
import PlayerCardPlaylist from "../components/Player//PlayerCardPlaylist";
import PlayerCardSong from "../components/Player/PlayerCardSong";
import PlayerCardAlbum from "../components/Player/PlayerCardAlbum";

function SearchResult() {
	return (
		<>
			<PlayerHeader />
			<div className="container-fluid">
				<div className="row d-flex flex-lg-row flex-column-reverse">
					<div className="col-lg-3 col-12 player-scrollbar player-scrollbar-sm">
						<PlayerSideMenu />
					</div>
					<div className="col-lg-9 col-12 player-scrollbar">
						<div className="p-5 border-transparent rounded-4 player-bg mb-5">
							<ul className="nav nav-pills gap-2 mb-5">
								<li className="nav-item">
									<a
										className="nav-link active"
										aria-current="page"
										href="#"
									>
										所有
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link player-bg" href="#">
										歌曲
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link player-bg" href="#">
										藝人
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link player-bg" href="#">
										專輯
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link player-bg" href="#">
										播放清單
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link player-bg" href="#">
										曲風
									</a>
								</li>
								{/* <li className="nav-item">
									<a
										className="nav-link disabled"
										aria-disabled="true"
									>
										Disabled
									</a>
								</li> */}
							</ul>
							<h2 className="h2 mb-5">
								Porter Robinson 的搜尋結果
							</h2>
							<div className="row mb-5">
								<div className="col-lg-4 col-12">
									<h4 className="h4 mb-5">最佳結果</h4>
									<a className="p-5 player-bg rounded-4 mb-5 mb-lg-0 d-block text-decoration-none">
										<img
											className="img-fluid mb-5 rounded-4"
											src={PlayerImages["card-pic-3_1"]}
											alt="best result image"
											width={120}
										/>
										<h3 className="h3 mb-1">
											Porter Robinson
										</h3>
										<p className="text-secondary">藝人</p>
									</a>
								</div>
								<div className="col-lg-8 col-12">
									<div className="d-flex justify-content-between align-items-center mb-5">
										<h4 className="h4 mb-0">歌曲</h4>
										<a
											className="me-3 text-decoration-none"
											href="#"
										>
											更多
											<ChevronRight />
										</a>
									</div>
									<PlayerCardSong cardTitle={"Shelter"} cardContent={"Porter Robinson"} cardImage={PlayerImages["card-pic-3_1"]} />
									<div className="card-song p-1 d-flex align-items-center rounded-4">
										<img
											src={PlayerImages["card-pic-3_1"]}
											alt=""
											className="img ratio ratio-1x1 img-fluid me-3 rounded-4"
										/>
										<div className="d-flex flex-column align-items-start">
											<h6 className="h6 fw-medium mb-1">
												Shelter
											</h6>
											<p className="fs-7 mb-0">
												Porter Robinson
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="row mb-5">
								<div className="col-12">
									<div className="d-flex justify-content-between align-items-center mb-5">
										<h4 className="h4 mb-0">專輯</h4>
										<a
											className="me-3 text-decoration-none"
											href="#"
										>
											更多
											<ChevronRight />
										</a>
									</div>
									<div className="row">
										<div className="col-6 col-lg-3">
											<PlayerCardAlbum cardImage={PlayerImages[
															"card-pic-3_3"
														]} cardTitle={"Smile! :D"} cardContent={"2024"} />
										</div>
										<div className="col-6 col-lg-3">
											<div className="card-album p-2 rounded-4">
												<img
													src={
														PlayerImages[
															"card-pic-3_3"
														]
													}
													alt=""
													className="w-100 mb-3 rounded-4"
												/>
												<h6 className="h6 mb-1">
													Smile! :D
												</h6>
												<p className="fs-7 mb-0 text-secondary">
													2024
												</p>
											</div>
										</div>
										<div className="col-6 col-lg-3">
											<div className="card-album p-2 rounded-4">
												<img
													src={
														PlayerImages[
															"card-pic-3_3"
														]
													}
													alt=""
													className="w-100 mb-3 rounded-4"
												/>
												<h6 className="h6 mb-1">
													Smile! :D
												</h6>
												<p className="fs-7 mb-0 text-secondary">
													2024
												</p>
											</div>
										</div>
										<div className="col-6 col-lg-3">
											<div className="card-album p-2 rounded-4">
												<img
													src={
														PlayerImages[
															"card-pic-3_3"
														]
													}
													alt=""
													className="w-100 mb-3 rounded-4"
												/>
												<h6 className="h6 mb-1">
													Smile! :D
												</h6>
												<p className="fs-7 mb-0 text-secondary">
													2024
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="row mb-5">
								<div className="col-12">
									<div className="d-flex justify-content-between align-items-center mb-5">
										<h4 className="h4 mb-0">藝人</h4>
										<a
											className="me-3 text-decoration-none"
											href="#"
										>
											更多
											<ChevronRight />
										</a>
									</div>
								</div>
								<div className="col-6 col-lg-3">
									<PlayerCardArtist cardImage={PlayerImages["people-1"]} cardTitle={'Madeon'}/>
								</div>
							</div>
							<div className="row mb-5">
								<div className="col-12">
									<div className="d-flex justify-content-between align-items-center mb-5">
										<h4 className="h4 mb-0">播放清單</h4>
										<a
											className="me-3 text-decoration-none"
											href="#"
										>
											更多
											<ChevronRight />
										</a>
									</div>
									<div className="row">
										<div className="col-6 col-lg-3">
											{/* <PlayerCardPlaylist cardImage={PlayerImages["card-pic-3_3"]} cardTitle={"Smile! :D"} cardText={"2024"}/> */}
											<div className="card-album p-2 rounded-4">
												<img
													src={
														PlayerImages[
															"card-pic-3_3"
														]
													}
													alt=""
													className="w-100 mb-3 rounded-4"
												/>
												<h6 className="h6 mb-1">
													Smile! :D
												</h6>
												<p className="fs-7 mb-0 text-secondary">
													2024
												</p>
											</div>
										</div>
										<div className="col-6 col-lg-3">
											<div className="card-album p-2 rounded-4">
												<img
													src={
														PlayerImages[
															"card-pic-3_3"
														]
													}
													alt=""
													className="w-100 mb-3 rounded-4"
												/>
												<h6 className="h6 mb-1">
													Smile! :D
												</h6>
												<p className="fs-7 mb-0 text-secondary">
													2024
												</p>
											</div>
										</div>
										<div className="col-6 col-lg-3">
											<div className="card-album p-2 rounded-4">
												<img
													src={
														PlayerImages[
															"card-pic-3_3"
														]
													}
													alt=""
													className="w-100 mb-3 rounded-4"
												/>
												<h6 className="h6 mb-1">
													Smile! :D
												</h6>
												<p className="fs-7 mb-0 text-secondary">
													2024
												</p>
											</div>
										</div>
										<div className="col-6 col-lg-3">
											<div className="card-album p-2 rounded-4">
												<img
													src={
														PlayerImages[
															"card-pic-3_3"
														]
													}
													alt=""
													className="w-100 mb-3 rounded-4"
												/>
												<h6 className="h6 mb-1">
													Smile! :D
												</h6>
												<p className="fs-7 mb-0 text-secondary">
													2024
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="row mb-5">
								<div className="col-12">
									<div className="d-flex justify-content-between align-items-center mb-5">
										<h4 className="h4 mb-0">探索曲風</h4>
										<a
											className="me-3 text-decoration-none"
											href="#"
										>
											更多
											<ChevronRight />
										</a>
									</div>
									<div className="row">
										<div className="col-6 col-lg-3">
											<PlayerCardGenre cardImage={PlayerImages["card-pic-3_3"]} cardTitle={"Bass"}
											/>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<PlayerComp />
		</>
	);
}
export default SearchResult;
