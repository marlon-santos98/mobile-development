import React from 'react';
import { Image, ScrollView, Text, View } from 'react-native';

import civic from '../../assets/carros/civic.png';
import hrv from '../../assets/carros/hr-v.png';
import cityhatch from '../../assets/carros/new-city-hatchback.png';
import citysedan from '../../assets/carros/new-city-sedan.png';

export default function Carros () {
  return (
    <ScrollView>
      <Text>
        Carros
      </Text>

      <View >
        <Image source={civic}/>
          <View>
            <Text>Honda Civic</Text>
          </View>
      </View>

      <View >
        <Image source={hrv} style={estilo.imagem}/>
          <View>
            <Text>HR-V</Text>
          </View>
      </View>

      <View >
        <Image source={cityhatch} style={estilo.imagem}/>
          <View>
            <Text>City Hatch</Text>
          </View>
      </View>

      <View >
        <Image source={citysedan} style={estilo.imagem}/>
          <View>
            <Text>City Sedan</Text>
          </View>
      </View>
    </ScrollView>
  );
}