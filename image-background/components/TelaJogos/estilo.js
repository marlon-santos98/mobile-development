import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#121212',
    },
    text: {
        color: '#FFFFFF',
        top: -85,
        fontWeight: 'bold',
        fontSize: 20,
        width: 280,
        padding: 8,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    textBold: {
        fontSize: 28,
        textAlign: 'center',
        fontWeight: 'bold',
        color: '#308B2F',
        marginVertical: 10,
    },
    textContent: {
        fontSize: 12,
        color: '#FFFFFF',
        textAlign: 'center',
        marginBottom: 40,
    },
    textJogos: {
        marginTop: 10,
        fontSize: 12,
        color: '#FFFFFF',
        marginBottom: 50,
    },
})

export default estilos;