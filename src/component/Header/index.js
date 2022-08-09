import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Dimensions, SafeAreaView } from 'react-native';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
const { width, height } = Dimensions.get('screen')
const CustomHeader = props => {
    const {
        leftIconPress,
        title,
        titleStyle,
        menuICon
    } = props;
    
    const navigation = useNavigation()
    return (
        <SafeAreaView >
            <View style={styles.headerView}>
                <TouchableOpacity onPress={()=>navigation.goBack()}>
                    <Icon name='arrow-back-ios' type='MaterialIcons' color='#FFF' size={22} />
                </TouchableOpacity>
                <View style={styles.headerTitle}>
                    <Text numberOfLines={1} style={[styles.title, titleStyle]}>{title} </Text>
                </View>
                {menuICon && 
                <TouchableOpacity>
                  <Icon name='menu-open' type='MaterialIcons' color='#FFF' size={30} />
                </TouchableOpacity>
                }
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    headerView: {
        height: 80,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 25,
        backgroundColor: '#0b0016',
    },
    headerTitle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomColor: 'rgba(25 , 25 , 25 ,0.9)',
        borderBottomWidth: 2,
        marginRight: 40,
        marginLeft:20
    },
    title: {
        fontSize: 24,
        color: '#FFF',
        fontWeight: '600',
        marginVertical: 20
        // textAlign:'center'

    },
});

export default CustomHeader;
