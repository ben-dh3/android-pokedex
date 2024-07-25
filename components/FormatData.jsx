import React from 'react';
import { View, Text, Image } from 'react-native';

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
            <Image
                source={{ uri: data.sprites.front_default }}
                style={{ width: 100, height: 100 }}
            />
            <Text>{data.name}</Text>
            <Text>Height: {data.height}</Text>
            <Text>Weight: {data.weight}</Text>
            <Text>Type:</Text>
            {types}
            <Text>Abilities:</Text>
            {abilities}
            <Text>Stats:</Text>
            {stats}
        </View>
    );
};

export default FormatData;
