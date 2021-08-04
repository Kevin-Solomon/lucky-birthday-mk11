export default function Message({ img, words }) {
  return (
    <div>
      <img
        style={{
          margin: "2rem",
          width: "200px"
        }}
        src={img}
      />
      <h1>{words}</h1>
    </div>
  );
}
