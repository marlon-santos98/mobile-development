import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e1e3e4',
        padding: 10,
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold', 
        marginBottom: 10,
    },
    content: {
        textAlign: 'center',
        lineHeight: 20,
        marginBottom: 20,
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 5,
        marginBottom: 10,
        borderColor: '#979797',
        borderWidth: 1,
        shadowColor: '#000',
    },
    titleCard: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    containerCard: {
        marginBottom: 40,
    },
})

export default estilos;
