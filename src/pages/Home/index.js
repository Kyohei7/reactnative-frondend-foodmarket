import React from 'react'
import { Image, ScrollView, StyleSheet, Text, View, Dimensions } from 'react-native'
import { ProfileDummy } from '../../assets'
import { FoodCard, Gap, HomeTabSection } from '../../components'

const Home = () => {
    return (
        <View style={styles.page} >
            <View style={styles.profileContainer}>
                <View>
                    <Text style={styles.appName}>FoodMarket</Text>
                    <Text style={styles.title} >Let’s get some foods</Text>
                </View>
                    <Image source={ProfileDummy} style={styles.profile} />
            </View>
            <View>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    <View style={styles.foodCardContainer} >
                        <Gap width={24} />
                        <FoodCard />
                        <FoodCard />
                        <FoodCard />
                    </View>
                </ScrollView>  
            </View>
            <View style={styles.tabContainer}>
                <HomeTabSection />
            </View>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    page: {
        flex: 1
    },
    profileContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 24,
        paddingTop: 32,
        paddingBottom: 24,
        backgroundColor:'white'
    },
    foodCardContainer: {
        flexDirection: 'row',
        marginVertical: 12,
    },
    appName: {
        fontSize: 22,
        fontFamily: 'Poppins-Medium',
        color: '#020202'
    },
    title: {
        fontSize: 14,
        fontFamily: 'Poppins-Light',
        color: '#020202',
        
    },
    profile: {
        width: 50,
        height: 50,
        borderRadius: 8
    },
    tabContainer: {
        flex: 1
    }
})