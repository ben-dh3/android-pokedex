import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const FormatData = ({ data }) => {
    if (!data || !data.name) {
        return <Text>No data available</Text>;
    }

    const types = data.types?.map((item, index) => (
        <Text key={index}>{item.type.name}</Text>
    ));

    const abilities = data.abilities?.map((item, index) => (
        <Text key={index}>{item.ability.name}</Text>
    ));

    const stats = data.stats?.map((item, index) => (
        <Text key={index}>{item.stat.name}: {item.base_stat}</Text>
    ));

    return (
        <View>
            <View style={styles.topScreen}>
                <Text style={styles.text}>{data.name}</Text>
                <Text style={styles.text}>Height: {data.height}</Text>
                <Text style={styles.text}>Weight: {data.weight}</Text>
                <Text style={styles.text}>Type:{types}</Text>
                <Image
                source={{ uri: data.sprites.front_default }}
                style={styles.image}
                /> 
            </View>
            
            <View style={styles.bottomScreen}>
                <Text style={styles.text}>{abilities}</Text>
                <Text style={styles.text}>{stats}</Text>
            </View>
            
        </View>
    );
};

const styles = StyleSheet.create({
    bottomScreen: {
        alignItems: 'center',
        flexDirection: 'col',
    },
    text: {
        color: 'white',
    },
    topScreen: {
        alignItems: 'center',
        flexDirection: 'col',
    },
    image: {
        width: 100, 
        height: 100,
    },
  });

export default FormatData;
