import React from 'react';
import { Image, PanResponder, ScrollView, Text, View } from 'react-native';

import start from '../../assets/motos/CG-start.png';
import titan from '../../assets/motos/CG-titan.png';
import crf from '../../assets/motos/CRF-250F.png';
import pop from '../../assets/motos/POP-110i.png';

export default function Motos () {
  return (
    <ScrollView>
      <Text>
        Motos
      </Text>

      <View>
        <Image source={start}/>
          <View>
            <Text>CG Start</Text>
          </View>
      </View>

      <View>
        <Image source={titan}/>
          <View>
            <Text>CG Titan</Text>
          </View>
      </View>

      <View>
        <Image source={crf}/>
          <View>
            <Text>CRF 250F</Text>
          </View>
      </View>

      <View >
        <Image source={pop}/>
          <View>
            <Text>POP 110i</Text>
          </View>
      </View>
    </ScrollView>
  );
}