import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    image: {
        width: 280,
        height: 150,
        marginTop: 20,
        borderRadius: 10,
    },
    content:{
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#127711',
        textAlign: 'center',
        marginBottom: 10,
    },
    titleh2: {
        color: '#ffff',
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 20,
    },
    text: {
        color: '#ffff',
        textAlign: 'center',
        marginBottom: 10,
        fontSize: 12,
    }
})

export default estilos;