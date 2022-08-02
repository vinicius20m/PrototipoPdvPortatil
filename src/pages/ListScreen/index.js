
import React from "react" ;
import { useNavigation } from '@react-navigation/native' ;
import {
    Container,
    Texto,
    Botao
} from './styles' ;

export default () => {
    const navigation = useNavigation() ;

    return (
        <Container>
            <Texto>Listagem das Notas</Texto>
            <Botao title="Ir para tela de Edição" onPress={()=>navigation.navigate('EditNote')} />
        </Container>
    )
}
