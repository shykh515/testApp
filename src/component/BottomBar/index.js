import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Feather from 'react-native-vector-icons/Feather'
import Octicons from 'react-native-vector-icons/Octicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import LinearGradient from 'react-native-linear-gradient';

const BottomBar = (props) => {

   

    const { homeIconColor, bookmarkIconColor, profileIconColor } = props;
    return (
        <LinearGradient start={{ x: 0, y: 0.5 }} end={{ x: 1, y: 0 }} colors={['#66412c', '#342740', '#66412c']} style={[styles.linearGradient]} >
            <View style={{
                backgroundColor: 'transparent',
                width: '100%',
                flexDirection: "row",
                justifyContent: 'space-between',
                alignItems: 'center',
            }}>
                <View style={{ height: 70, justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableOpacity >
                        <Feather name='home' size={30} color={homeIconColor ? "#0DA3FA" : "#ACAFC3"} />
                    </TouchableOpacity>
                </View>
                <View style={{ height: 70, justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableOpacity >
                        <Octicons name='bookmark' size={30} color={bookmarkIconColor ? "#0DA3FA" : "#ACAFC3"} />
                    </TouchableOpacity>
                </View>
                <View style={styles.homeIcon}>
                    <TouchableOpacity >
                        <MaterialCommunityIcons name='menu' size={30} color={bookmarkIconColor ? "#0DA3FA" : "#ACAFC3"} />
                    </TouchableOpacity>
                </View>
                <View style={{ height: 70, justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableOpacity >
                        <Octicons name='person' size={30} color={profileIconColor ? "#0DA3FA" : "#ACAFC3"} />
                    </TouchableOpacity>
                </View>
                <View style={{ height: 70, justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableOpacity >
                        <MaterialCommunityIcons name='logout' size={30} color="#ACAFC3" />
                    </TouchableOpacity>
                </View>
            </View>
        </LinearGradient>

    )
}

export default BottomBar

const styles = StyleSheet.create({
    linearGradient: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 60,
        borderRadius: 50,
        // marginVertical: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.39,
        shadowRadius: 4.65,
        elevation: 5,
        paddingHorizontal: 40,
        marginHorizontal: 20,
        marginBottom:10
    },
    homeIcon: { 
        height: 60, 
        width: 60, 
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor: '#e75c43', 
        borderRadius: 100 ,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.39,
        shadowRadius: 4.65,
        elevation: 5,
        position:'relative',
        top:-20
    }
})