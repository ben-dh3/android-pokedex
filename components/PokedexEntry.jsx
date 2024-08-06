import React from 'react';
import { View, Text, Image, StyleSheet, ImageBackground, ScrollView } from 'react-native';

const PokedexEntry = ({ route }) => {
    const { data } = route.params;
    const hasData = data && data.name;

    const typeColors = {
        normal: ['#A8A878', '#C6C6A7', '#DADAD8'],
        fire: ['#F08030', '#F5AC78', '#F8C0C8'],
        water: ['#6890F0', '#98D8D8', '#A6C2E3'],
        electric: ['#F8D030', '#FAE078', '#FAF4B6'],
        grass: ['#78C850', '#A7DB8D', '#C7E6A3'],
        ice: ['#98D8D8', '#BCE6E6', '#D8F0F0'],
        fighting: ['#C03028', '#D67873', '#E0B9B9'],
        poison: ['#A040A0', '#C183C1', '#E6B6E6'],
        ground: ['#E0C068', '#EBD69D', '#F8E0A8'],
        flying: ['#A890F0', '#C6B7F5', '#D1C4F6'],
        psychic: ['#F85888', '#FA92B2', '#FAC6D8'],
        bug: ['#A8B820', '#C6D16E', '#D8E0A8'],
        rock: ['#B8A038', '#D1C17D', '#E6C8A3'],
        ghost: ['#705898', '#A292BC', '#C6B8D8'],
        dragon: ['#7038F8', '#A27DFA', '#C6A8F8'],
        dark: ['#705848', '#A29288', '#D8C6C0'],
        steel: ['#B8B8D0', '#D1D1E0', '#E6E6FA'],
        fairy: ['#EE99AC', '#F4BDC9', '#FAE6F4'],
        unknown: ['#68A090', '#A8BBA8', '#C6D8D8'],
    };

    const formattedTypes = hasData ? data.types.map(item => item.type.name).join(', ') : 'Unknown';
    const formattedAbilities = hasData ? data.abilities.map(item => item.ability.name).join(', ') : 'Unknown';
    const formattedStats = hasData ? data.stats.map((item, index) => (
        <Text key={index} style={styles.statText}>{item.stat.name}: {item.base_stat}</Text>
    )) : 'Unknown';

    const type = hasData ? data.types[0].type.name : 'unknown';
    const imageBackground = { backgroundColor: typeColors[type][0] };
    const topBackground = { backgroundColor: typeColors[type][1] };
    const dataBackground = { backgroundColor: typeColors[type][2] };

    return (
        <View style={styles.container}>
            <ImageBackground style={[styles.topScreen, topBackground]}>
                {hasData && (
                    <View style={[styles.imageContainer, imageBackground]}>
                        <Image
                            source={{ uri: data.sprites.front_default }}
                            style={styles.image}
                        />
                    </View>
                )}
            </ImageBackground>
            
            <ImageBackground style={styles.bottomScreen}>
                    <View style={[styles.dataContainer, dataBackground]}>
                        <Text style={styles.text}>Height: {data.height}</Text>
                    </View>
                    <View style={[styles.dataContainer, dataBackground]}>
                        <Text style={styles.text}>Weight: {data.weight}</Text>
                    </View>
                    <View style={[styles.dataContainer, dataBackground]}>
                        <Text style={styles.text}>Type: {formattedTypes}</Text>
                    </View>
                    <View style={[styles.dataContainer, dataBackground]}>
                        <Text style={styles.text}>Abilities: {formattedAbilities}</Text>
                    </View>
                    <View style={[styles.statsContainer, dataBackground]}>
                        <Text style={styles.text}>Stats:</Text>
                        <View style={styles.statContainer}>
                            {formattedStats}
                        </View>
                    </View>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    topScreen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth:20,
    },
    imageContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 200,
        height: 200,
        borderRadius: 200 / 2,
    },
    image: {
        width: 150,
        height: 150,
        resizeMode: 'contain'
    },
    bottomScreen: {
        flex: 1,
        marginHorizontal: 10,
        marginTop:5,
    },
    dataContainer: {
        padding: 5,
        borderRadius: 20,
        marginVertical: 5,
        alignItems: 'center'
    },
    statsContainer: {
        alignItems: 'center',
        marginTop: 5,
        borderRadius: 20,
    },
    statContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    statText: {
        width: '45%',
        color: 'black',
        padding: 1,
        margin: 3,
        textAlign: 'start',
    },
    text: {
        color: 'black',
        padding: 3,
        margin: 3,
        textAlign: 'center',
    },
});

export default PokedexEntry;

