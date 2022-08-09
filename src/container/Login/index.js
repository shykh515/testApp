import React from 'react';
import { View, Image} from 'react-native';
import { Button } from '../../component';
import { logo , discord } from '../../assets';

const Login = (props) => {


    const onLogin = () => {
      props.navigation.navigate('Home')
    }


    return (
        <View style={{ flex: 1, backgroundColor: '#0b0016' }}>
            <View style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', flex: 1 }}>
                <Image source={logo} resizeMode='contain' style={{ width: 200, height: 200 }} />
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center', }}>
                <Image source={discord} resizeMode='contain' style={{ width: 200, height: 100 }} />
                <Button btnViewStyle={{ paddingHorizontal: 60, marginBottom: 50 }} title="Login With Discord" btnonpress={() => onLogin()} />
            </View>
        </View>
    )
}

export default Login
