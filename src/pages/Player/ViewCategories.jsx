import PlayerCardGenre from "../../components/Player/PlayerCardGenre";
import { useSelector } from "react-redux";
import { selectSpotifyAccessToken } from "../../slice/spotifyAuthSlice";
import { useEffect, useState } from "react";
const { VITE_SPOTIFY_API_PATH } = import.meta.env;
import axios from "axios";

export default function ViewCategories() {
	//已知穩定可用的Spotify Categories
	const stableSpotifyCategories = [
		{ id: "pop", name: "Pop" },
		{ id: "hiphop", name: "Hip-Hop" },
		{ id: "rock", name: "Rock" },
		{ id: "chill", name: "Chill" },
		{ id: "mood", name: "Mood" },
		{ id: "workout", name: "Workout" },
		{ id: "focus", name: "Focus" },
		{ id: "sleep", name: "Sleep" },
		{ id: "party", name: "Party" },
		{ id: "edm_dance", name: "EDM / Dance" },
		{ id: "jazz", name: "Jazz" },
		{ id: "rnb", name: "R&B" },
		{ id: "classical", name: "Classical" },
		{ id: "country", name: "Country" },
		{ id: "kpop", name: "K-Pop" },
		{ id: "travel", name: "Travel" },
	];
	const accessToken = useSelector(selectSpotifyAccessToken);
	const [categoriesData, setCategoriesData] = useState("");

	const getCategories = async (id) => {
		try {
			let url = `${VITE_SPOTIFY_API_PATH}browse/categories/${id}`;
			// let url = `${VITE_SPOTIFY_API_PATH}browse/categories/pop/playlists`;
			const response = await axios.get(url, {
				headers: {
					Authorization: `Bearer ${accessToken}`,
				},
			});
			// console.log(response);
			const newData = response.data;
			newData["originalId"] = id;
			return newData
		} catch (error) {
			console.log(error?.response?.data);
		}
	};
	// const getSingleCategory = async () => {
	// 	try {
	// 		let url = `${VITE_SPOTIFY_API_PATH}browse/categories/pop/playlists`;
	// 		const response = await axios.get(url, {
	// 			headers: {
	// 				Authorization: `Bearer ${accessToken}`,
	// 			},
	// 		});
	// 		// setCategoriesData(response.data.categories.items);
	// 		console.log(response);
	// 	} catch (error) {
	// 		console.log(error?.response?.data);
	// 	}
	// };
	useEffect(() => {
		const fetchData = async() => {
			try {
				const result = await Promise.all(
					stableSpotifyCategories.map((item)=> {
					return getCategories(item.id)
				}))
				// console.log(result);
				setCategoriesData(result);
			} catch (error) {
				console.log("分類取得失敗："+ error);
			}
		}
		fetchData();
	}, []);

	return (
		<div className="col-lg-9 col-12 player-scrollbar">
			<div className="p-5 border-transparent rounded-4 player-bg mb-5">
					<div className="row mb-5">
						<div className="col-12">
							{/* <div className="d-flex justify-content-between align-items-center mb-5">
								<h4 className="h4 mb-0"></h4>
							</div> */}
							<div className="row">
                                {categoriesData && categoriesData?.length > 0 ? categoriesData.map((item) => {
                                    return (
                                        <div className="col-6 col-lg-3" key={item.id}>
                                            <PlayerCardGenre
                                                cardImage={item.icons[0].url}
                                                cardTitle={item.name}
												genreId={item.originalId}
									        />
								        </div>
                                    )
                                })
                                : 
                                null}
							</div>
						</div>
					</div>
				</div>
		</div>
	);
}
