import {     ScrollView, StyleSheet } from "react-native";

import ItemLivro from "../../components/ItemLivro/index.js";

export default function Livro({itensLivro}){

    return(
        <ScrollView contentContainerStyle={estilos.container}>
            {
                itensLivro.map((itemLivro)=>(
                    <ItemLivro
                        key={itemLivro.id}
                        img={itemLivro.volumeInfo.imageLinks?.thumbnail}
                        paginas={itemLivro.volumeInfo.pageCount}
                        autor={itemLivro.volumeInfo.authors}
                        titulo={itemLivro.volumeInfo.title}
                    />
                ))
            }
        </ScrollView>
    )
}

const estilos = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
});