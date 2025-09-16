import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
  imagem: {
    height: "75%",
    width: "75%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  container: {
    padding: 10,
    display: "flex",
  },
  card: {
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: "#EFEFEF",
    width: 150,
    height: 230,
    alignItems: "center",
    justifyContent: "center",
    position: "relative"
  },
  text: {
    color: "white",
    textAlign: "center",
    fontSize: 10,
    width: "75.2%",
    backgroundColor: "rgba(0,0,0,0.5)",
    top: -30,
  },
  titulo: {
    fontSize: 8,
    fontWeight: "600",
    position: "absolute",
    top: -55,
    padding: 10,
    marginLeft: 5
  }
});

export default estilos;
