import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
    image: {
        height: 100,
        width: 30,
    },
    cardContainer: {
        flexDirection: 'row',
        padding: 15,
        marginHorizontal: 10,
        alignItems: 'flex-start',
        backgroundColor: '#AB887C',
        marginBottom: 10,
        borderRadius: 10,
        
    },
    textContainer: {
        color: 'white',
        fontSize: 12, 
        padding: 15,
    },
    title:{
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center'
    },
    mainTitle: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 25,
        padding: 20
    },
    textTitle: {
        marginLeft: 10,
        color: 'black',
        padding: 10
    }
})

export default estilos;