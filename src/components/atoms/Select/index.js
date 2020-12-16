import React from 'react'
import {Picker} from '@react-native-picker/picker';
import { StyleSheet, Text, View } from 'react-native';

const Select = () => {
    return(
        <View>
            <Text style={styles.label}> City </Text>
            <View style={styles.input} >
            <Picker>
                <Picker.Item label="Jakarta" value="jakarta" />
                <Picker.Item label="Bandung" value="bandung" />
            </Picker>
            </View>
        </View>
    )
}

export default Select

const styles = StyleSheet.create({
    label: {
        fontSize: 16,
        fontFamily: 'Poppins-Regular',
        color: '#020202'
    },
    input: {
        borderRadius: 8,
        borderWidth: 1,
        paddingHorizontal: 2,
        paddingVertical: 0,
        borderColor: '#020202'
    }
})