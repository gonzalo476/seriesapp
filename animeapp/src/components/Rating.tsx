import React, { FC } from 'react'
import { View, StyleSheet, Image } from 'react-native'

import { icons } from '../../constants'
import { Text } from '../../constants'

interface iProps {
    rating?: any
}

const styles = StyleSheet.create({
    icon: {
        width: 20,
        height: 20,
        marginEnd: 5
    },
    container: {
        borderWidth: 1,
        borderRadius: 20,
        alignItems: "center",
        flexDirection: 'row',
        paddingHorizontal: 10,
        height: 40
    }
})

const Rating: FC<iProps> = ({ rating }) => {

    function Color() {
        if (rating >= 80){
            return '#34C759'
        } else if (rating >= 50){
            return 'orange'
        } else if (rating >= 30){
            return 'yellow'
        } else if (rating === null){
            return 'red'
        }
    }

    return (
        <View style={[styles.container, { backgroundColor: Color() }]}>
            <Image style={styles.icon} source={icons.medal}/>
            <Text variant="body" color="black">{ rating === null ? 0 : rating }%</Text>
        </View>
    )
}

export default Rating