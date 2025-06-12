import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
    scrool:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
        marginBottom: 20
    },
    cardContainer: {
        borderWidth: 1,
        borderColor: 'black',
        width: 220,
        padding: 20,
        borderRadius: 10
    },
    title: {
        color: 'black',
        fontWeight: 'bold',
        marginLeft: 10,
        fontSize: 19,
        marginTop: 20,
        padding: 5
    },
    textCard: {
        textAlign: 'center'
    }
})

export default estilos