import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
    container: {
        padding: 10
    },
    containerPai:{
        flex:1
    },
    img:{
        width: 300,
        height: 200,
        borderRadius: 10
    },
    name:{
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 10,
        marginTop: 16
    },
    content: {
        fontWeight: 'bold',
        color: 'gray',
        fontSize: 13,
        marginTop: 10,
        marginBottom: 25
    },
    cont1:{
        flexDirection: 'row',
        marginBottom: 10,
        borderWidth: 1,
        borderColor: 'black'
    },
    contInt:{
        padding: 10
    },
    img1:{
        width: 80,
        height: 100
    },
    text:{
        fontWeight: 'bold'
    },
    content1:{
        fontSize: 12,
        marginRight: 80,
        lineHeight: 15,
        marginTop: 10
    }
})

export default estilos