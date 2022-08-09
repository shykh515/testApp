import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Bookmark } from '../../assets/index'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native';
import { Colour } from '../../theme';
const ImagePost = (props) => {

    const { postImageSource, postTitle, postDescription, postImage ,bookMarkOnPress,bookMark,index} = props;
  
    const navigation = useNavigation()
    return (
        <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.navigate('PostDetails')} style={styles.cardView}>
            {postImageSource &&
                <Image style={styles.posterImage} source={postImageSource} resizeMode='cover' />
            }
            <View style={{ paddingHorizontal: 15, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                <View style={{ flex: 1 }}>
                    <Text style={[styles.heading, { marginTop: !postImageSource ? 10 : 5 }]}>{postTitle}</Text>
                    <Text style={[styles.Subheading, { marginBottom: !postImageSource ? 10 : 0 }]}>{postDescription}</Text>
                </View>
                <View>
                    <TouchableOpacity onPress={bookMarkOnPress} >
                        {/* <Image style={{ width: 25, height: 25, marginLeft: 5, marginTop: -40 }} source={Bookmark} resizeMode='center' /> */}
                        <Ionicons  name='bookmark-outline' size={25} color="#ACAFC3" style={{ marginTop: -40 }} />
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    cardView: {
        borderWidth: 2,
        borderColor: '#F3F4F6',
        borderRadius: 25,
        paddingBottom: 10,
        marginBottom: 40,
        overflow: 'hidden'
    },
    posterImage: {
        width: '100%',
        height: 200,
    },
    heading: {
        color: '#333647',
        fontSize: 17,
        fontWeight: 'bold',
    },
    Subheading: {
        color: '#7C82A1',
        fontSize: 13,
        marginTop: 5,
        letterSpacing: 0.2
    },

})

export default ImagePost
