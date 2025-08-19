import { StyleSheet } from "react-native";

const estilo = StyleSheet.create({
    container: {
        backgroundColor: '#f11635'
    },
    img:{
        width: 90,
        height: 80,
    },
    imgView:{
        width: 300,
        alignItems: 'center',
        marginTop: 50
    },
    title:{
        padding: 20
    },
    input:{
        backgroundColor: '#fff',
        height: 48,
        borderRadius: 30,
        width: 280,
        marginLeft: 18,
        padding: 15
    },
    cardImg:{
        width: 90,
        height: 90,
        borderRadius: 20
    },
    card: {
        backgroundColor: '#eee1e1ff',
        marginBottom: 10,
        marginVertical: 30,
        marginHorizontal: 10,
        borderRadius: 30,
        flexDirection: 'row',
    },
    textoCard:{
        flexShrink: 1,
        flexWrap: 'wrap',
        maxWidth: 190,
        fontSize: 10
    },
    cardText:{
        backgroundColor: '#fff',
        marginLeft: 10,
        borderRadius: 20,
        padding: 8,
        width: 200,
        marginVertical: 10
    },
    titleText:{
        fontSize: 15,
        fontWeight: 'bold'
    }
})

export default estilo