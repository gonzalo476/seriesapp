import React, { FC } from 'react'
import { StyleSheet } from 'react-native'
import { View, Image, Dimensions } from 'react-native'

import { Text } from '../../constants'
const { width } = Dimensions.get("window")

interface iProps {
    children?: any
    image?: any,
    isCurrent?: boolean
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: '100%',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    imageContainer: {
        height: 143,
        width: '100%',
    },
    cardContainer: {
        backgroundColor: 'white',
        borderRadius: 20,
        width: width / 1.6,
        height: 345,
        margin: 5
    },
    currentContainer: {
        backgroundColor: 'rgba(255,255,255,0.30)',
        borderWidth: 1,
        borderColor: 'rgba(128,128,128,0.26)',
        zIndex: 10,
        borderRadius: 20,
        position: 'absolute',
        paddingVertical: 5,
        paddingHorizontal: 10,
        top: 10,
        left: 10,
    }
})

const ListCard: FC<iProps> = ({ image, children, isCurrent }) => {
    return (
        <View style={styles.cardContainer}>
            {isCurrent ? (
                <View style={styles.currentContainer}>
                    <Text variant="body" color="gray">
                        Current
                    </Text>
                </View>
            ) : undefined }
            <View style={styles.imageContainer}>
                <Image source={image} style={styles.image} resizeMode="cover" />
            </View>
            { children }
        </View>
    )
}

export default ListCard