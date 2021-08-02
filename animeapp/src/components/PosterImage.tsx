import React, { FC, useState } from 'react'
import { View, StyleSheet, Image, Modal, TouchableOpacity } from 'react-native'

import { icons } from '../../constants'
import { IconGlassButton } from '../components'

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
    bigImage: {
        width: '90%',
        height: '80%',
        borderRadius: 20,
    },
    modalCloseButton: {
        margin: 10
    },
    modalInner: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black"
    }
})

const PosterImage: FC<iProps> = ({ imageUrl }) => {
    const [modalVisible, setModalVisible] = useState<boolean>(false)

    const handleCloseModal = () => {
        setModalVisible(!modalVisible)
    }

    function UIModal() {
        return(
            <View>
                <Modal
                    animationType="fade"
                    visible={modalVisible}
                >
                    <View style={styles.modalInner}>
                        <Image source={{ uri: imageUrl }} style={styles.bigImage} />
                        <View style={styles.modalCloseButton}>
                            <IconGlassButton icon={icons.close} onPress={handleCloseModal}/>
                        </View>
                    </View>
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