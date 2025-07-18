import { StyleSheet } from "react-native";

const estilo = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        borderRadius: 10,
        marginBottom: 20,
        width: 250
    },
    titulo: {
        fontSize: 30,
        color: 'white',
        fontWeight: 'bold',
    },
    overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'black',
    opacity: 0.4, // ajuste o valor conforme desejar
}
})

export default estilo