import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectSpotifyAccessToken } from "../../slice/spotifyAuthSlice";
import PlayerCardPlaylist from "../../components/Player/PlayerCardPlaylist";
import { useParams } from "react-router";
const { VITE_SPOTIFY_API_PATH } = import.meta.env;
import { setPlayerLoading } from "../../slice/loadingSlice";

export default function UsersPlaylists() {
	const params = useParams().id;
	const dispatch = useDispatch();
	const accessToken = useSelector(selectSpotifyAccessToken);
	const [categoryData, setCategoryData] = useState([]);
	const getCategoryData = async (id) => {
		try {
			let url = `${VITE_SPOTIFY_API_PATH}browse/categories/${id}/playlists?country=TW`;
			const response = await axios.get(url, {
				headers: {
					Authorization: `Bearer ${accessToken}`,
				},
			});
			setCategoryData(response.data);
			console.log(response);
		} catch (error) {
			console.log(`❌ 無法取得分類 ${id} 的資料`);
			console.log(error?.response?.status, error?.response?.data);
		}
	};
	useEffect(() => {
		getCategoryData(params);
		// console.log(params);
	}, [accessToken]);

	return (
		<>
			<div className="col-lg-9 col-12 player-scrollbar">
				<div className="p-5 border-transparent rounded-4 player-bg mb-5">
					<div className="row mb-5">
						<div className="col-12">
							<div className="d-flex justify-content-between align-items-center mb-5">
								<h4 className="h4 mb-0">我的播放清單</h4>
							</div>
							{/* <div className="row">
								{playlistsData?.length > 0 ? (
									playlistsData.map((item) => {
										return (
											<div
												className="col-6 col-lg-3"
												key={item.id}
											>
												<PlayerCardPlaylist
													cardImage={
														item.images[0].url
													}
													cardTitle={item.name}
													cardText={
														item.owner.display_name
													}
													playlistId={item.id}
												/>
											</div>
										);
									})
								) : (
									<div className="col-6 col-lg-3">
										尚無播放清單
									</div>
								)}
							</div> */}
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
