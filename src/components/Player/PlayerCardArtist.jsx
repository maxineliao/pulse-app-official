import PlayerImages from "../../Images";
export default function PlayerCardArtist({ cardImage, cardTitle }) {
  return (
    <div className="card card-peoplelist mb-5 w-100 p-5 rounded-4 d-block text-decoration-none">
      <div className="d-flex justify-content-center">
        <img
          src={cardImage}
          className="card-img-top rounded-circle d-block object-fit-cover player-img"
          alt={cardTitle}
        />
      </div>
      <div className="card-body px-0">
        <h5 className="card-title text-center">{cardTitle}</h5>
      </div>
    </div>
  );
}
