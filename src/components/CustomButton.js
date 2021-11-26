import React from 'react';
import { View, Text, Image } from 'react-native';
import AwesomeButton from 'react-native-really-awesome-button';
import CustomTextComponent from './CustomTextComponent';

export default function CustomButton({
    text, width, height, br, bgColor, shadowColor, fs, fw, textColor, backgroundDarker, onPress,
    raiseLevel, icon, tintColor, marginTop
}) {
    return (
        <AwesomeButton width={width} height={height} borderRadius={br} backgroundColor={bgColor}
            backgroundShadow={shadowColor} activeOpacity={0.5} backgroundDarker={backgroundDarker}
            onPress={onPress} raiseLevel={raiseLevel ? raiseLevel : 3}
        >
            <View style={{
                flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: marginTop
            }}>
                {icon ? <Image
                    source={icon}
                    style={{
                        width: 13, height: 13,
                        tintColor: tintColor,
                    }}
                /> : <></>}
                {icon ? <View style={{ width: 8 }} /> : <></>}
                <CustomTextComponent
                    text={text} fs={fs} fw={fw} textColor={textColor}
                />
            </View>
        </AwesomeButton>
    )
}
