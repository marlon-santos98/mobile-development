import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: 'e1e3e4',
    },
    card: {
        width: 250,
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 10,
        borderColor: "#979797",
        borderWidth: 1,
    },
    title: {
        marginTop: 10,
        gap: 10,
    },
    text: {
        textAlign: 'center',
        marginBottom: 20,
    },
    text1: {
        fontSize: 26,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
    },
    textCard:{
        marginBottom: 5,
    }
})

export default styles;