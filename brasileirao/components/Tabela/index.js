import { useEffect, useState } from 'react';
import { View, ScrollView } from 'react-native';

import ItemTabela from '../ItemTabela';
import HeaderTabela from '../HeaderTabela';

export default function Tabela({ itensTabela }) {

    return (
        <View>
            <HeaderTabela />
            <ScrollView>
            {
                itensTabela.map((itemTabela) => (
                    <ItemTabela
                    key={itemTabela.posicao}
                    posicao={itemTabela.posicao}
                    time={itemTabela.time.nome_popular}
                    pontos={itemTabela.pontos}
                    vitorias={itemTabela.vitorias}
                    empates={itemTabela.empates}
                    derrotas={itemTabela.derrotas}
                    gols_pro={itemTabela.gols_pro}
                    gols_contra={itemTabela.gols_contra}
                    saldo_gols={itemTabela.saldo_gols}
                    />
                ))
            }
            </ScrollView>
        </View>
    )
}