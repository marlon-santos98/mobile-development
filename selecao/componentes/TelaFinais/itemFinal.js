import { ImageBackground, View, Text, Image, StyleSheet } from "react-native";

//estilos

export default function TelaFinais(props){
    return(
        <ImageBackground source={props.img2} style={estilos.container}>
            <View style={estilos.overlay} />
            <Text style={estilos.texto}>{props.vencedor}</Text>
            <View  style={estilos.card}>
                <Image source={props.img} style={estilos.img}/>
                <Text style={estilos.texto}>{props.resultado}</Text>
                <Image source={props.img1} style={estilos.img}/>
            </View>
        </ImageBackground>
    )
}

const estilos = StyleSheet.create({
    card:{
        flexDirection: 'row'
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
    padding: 10,
    overflow: 'hidden',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20, 
    width: 300
},
texto:{
    fontSize: 18,
    color: 'white',
    fontWeight: '600',
    padding: 10,
    flexShrink: 1,
    flexWrap: 'wrap',
    textAlign: 'center'
}
})