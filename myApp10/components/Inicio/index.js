import React from 'react';
import { Image, Text, View } from 'react-native';

import carro from '../../assets/carros/civic.png';
import moto from '../../assets/motos/CG-start.png';

export default function Inicio(props) {
  return (
    <View>
      <Text>
        Veículos Honda
      </Text>

      <View>
        <View onPress={() => props.navigation.navigate('Carros')}>
          <Image source={carro} />
          <View>
            <Text>Carros</Text>
          </View>
        </View>

        <View onPress={() => props.navigation.navigate('Motos')}>
          <Image source={moto} />
          <View>
            <Text>Motos</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
