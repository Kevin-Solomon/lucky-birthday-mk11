import "./styles.css";
export default function Message({ img, words }) {
  return (
    <div>
      <img
        onError={(e) => {
          e.target.style.display = "none";
        }}
        className="img"
        alt="img"
        style={{
          margin: "2rem",
          width: "100px",
          height: "100px"
        }}
        src={img}
      />
      <h1 style={{ fontSize: "16px" }}>{words}</h1>
    </div>
  );
}
