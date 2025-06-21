import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
    texto: {
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 25
    },
    img:{
        width: 300,
        height: 200,
    },
    content:{
        lineHeight: 20,
        letterSpacing: 0.5,
        marginBottom: 20,
        marginTop: 20
    },
    container:{
        marginHorizontal: 25
    },
    containerCard: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 20,
        justifyContent: 'space-evenly',
    },
    card:{
        backgroundColor: '#008001',
        padding: 10,
        borderRadius: 10,
        marginBottom: 10,
        alignItems: 'center',
        width: 110
    },
    textCard: {
        fontSize: 10,
        textAlign: 'center',
        color: 'white'
    },
    imgCard:{
        tintColor: 'white',
    }
})

export default estilos