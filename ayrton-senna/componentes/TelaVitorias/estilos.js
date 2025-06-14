import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
    fundo: {
        flex: 1,
    },
    title:{
        fontWeight: 'bold',
        color: 'white',
        fontSize: 20,
        marginBottom: 10
    },
    container: {
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
        marginTop: 40,
        marginHorizontal: 30,
        padding: 10
    },
    text:{
        color: 'white',
        textAlign: 'center',
        fontSize: 11,
        marginBottom: 20
    },
    container2:{
        flexDirection: 'row',
        width: 200
    },
    span:{
        color: 'yellow',
        fontWeight: 'bold',
    },
    text1:{
        color: 'white'
    },
    img1:{
        width: 250,
        height: 190
    },
    content:{
        alignItems: 'center',
        marginBottom: 20,
        marginTop: 20
    }, 
    textCont:{
        backgroundColor:'rgba(0,0,0,0.5)',
        width: 250,
        padding: 10,
        color: 'white',
        textAlign: 'center'
    }
})

export default estilos