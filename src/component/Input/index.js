import React, { useRef } from "react";
import { useState } from "react";
import { View, Image, TextInput, Text, TouchableOpacity } from "react-native";
import styles from "./styles";
import Feather from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';


const Input = (props) => {
  const { icon,
    ViewStyle,
    inputEyeIcon,
    nonePassword,
    inputEyeIconStyle,
    showPassword,
    showPass,
    iconStyle,
    inputStyle,
    placaeholdertitle,
    secureTextEntry,
    maxLength,
    keyboardType,
    userRef,
    value,
    onChangeText,
    err,
    textContentType,
    MainView
  } = props;

  const [isFocused, setIsFoused] = useState(false);

  return (
    <View>
      <LinearGradient style={[styles.MainView, MainView]} start={{ x: 0, y: 0.5 }} end={{ x: 1, y: 0 }} colors={['#66412c', '#342740', '#66412c']}>
        <View style={[styles.child_1, ViewStyle]}>
          {/* <View style={{ height: 50, width: 50, justifyContent: 'center', alignItems: 'center' }}>
            <Image resizeMode='contain' style={[styles.icon, iconStyle]} source={icon} />
          </View> */}

          <TextInput
            style={[styles.input, inputStyle]}
            placeholderTextColor="#7C82A1"
            placeholder={placaeholdertitle}
            secureTextEntry={secureTextEntry}
            keyboardType={keyboardType}
            value={value}
            onChangeText={onChangeText}
            maxLength={maxLength}
            onFocus={() => setIsFoused(true)}
            onBlur={() => setIsFoused(false)}
            textContentType={textContentType}
          />

          {inputEyeIcon ? (
            <View>
              {showPass ? (
                <TouchableOpacity onPress={nonePassword}>
                  <Feather
                    name="eye-off"
                    style={[styles.inputEyeIconStyle, inputEyeIconStyle]}
                  />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity onPress={showPassword}>
                  <Feather
                    name="eye"
                    style={[styles.inputEyeIconStyle, inputEyeIconStyle]}
                  />
                </TouchableOpacity>
              )}
            </View>
          ) : <></>}
        </View>

        {err ? <><Text style={{ color: err ? "red" : "", fontSize: 10, paddingLeft: 10 }}>{err}</Text></> : <></>}
      </LinearGradient >
    </View>

  )
}

export default Input;