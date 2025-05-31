import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: '#F4FCC3',
    },
    title: {
        fontSize: 19,
        fontWeight: 'bold',
        marginBottom: 10,
        marginTop: 40,
        textAlign: 'center',
    },
    content: {
        fontSize: 12,
        color: '#333',
        marginBottom: 20,
        textAlign: 'center',
        lineHeight: 24,

    },
    containerCard: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        padding: 10,
    },
    card: {
        width: '300',
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
        borderWidth: 1,
        borderBlockColor: '#979797',
    },
    titleCard: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 5,
        textAlign: 'center',
        marginBottom: 20,
    }
})

export default estilos;