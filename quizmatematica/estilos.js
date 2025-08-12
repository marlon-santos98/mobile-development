import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
    fundo: {
        width: '100%',
        height: '100%',

        justifyContent: 'space-between',
    },
    quadro: {
        width: '80%',
        height: 200,

        marginTop: 40,
        marginBottom: 45,    
        justifyContent: 'center',
        alignSelf: 'center',

        backgroundColor: '#004C2A',
        borderWidth: 6,
        borderColor: 'white',
    },
    textoQuadro: {
        fontFamily: "AnnieUseYourTelescope_400Regular",
        fontSize: 48,
        color: 'white',
        textAlign: 'center',
        lineHeight: 65,
    },
    textoQuadroStatus: {
        fontFamily: "AnnieUseYourTelescope_400Regular",
        fontSize:24,
        textAlign: "center",
        textAlignVertical: "center",
        color: 'white',
        paddingHorizontal: 80,
        paddingTop: 6,
        width: '100%',
        display: 'flex',
        lineHeight: 25,
        backgroundColor: '#004C2A',
        borderTopWidth: 6,
        borderBottomWidth: 6,
        borderColor: 'white',
        marginTop: 20,
    },
    inputResposta: {
        width: '80%',
        marginTop: -30,
        alignSelf: 'center',
        fontFamily: 'AnnieUseYourTelescope_400Regular',
        fontSize: 48,
        color: 'white',
        borderBottomWidth: 4,
        borderBottomColor: 'white',
    },
    areaBotoes: {
        position: 'relative',
        bottom: 40,

        width: '100%',

        alignItems: 'center',
    },
    botao: {
        marginVertical: 15,
    },
  });

  export default estilos;