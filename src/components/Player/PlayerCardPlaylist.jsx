import PlayerImages from "../../Images";
export default function PlayerCardPlaylist({ cardImage, cardTitle, cardText }) {
  return (
    <a className="card card-playlist me-5 w-100 p-5 rounded-4 d-block text-decoration-none">
      <div className="d-flex justify-content-center">
        <img
          src={cardImage}
          className="card-img-top rounded-4 d-block object-fit-cover player-img"
          alt={cardTitle}
        />
      </div>
      <div className="card-body px-0">
        <h5 className="card-title text-center">{cardTitle}</h5>
        <p className="card-text text-secondary text-center">
          擁有者：{cardText}
        </p>
      </div>
    </a>
  );
}
