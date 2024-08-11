import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { capitalizeFirstLetter } from '../services/utils';
import NavigationButton from './NavigationButton';

const PokedexEntry = ({ route }) => {
    const navigation = useNavigation();
    const { data } = route.params;
    const hasData = data && data.name;

    const typeColors = {
        normal: ['#DFD7D1', '#D1C4BB', '#A28C7B'],
        fire: ['#EED4C4', '#E6C0A3', '#DBAA80'],
        water: ['#C2D0E2', '#A3B9D6', '#7F9DC7'],
        electric: ['#FFECA8', '#FFE07A', '#FFD747'],
        grass: ['#D0EABE', '#B8DE9C', '#9CD275'],
        ice: ['#C5ECF0', '#A7E1E8', '#86D5DE'],
        fighting: ['#E1C0C3', '#D5A4A9', '#C5888F'],
        poison: ['#CEB9E4', '#BB9EDB', '#A37FCD'],
        ground: ['#E0C3B2', '#D4AE96', '#C59273'],
        flying: ['#CCCCED', '#B8B8E7', '#A1A1DE'],
        psychic: ['#C8B8EF', '#B8A4EB', '#9C80E2'],
        bug: ['#E3D796', '#DDD085', '#D5C869'],
        rock: ['#B5B5B5', '#ABABAB', '#9A9A9A'],
        ghost: ['#BABAF4', '#B1B1F2', '#A0A0F0'],
        dragon: ['#9B8BFF', '#8F7EFF', '#8370FF'],
        dark: ['#9490B6', '#8984AE', '#6F689D'],
        steel: ['#E8E8FC', '#D8D8FF', '#CACAEF'],
        fairy: ['#FBE6F8', '#FBDBF6', '#F3C2EB'],
        unknown: ['#FFFFFF', '#FFFFFF', '#FFFFFF'],
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
            <View style={[styles.containerTop, topBackground]}>
                {hasData && (
                    <>
                        <View style={[styles.imageContainer, imageBackground]}>
                            <Image
                                source={{ uri: data.sprites.front_default }}
                                style={styles.image}
                            />
                        </View>
                        <Text style={styles.title}>{capitalizeFirstLetter(data.name)}</Text>
                    </>
                )}
            </View>
            <NavigationButton onPress={() => navigation.goBack()} colour={'#FFB7B7'}>
            </NavigationButton>
            <View style={[styles.containerBottom, topBackground]}>
                <View style={styles.data}>
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
                </View> 
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    containerTop: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth:20,
    },
    containerBottom: {
        flex: 1,
        zIndex:-10,
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
    data: {
        marginTop: 60,
        marginHorizontal:20,
    },
    dataContainer: {
        padding: 5,
        borderRadius: 10,
        marginVertical: 5,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,  
        elevation: 5,
    },
    statsContainer: {
        alignItems: 'center',
        marginTop: 5,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,  
        elevation: 5,
    },
    statContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    statText: {
        width: '45%',
        color: 'white',
        textAlign: 'start',
    },
    title: {
        fontWeight: 'bold',
        fontSize:25,
        padding:10,
    },
    text: {
        color: 'white',
    },
});

export default PokedexEntry;

