import React, { FC, useState } from 'react'
import { View, StyleSheet, Image, Modal, TouchableOpacity, Text } from 'react-native'

interface iProps {
    imageUrl?: string
}

const styles = StyleSheet.create({
    imageContainer: {
        height: 280,
        width: 208
    },
    imageStyles: {
        width: '100%',
        height: '100%',
        borderRadius: 20
    },
    modalContainer: {
        flex: 1,
    },
    modalStyles: {
        backgroundColor: 'black'
    }
})

const PosterImage: FC<iProps> = ({ imageUrl }) => {
    const [modalVisible, setModalVisible] = useState<boolean>(false)

    const handleCloseModal = () => {

    }

    function UIModal() {
        return(
            <View style={styles.modalContainer}>
                <Modal
                    animationType="fade"
                    visible={modalVisible}
                    style={styles.modalStyles}
                >
                    <Text>Modal</Text>
                </Modal>
            </View>
        )
    }

    return(
        <View>
            <UIModal />
            <TouchableOpacity style={styles.imageContainer} onPress={() => setModalVisible(!modalVisible)}>
                <Image source={{ uri: imageUrl }} style={styles.imageStyles} />
            </TouchableOpacity>
        </View>
    )
}

export default PosterImage