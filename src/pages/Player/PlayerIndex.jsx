import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { useEffect, useState } from "react";
import axios from "axios";

const SwiperButtonNext = ({ children, swiperIndex, swiper }) => {
	return (
		<div
			className={`swiper-button-next-player-${swiperIndex}`}
			style={{ cursor: "pointer" }}
			onClick={() => swiper && swiper.slideNext()}
		>
			{children}
		</div>
	);
};
const SwiperButtonPrev = ({ children, swiperIndex, swiper }) => {
	return (
		<div
			className={`swiper-button-prev-player-${swiperIndex}`}
			style={{ cursor: "pointer" }}
			onClick={() => swiper && swiper.slidePrev()}
		>
			{children}
		</div>
	);
};
import { HeartIcon, ChevronRight, ChevronLeft } from "lucide-react";

import PlayerImages from "../../Images";
import PlayerCardArtist from "../../components/Player/PlayerCardArtist";
import PlayerCardAlbum from "../../components/Player/PlayerCardAlbum";
import { useSelector, useDispatch } from "react-redux";
import { selectSpotifyAccessToken } from "../../slice/spotifyAuthSlice";
import { useSpotifyPlayer } from "../../hooks/useSpotifyPlayer";
import { useLocation, useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { usePlayerContext } from "../../contexts/PlayerContext";
import { setPlayerLoading } from "../../slice/loadingSlice";
const { VITE_SPOTIFY_API_PATH } = import.meta.env;
import axios from "axios";

const VITE_BASE_URL = import.meta.env.VITE_BASE_URL;
const VITE_API_PATH = import.meta.env.VITE_API_PATH;

export default function PlayerIndex() {
	const location = useLocation();
	const params = new URLSearchParams(location.search);
	const trackUri = params.get("trackUri");
	
	const navigate = useNavigate();
	const { player } = usePlayerContext();

	const accessToken = useSelector(selectSpotifyAccessToken);

	const dispatch = useDispatch();

	const { play } = useSpotifyPlayer();
	const deviceId = useSelector((state) => state.player.deviceId);
	const [usersTopTracks, setUsersTopTracks] = useState("");
	const [usersTopArtists, setUsersTopArtists] = useState("");
	const [swiper1, setSwiper1] = useState(null);
	const [swiper2, setSwiper2] = useState(null);
	const [swiper3, setSwiper3] = useState(null);
	const getTopItems = async () => {
		dispatch(setPlayerLoading(true));
		try {
			let ArtistUrl = `${VITE_SPOTIFY_API_PATH}me/top/artists?limit=9`;
			const artistResponse = await axios.get(ArtistUrl, {
				headers: {
					Authorization: `Bearer ${accessToken}`,
				},
			});
			setUsersTopArtists(artistResponse.data.items);
			// console.log(artistResponse);
			let TrackUrl = `${VITE_SPOTIFY_API_PATH}me/top/tracks?limit=12`;
			const trackResponse = await axios.get(TrackUrl, {
				headers: {
					Authorization: `Bearer ${accessToken}`,
				},
			});
			const trackData = trackResponse.data.items.filter((item) => {
				return item.album.available_markets.indexOf("TW") >= 0;
			});
			setUsersTopTracks(trackData);
			// console.log(trackData);
		} catch (error) {
			console.log(error?.response?.data);
		} finally {
			dispatch(setPlayerLoading(false));
		}
	};
	useEffect(() => {
		getTopItems();
		if(trackUri && player && deviceId ) {
			play(null, trackUri);
			// navigate("/player",{replace: true})
		}
	}, [trackUri, player,deviceId]);
	const [articles, setArticles] = useState([]);
	useEffect(() => {
	  const getArticles = async () => {
		try {
		  const res = await axios.get(
			`${VITE_BASE_URL}/v2/api/${VITE_API_PATH}/articles`
		  );
		  // 過濾資料
		  const filteredArticles = res.data.articles.filter(
			(article) => article.author === "spotify" && article.isPublic === true
		  );
		  setArticles(filteredArticles);
		} catch (error) {
		  console.log("取得廣告失敗：" + error.response.data);
		}
	  };
	  getArticles();
	}, []);
	return (
		<div className="col-lg-9 col-12 player-scrollbar">
			<div className="mySwiper-player-1">
				<Swiper
					onSwiper={setSwiper1}
					modules={[Pagination]}
					spaceBetween={30}
					slidesPerView={1}
					speed={1500}
					loop={true}
					centeredSlides={true}
					autoplay={{
						delay: 5000,
						disableOnInteraction: false,
						pauseOnMouseEnter: true,
					}}
					pagination={{
						clickable: true,
					}}
				>
					{articles.map((article, index) => (
            <SwiperSlide key={index}>
              <div
                className="carousel-img-1 p-sm-6 p-5 d-flex flex-column"
                style={{
                  backgroundImage: `url(${article.imageUrl})`,
                }}
              >
                <h6>{article.title.split("/")[1]}</h6>
                <h1 className="mt-sm-5 mt-3">{article.title.split("/")[0]}</h1>
                <h5
                  className="mt-3"
                  dangerouslySetInnerHTML={{
                    __html: article.description.replace(/\n/g, "<br />"),
                  }}
                ></h5>
              </div>
            </SwiperSlide>))}

					<SwiperButtonNext swiperIndex={1} swiper={swiper1}>
						<ChevronRight />
					</SwiperButtonNext>
					<SwiperButtonPrev swiperIndex={1} swiper={swiper1}>
						<ChevronLeft />
					</SwiperButtonPrev>
				</Swiper>
			</div>
			<div className="mySwiper-player-2 mt-5 px-5">
				<Swiper
					onSwiper={setSwiper2}
					className="pt-8 pb-5"
					modules={[Pagination]}
					spaceBetween={30}
					// slidesPerView={4}
					speed={300}
					loop={false}
					centeredSlides={false}
					autoHeight={false}
					breakpoints={{
						1400: {
							slidesPerView: 4,
						},
						1200: {
							slidesPerView: 3,
						},
						768: {
							slidesPerView: 3,
						},
						576: {
							slidesPerView: 1,
						},
					}}
				>
					<div className="position-absolute top-0 start-0 z-1 d-flex align-items-center justify-content-between w-100 py-5">
						<div>
							<h5 className="mb-0">你可能會喜歡</h5>
						</div>
						<div className="d-flex gap-2">
							{swiper2 !== null && (
								<>
									<SwiperButtonPrev
										swiperIndex={2}
										swiper={swiper2}
									>
										<ChevronLeft />
									</SwiperButtonPrev>
									<SwiperButtonNext
										swiperIndex={2}
										swiper={swiper2}
									>
										<ChevronRight />
									</SwiperButtonNext>
								</>
							)}
						</div>
					</div>
					{usersTopTracks &&
						usersTopTracks.length > 0 ?
						usersTopTracks.map((item) => {
							return (
								<SwiperSlide key={item.id}>
									<PlayerCardAlbum
										cardImage={item.album.images[0]?.url}
										cardTitle={item.album.name}
										cardContent={item.album.release_date}
										albumId={item.album.id}
									/>
								</SwiperSlide>
							);
						}) :
						<div>尚無推薦專輯</div>
						}
				</Swiper>
			</div>
			<div className="mySwiper-player-2 mt-5 px-5 mb-5 pb-5">
				<Swiper
					onSwiper={setSwiper3}
					className="pt-8"
					spaceBetween={30}
					// slidesPerView={5}
					speed={300}
					loop={false}
					centeredSlides={false}
					pagination={{
						clickable: true,
					}}
					breakpoints={{
						1400: {
							slidesPerView: 5,
						},
						1200: {
							slidesPerView: 4,
						},
						768: {
							slidesPerView: 3,
						},
						475: {
							slidesPerView: 2,
						},
					}}
				>
					{usersTopArtists &&
						usersTopArtists.length > 0 ?
						usersTopArtists.map((item) => {
							return (
								<SwiperSlide key={item.id}>
									<PlayerCardArtist
										cardImage={item.images[0]?.url}
										cardTitle={item.name}
										artistId={item.id}
									/>
								</SwiperSlide>
							);
						}) : 
						<div>尚無追蹤藝人</div>
						}

					<div className="position-absolute top-0 start-0 z-1 d-flex align-items-center justify-content-between w-100 py-5">
						<div>
							<h5>你最愛的藝人</h5>
						</div>
						<div className="d-flex gap-2">
							{swiper3 !== null && (
								<>
									<SwiperButtonPrev
										swiperIndex={2}
										swiper={swiper3}
									>
										<ChevronLeft />
									</SwiperButtonPrev>
									<SwiperButtonNext
										swiperIndex={2}
										swiper={swiper3}
									>
										<ChevronRight />
									</SwiperButtonNext>
								</>
							)}
						</div>
					</div>
				</Swiper>
			</div>
		</div>
	);
}
