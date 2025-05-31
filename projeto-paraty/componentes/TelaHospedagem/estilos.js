import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#BECEFF',
    },
    titulo: {
        fontSize: 17,
        fontWeight: 'bold',
        marginBottom: 15,
        textAlign: 'center',
    },
    descricao: {
        fontSize: 12,
        marginBottom: 20,
        textAlign: 'center',
    },
    hospedagemContainer: {
        width: '300',
        alignItems: 'center',
        justifyContent: 'center',  
        gap: 10,
        },
    card: {
        backgroundColor: '#fff',
        padding: 5,
        borderRadius: 6,
        borderColor: '#000',
        borderWidth: 1,
    },
    nomeHospedagem: {
        fontSize: 14,
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 10,
    },
    precoHospedagem: {
        fontSize: 12,
        color: '#888',
    },
    localizacaoHospedagem: {
        fontSize: 12,
        color: '#666',
    },
})

export default estilos;