import { StyleSheet } from 'react-native';
import Colors from '../../theme/Colour';

const styles = StyleSheet.create({
    headertitle: {
        fontSize: 28,
        fontWeight: 'bold',
        color: Colors.Blue,
        fontStyle: 'italic',
        letterSpacing: 1
    },
    header_child1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 100,
        width: '100%'
    },
    header_child2: {
        height: 40,
        width: 75,
        backgroundColor: Colors.lightwhite,
        borderRadius: 100,
        marginHorizontal: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputtext: {
        fontSize: 17,
        paddingLeft: 15,
        flex: 1,
        color: Colors.secondTextColor
    },
    header_child3: {
        flexDirection: 'row',
        backgroundColor: Colors.lightwhite,
        alignItems: 'center',
        paddingHorizontal: 20,
        marginVertical: 20,
        borderRadius: 10,
    },
    posterImage: {
        width: '100%',
        height: 200,
    },
    heading: {
        color: Colors.HeadingColor,
        fontSize: 17,
        fontWeight: 'bold',
        marginTop: 5
    },
    Subheading: {
        color: Colors.secondTextColor,
        fontSize: 13,
        marginTop: 5
    },
    cardView: {
        borderWidth: 2,
        borderColor: Colors.lightwhite,
        borderRadius: 25,
        paddingBottom: 10,
        marginHorizontal: 20,
        marginBottom: 20,
        overflow: 'hidden'
    },
    Child_1: {
        flex: 1,
        backgroundColor: Colors.White,
        paddingHorizontal: 20
    },
    mapView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 30,
    },
    ModalView: {
        position: 'absolute',
        backgroundColor: Colors.White,
        top: 40,
        right: 0,
        width: '95%',
        height: 410,
        borderRadius: 20
    },
    Modaltitle: {
        backgroundColor: Colors.BlueColor,
        height: 30,
        flexDirection: 'row',
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flex: 1,
    },
    modalheadertitle: {
        textAlign: 'center',
        color: Colors.White,
        fontSize: 22,
    },
    child_2: {
        flexDirection: 'row',
        padding: 10,
        borderBottomColor: '#C4C4C4',
        borderBottomWidth: 0.5,
        alignItems: 'center'
    },
    closebtn: {
        alignItems: 'flex-end',
        marginRight: -70,
        marginTop:-15,
    },
    flatlistView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 1,
    },
    flatlistimage: {
        width: 40,
        height: 40,
        borderRadius: 100,
        borderColor: '#C4C4C4'
    },
    notificationtitle: {
        color: Colors.blackdark,
        fontSize: 13,
        fontWeight: 'bold',
    },
    view: {
        color: Colors.BlueColor,
        fontWeight: 'bold',
        padding: 5,
        fontSize: 12,
        textAlign: 'right'
    },
    date: {
        color: Colors.greyprimary,
        fontSize: 10,
        textAlign: 'right'
    },
    viewall: {
        color: Colors.greyprimary,
        textAlign: 'center',
        marginVertical: 10
    }
})

export default styles;