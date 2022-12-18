import React from 'react'
import { View } from 'react-native'
import { Modal, ModalContent, ModalTitle } from 'react-native-modals'
import DefaultText from '../DefaultText'
import { colors } from '../../utils/colors'
export default function HelpMovimentModal ({showModal, closeModal, moviment}) {
    if (moviment) {
        return (
            <Modal
                style={{paddingHorizontal: 20}}
                swipeDirection={['up', 'down']}
                visible={showModal}
                onTouchOutside={closeModal}
                onSwipeOut ={closeModal}>
                <ModalTitle title={moviment.helpTexts.title} textStyle={{color: colors.primary}} />
                <ModalContent>
                    <DefaultText style={{color: colors.fontDarkGray}}>
                        {"\t\t\t\t" + moviment.helpTexts.first}
                    </DefaultText>
                    { moviment.helpTexts.second ? 
                        <View style={{marginTop: 12}}>
                            <DefaultText style={{color: colors.fontDarkGray}}>
                                {"\t\t\t\t" + moviment.helpTexts.second}
                            </DefaultText>
                        </View>: null
                    }
                </ModalContent>
            </Modal>
    )} return null
}
