import PlayerImages from "../../Images";
export default function PlayerCardAlbum({ cardTitle, cardContent, cardImage }) {
	return (
		<a className="card-album p-2 rounded-4 d-block text-decoration-none">
			<img
				src={cardImage}
				alt={cardTitle}
				className="w-100 mb-3 rounded-4"
			/>
			<h6 className="h6 mb-1">{cardTitle}</h6>
			<p className="fs-7 mb-0 text-secondary">{cardContent}</p>
		</a>
	);
}
