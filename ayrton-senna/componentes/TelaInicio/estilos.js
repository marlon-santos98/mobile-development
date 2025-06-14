import { StyleSheet } from "react-native";
import { withTiming } from "react-native-reanimated";

const estilos = StyleSheet.create({
    img: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    img1: {
        borderRadius: 100,
        width: 200,
        height: 200
    },
    back: {
        backgroundColor: 'black',
        padding: 15,
        width: 250,
        borderRadius: 20,
        marginTop: 50
    },
    text:{
        color: 'white',
        fontSize: 11
    },
    title:{
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center'
    }
})

export default estilos