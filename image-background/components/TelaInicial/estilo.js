import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#2C2E2D'
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 80,
        marginTop: 80,
        alignSelf: 'center',
    },
    text: {
        fontSize: 16,
        textAlign: 'center',
        marginVertical: 10,
    },
    button: {
        padding: 10,
        margin: 10,
        backgroundColor: '#0078D7',
        borderRadius: 5,
    },
    buttonText: {
        color: '#FFFFFF',
        textAlign: 'center',
    },
})

export default estilos;