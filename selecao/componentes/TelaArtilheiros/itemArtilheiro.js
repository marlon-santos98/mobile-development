import { ImageBackground, ScrollView, View, Text, Image, StyleSheet } from "react-native";

//estilos

export default function TelaArtilheiros(props){
    return(
        <ImageBackground source={props.img2} style={estilos.container}>
            <View style={estilos.overlay} />
            <View style={estilos.card_gol}>
                <Text style={estilos.texto}>{props.jogador}</Text>
                <Text style={estilos.gols}>{props.gols}</Text>
            </View>
            <View  style={estilos.card_ano}>
                <Text style={estilos.ano}>{props.ano}</Text>
            </View>
        </ImageBackground>
    )
}

const estilos = StyleSheet.create({
    card:{
        flexDirection: 'row',
    },
    card_gol:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10
    },
    gols:{
        color: "white",
        backgroundColor: '#1A254E',
        fontSize: 15,
        borderRadius: 10,
        padding: 8,
        justifyContent: 'center',
        alignItems: 'center'
    },
    overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'black',
    opacity: 0.4, // ajuste o valor conforme desejar
},
img:{
    width: 100,
    height: 70
},
container:{
    overflow: 'hidden',
    borderRadius: 15,
    marginBottom: 20, 
    width: 300,
    height: 130,
},
texto:{
    fontSize: 18,
    color: 'white',
    fontWeight: '400',
    flexShrink: 1,
    flexWrap: 'wrap',
    textAlign: 'left',
},
ano:{
    textAlign: 'center',
    color: 'white',
},
card_ano:{
    backgroundColor: '#008F5A',
    top: 51,
    width: 300,
    margin: 0,
    margin: 0
}
})