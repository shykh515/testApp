import React from 'react';
import { View, Image, Dimensions, Text , ScrollView } from 'react-native';
import { Button, Button2, Input, Header , BottomBar } from '../../component';
import { logo } from '../../assets';
const { height, width } = Dimensions.get('screen')

const Home = (props) => {

  return (
    <View style={{flex:1,  backgroundColor: '#0b0016'}}>
      <Header
        title='Create Task'
        LeftIcon={true}
      />
      <ScrollView>
      <View style={{paddingHorizontal: 40 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 40 ,marginVertical:50}}>
          <View>
            <Text style={{ fontWeight: 'bold', textAlign: 'center', color: '#FFF', fontSize: 25 }}>Hi</Text>
            <Text style={{ fontWeight: 'bold', textAlign: 'center', color: '#FFF', fontSize: 16 }}>xxxx</Text>
          </View>

          <View style={{}}>
            <Image source={logo} resizeMode='contain' style={{ width: 100, height: 100 }} />
          </View>
        </View>

        <View style={{marginVertical:50}}>
          <Input placaeholdertitle='**** ***** *****' />
        </View>

        <View style={{ justifyContent: 'center', alignItems: 'center',marginTop:60 }}>
          <Button2 btnViewStyle={{ width: 250 }} title="Reset Key" btnonpress={() => { }} />
          <Button btnViewStyle={{ width: 250 }} title="Start All Tasks" btnonpress={() => {props.navigation.navigate('CreateTask') }} />
          <Button2 btnViewStyle={{ width: 250 }} title="Stop All Tasks" btnonpress={() => { }} />
        </View>
      </View>
      </ScrollView>
      <BottomBar />
    </View>
  )
}

export default Home
