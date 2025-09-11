import { View, ScrollView } from "react-native";

import ItemLivro from "../../components/ItemLivro/index.js";

export default function Livro({itensLivro}){

    return(
        <ScrollView>
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