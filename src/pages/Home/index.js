import { StyleSheet, Text, View, FlatList } from 'react-native';

import Header from '../../components/Header';
import Balance from '../../components/Balance';
import Moviments from '../../components/Moviments';
import Actions from '../../components/Actions';

const list = [
    {
        id: 1,
        label: 'Conta de luz',
        value: '130,53',
        date: '20/09/2022',
        type: 0 // despesas
    },
    {
        id: 2,
        label: 'Pix Emanuel',
        value: '7,50',
        date: '19/05/2022',
        type: 1 // entradas
    },
    {
        id: 3,
        label: 'Salário',
        value: '1.100,00',
        date: '20/05/2022',
        type: 1 // entradas
    }
]

export default function Home() {
    return (
        <View style={styles.container}>
            <Header name='Samuel Duarte' />

            <Balance saldo='9.250,90' gastos='-527,00' />

            <Actions />

            <Text style={styles.title}>Últimas movimentações</Text>

            <FlatList
                style={styles.list}
                data={list}
                keyExtractor={(item) => String(item.id)} // transformando o item'id' em string, pois o Flatlist entende só string
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => <Moviments data={item} />}
            />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafafa',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        margin: 14,
    },
    list: {
        marginStart: 14,
        marginEnd: 14,
    }
});
