import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
import { Icon } from 'react-native-elements';

const FeedCard = (props) => {
    const {name , subName , date , price , sunPrice} = props
    return (
        <LinearGradient start={{ x: 0, y: 0.5 }} end={{ x: 1, y: 0 }} colors={['#66412c', '#342740', '#66412c']} style={styles.linearGradient} >
            <View>
                <Text style={{ fontSize: 14, color: '#fff' }}>{name}</Text>
                <Text style={styles.heading}>{subName}</Text>
                <View>
                    <View style={{ flexDirection: 'row', marginVertical: 2 }}>
                        <Icon name='calendar' type='antdesign' color='#e85d43' size={15} />
                        <Text style={styles.subHeading}>{date}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginVertical: 2 }}>
                        <Icon name='checkcircleo' type='antdesign' color='#e85d43' size={15} />
                        <Text style={styles.subHeading}>{price}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginVertical: 2 }}>
                        <Icon name='checkcircleo' type='antdesign' color='#e85d43' size={15} />
                        <Text style={styles.subHeading}>{sunPrice}</Text>
                    </View>
                </View>
            </View>
            <View style={styles.feedImage}>
                <Image source={{ uri: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c2hvZXN8ZW58MHx8MHx8&w=1000&q=80' }} style={{ width: 110, height: 110, borderRadius: 10 }} />
            </View>
        </LinearGradient>
    )
}

export default FeedCard

const styles = StyleSheet.create({
    linearGradient: {
        borderRadius: 15,
        marginVertical: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.39,
        shadowRadius: 4.65,
        elevation: 5,
        paddingVertical: 10,
        paddingHorizontal: 15,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    heading: { fontSize: 14, fontWeight: 'bold', color: '#fff', marginBottom: 10 },
    subHeading: { fontSize: 12, fontWeight: 'normal', color: '#fff', marginLeft: 5 },
    feedImage:{ width: 110, height: 110, justifyContent: 'center', alignItems: 'center' }
})