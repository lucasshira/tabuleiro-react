import Linha from "./Linha";

const Tabuleiro = () => {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      margin: "10px"
    }}>
      <Linha />
      <Linha preta />
      <Linha />
      <Linha preta />
      <Linha />
      <Linha preta />
      <Linha />
      <Linha preta />
    </div>
  );
}
 
export default Tabuleiro;