import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
    quadro: {
        width: '80%',
        height: 200,

        marginTop: 95,
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

        marginTop: 25,
    },
    botaoFechar: {
        position: 'absolute',
        top: -20,
        right: -20,

        width: 42,
        height: 42,
        
        backgroundColor: '#004C2A',
        
        borderRadius: 100,
        borderWidth: 4,
        borderColor: 'white',
        
        fontSize: 24,
        color: 'white',
        textAlign: 'center',
        textAlignVertical: 'center',
    }
  });

  export default estilos;