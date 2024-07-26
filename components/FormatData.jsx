import React from 'react';
import { View, Text, Image, StyleSheet, ImageBackground } from 'react-native';

const FormatData = ({ data }) => {
    const hasData = data && data.name;

    const formattedTypes = hasData ? data.types.map(item => item.type.name).join(' ') : 'Unknown';
    const formattedAbilities = hasData ? data.abilities.map(item => item.ability.name).join(' ') : 'Unknown';
    const formattedStats = hasData ? data.stats.map(item => `${item.stat.name}: ${item.base_stat}`).join(', ') : 'Unknown';

    return (
        <View style={styles.container}>
            <ImageBackground source={require('../assets/top-screen.png')} resizeMode="cover" style={styles.topScreen}>
                <Text style={styles.text}>{hasData ? data.name : 'No data available'}</Text>
                {hasData && (
                    <>
                        <Image
                            source={{ uri: data.sprites.front_default }}
                            style={styles.image}
                        />
                        <Text style={styles.text}>Height: {data.height}</Text>
                        <Text style={styles.text}>Weight: {data.weight}</Text>
                        <Text style={styles.text}>Type: {formattedTypes}</Text>
                    </>
                )}
            </ImageBackground>
            
            <ImageBackground source={require('../assets/bottom-screen.png')} resizeMode="cover" style={styles.bottomScreen}>
                <View style={styles.stats}>
                    <Text style={styles.text}>Abilities: {formattedAbilities}</Text>
                    <Text style={styles.text}>Stats: {formattedStats}</Text>
                </View>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    stats: {
        marginTop: 20,
        marginHorizontal: 20,
    },
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    topScreen: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 350,
    },
    bottomScreen: {
        marginTop: 20,
        alignItems: 'center',
        height: 300,
    },
    text: {
        color: 'white',
        marginVertical: 5,
    },
    image: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
    },
});

export default FormatData;