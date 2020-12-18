import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { FoodDummy1 } from '../../assets'
import { Button, Header, ItemListFood, ItemValue } from '../../components' 

const OrderSummary = () => {
    return (
        <ScrollView>
            <Header 
                title="Payment" 
                subTitle="You deserve better meal" 
                onBack={() => {}} 
            />
            <View style={styles.content}>
                <Text style={styles.label} >Item Ordered</Text>
                <ItemListFood image={FoodDummy1} items="30" />
                <Text style={styles.label} >Details Transaction</Text>
                <ItemValue label="Mie Ayam" value="IDR 300.000" />
                <ItemValue label="Driver" value="IDR 50.000" />
                <ItemValue label="Tax 10%" value="IDR 30.000" />
                <ItemValue label="Total Price" value="IDR 380.000" />
            </View>

            <View style={styles.content}>
                <Text style={styles.label} >Deliver to:</Text>
                <ItemValue label="Name" value="Muhammad Rizki" />
                <ItemValue label="Phone No." value="085710412285" />
                <ItemValue label="Address" value="Kalibata Tengah V" />
                <ItemValue label="House No." value="12" />
                <ItemValue label="City" value="Jakarta" />
            </View>

            <View style={styles.button} >
                <Button text="Checkout Now" />
            </View>
        </ScrollView>
    )
}

export default OrderSummary

const styles = StyleSheet.create({
    content: {
        backgroundColor: 'white',
        paddingHorizontal: 24,
        paddingVertical: 16,
        marginTop: 24
    },
    label: {
        fontSize: 14,
        fontFamily: 'Poppins-Regular',
        color: '#020202',
        marginTop: 8
    },
    button: {
        paddingHorizontal: 24,
        marginBottom: 24
    }
})