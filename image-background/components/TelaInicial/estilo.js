import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2C2E2D',
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 80,
        marginTop: 40,
        alignSelf: 'center',
    },
    text: {
        fontSize: 26,
        textAlign: 'center',
        marginVertical: 10,
        color: '#107C0F',
        fontWeight: 'bold',
    },
    textContent: {
        fontSize: 12,
        textAlign: 'center',
        color: '#FFFFFF',
        padding: 10,
    },
    imageBackground: {
        backgroundColor: '#107c0f',
        width: 280,
        height: 150,
        marginVertical: 20,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        padding: 10,
        borderRadius: 10,
    },
})

export default estilos;