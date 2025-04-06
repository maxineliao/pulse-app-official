import { Link } from "react-router";
export default function PlayerCardGenre(
    {
        cardImage,
        cardTitle,
		genreId,
    }
) {
	return (
		<Link className="card-genre position-relative p-2 rounded-4 d-block" to={`/player/categories/${genreId}`}>
			<img
				src={cardImage}
				alt=""
				className="w-100 rounded-4"
			/>
			<h6 className="h6 mb-0 position-absolute p-3 bottom-0">
				{cardTitle}
			</h6>
		</Link>
	);
}
