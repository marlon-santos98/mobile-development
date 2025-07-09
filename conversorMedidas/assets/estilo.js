import { StyleSheet } from "react-native";

const estilo = StyleSheet.create({
    container:{
        width: 300,
        height: 150,
        backgroundColor: 'rgba(255, 255, 255, 0.33)',
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20,
        marginHorizontal: 10,
        marginVertical: 50,
    },
    texto: {
        color: "#fff"
    }, 
    container_2:{
        flexDirection: 'row',
        gap: 10
    },
    milhas: {
        backgroundColor: "#8FED90",
        padding: 5,
        borderRadius: 5,
        marginTop: 15
    },
    input:{
        backgroundColor: "#fff",
        padding: 5,
        borderRadius: 5,
        marginTop: 15,
        width: 150
    },
    valor:{
        color: "#fff",
        fontSize: 65,
        fontWeight: "400"
    },
    containerValor:{
        width: 300,
        height: 250,
        backgroundColor: 'rgba(255, 255, 255, 0.33)',
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20,
        marginHorizontal: 10,
        paddingHorizontal: 40
    }
})

export default estilo