import { ImageBackground, ScrollView, View, Text, Image, StyleSheet } from "react-native";

//estilos

export default function TelaTitulos(props){
    return(
        <ImageBackground source={props.img2} style={estilos.container}>
            <View style={estilos.overlay} />
            <View style={estilos.card_gol}>
                <Text style={estilos.texto}>{props.sede}</Text>
                <Image style={estilos.gols} source={props.img3}/>
            </View>
                <Text style={estilos.ano}>{props.ano}</Text>
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
        fontSize: 15,
        padding: 9,
        overflow: 'hidden'
    },
    overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'black',
    opacity: 0.4, // ajuste o valor conforme desejar
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
    fontSize: 30,
},
})