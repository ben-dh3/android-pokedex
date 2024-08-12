import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Image, StyleSheet, Text} from 'react-native';
import { capitalizeFirstLetter } from '../services/utils';
import NavigationButton from './NavigationButton';

const PokedexEntry = ({ route }) => {
    const navigation = useNavigation();
    const { data } = route.params;
    const hasData = data && data.name;

    const typeColors = {
        normal: ['#DFD7D1', '#A28C7B', '#D1C4BB'],
        fire: ['#EED4C4', '#DBAA80', '#E6C0A3'],
        water: ['#C2D0E2', '#7F9DC7', '#A3B9D6'],
        electric: ['#FFECA8', '#FFD747', '#FFE07A' ],
        grass: ['#D0EABE','#9CD275', '#B8DE9C'],
        ice: ['#C5ECF0', '#86D5DE', '#A7E1E8'],
        fighting: ['#E1C0C3', '#C5888F', '#D5A4A9'],
        poison: ['#CEB9E4', '#A37FCD', '#BB9EDB'],
        ground: ['#E0C3B2', '#C59273', '#D4AE96'],
        flying: ['#CCCCED', '#A1A1DE', '#B8B8E7'],
        psychic: ['#C8B8EF', '#9C80E2', '#B8A4EB'],
        bug: ['#E3D796', '#D5C869', '#DDD085'],
        rock: ['#B5B5B5', '#9A9A9A', '#ABABAB'],
        ghost: ['#BABAF4', '#A0A0F0', '#B1B1F2'],
        dragon: ['#9B8BFF', '#8370FF', '#8F7EFF'],
        dark: ['#9490B6', '#6F689D', '#8984AE'],
        steel: ['#E8E8FC', '#CACAEF', '#D8D8FF'],
        fairy: ['#FBE6F8', '#F3C2EB', '#FBDBF6'],
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
            <Image style={styles.navigationButton} source={require('../assets/searchbar-close.webp')}></Image>
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
                        <Text style={styles.subtitle}>Height: </Text>
                        <Text style={styles.text}>{data.height}</Text>
                    </View>
                    <View style={[styles.dataContainer, dataBackground]}>
                        <Text style={styles.subtitle}>Weight: </Text>
                        <Text style={styles.text}>{data.weight}</Text>
                    </View>
                    <View style={[styles.dataContainer, dataBackground]}>
                        <Text style={styles.subtitle}>Type: </Text>
                        <Text style={styles.text}>{formattedTypes}</Text>
                    </View>
                    <View style={[styles.dataContainer, dataBackground]}>
                        <Text style={styles.subtitle}>Abilities: </Text>
                        <Text style={styles.text}>{formattedAbilities}</Text>
                    </View>
                    <View style={[styles.statsContainer, dataBackground]}>
                        <Text style={styles.subtitle}>Stats:</Text>
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
        zIndex: -5,
    },
    containerBottom: {
        flex: 1,
        zIndex:-10,
    },
    navigationButton:{
        alignSelf: 'center',
        position: 'absolute',
        width: '100%',
        height: undefined,
        aspectRatio: 1,
        resizeMode: 'contain',
        zIndex: 0
      },
    imageContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 200,
        height: 200,
        borderRadius: 200 / 2,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 1,
        shadowRadius: 2,  
        elevation: 5,
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
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 5,
        borderRadius: 10,
        marginVertical: 5,
        alignItems: 'center',
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 1,
        shadowRadius: 2,  
        elevation: 5,
    },
    statsContainer: {
        alignItems: 'center',
        marginTop: 5,
        borderRadius: 10,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 1,
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
        color: 'black',
        textAlign: 'start',
        marginLeft: 10,
        marginBottom: 5,
        fontFamily: 'TitilliumWeb_400Regular',
        opacity: 0.8
    },
    title: {
        fontSize:25,
        padding:10,
        fontFamily: 'TitilliumWeb_700Bold',
        opacity: 0.8
    },
    subtitle: {
        fontFamily: 'TitilliumWeb_700Bold',
        opacity: 0.2
    },
    text: {
        color: 'black',
        marginVertical: 2,
        fontFamily: 'TitilliumWeb_400Regular',
        opacity: 0.8
    },
});

export default PokedexEntry;

