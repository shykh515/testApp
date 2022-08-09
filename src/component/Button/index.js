import React from "react";
import LinearGradient from 'react-native-linear-gradient';
import { Text, TouchableOpacity, StyleSheet, Dimensions } from "react-native";

const Button = (props) => {
    const { title, btnViewStyle, disabled, btntxtstyle, btnonpress } = props
    return (
        <TouchableOpacity disabled={disabled} activeOpacity={0.7} style={[styles.linearGradient, btnViewStyle]} onPress={btnonpress}>
        <LinearGradient colors={['#f47646', '#e55843', '#da4241']} style={[styles.linearGradient, btnViewStyle]} >
            <Text style={[styles.btntxt, btntxtstyle]}>
                {title}
            </Text>
        </LinearGradient>
        </TouchableOpacity>

    )
}

const styles = StyleSheet.create({
    linearGradient: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 60,
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
        paddingHorizontal: 40,
        
    },
    btntxt: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#000",
        textTransform: 'capitalize'
    },
})

export default Button