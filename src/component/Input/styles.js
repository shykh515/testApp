import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    child_1: {
        flexDirection: "row",
        alignItems: "center",
    },
    input: {
        flex: 1,
        color: "#FFF",
        height: 60,
        fontSize: 17,
        paddingLeft:20
    },
    icon: {
        width: 23,
        height: 23,
    },
    inputEyeIconStyle: {
        color: '#9F9D9D',
        fontSize: 17,
        textAlign: 'center',
        width: 30,
    },
    MainView: {
        opacity: 0.5,
        borderRadius: 10,
        height: 55,
    },
})

export default styles;