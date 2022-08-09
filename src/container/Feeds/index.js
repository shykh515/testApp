import { StyleSheet, Text, View , ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import {Header , Button , Input , FeedCard , BottomBar} from '../../component'
const Feeds = (props) => {
    const arr =[1 ,2 ,3 ,4,5,6,7,8,9,0]
  return (
    <View style={{flex:1,  backgroundColor: '#0b0016'}}>
        <Header title='Feed' menuICon/>
        <ScrollView>
            <View style={{marginHorizontal:20 , marginBottom:20}}>
                {arr.map((val)=>{
                    return(
                        <TouchableOpacity onPress={()=>props.navigation.navigate('Status')}>
                        <FeedCard 
                        name='Yeezy Boost 150 V2 Citrin'
                        subName='Yeezy Supply Us'
                        date='28 Sep 2021'
                        price='Us 10'
                        sunPrice='Us 1'
                        />
                        </TouchableOpacity>
                    )
                })}

            </View>
        </ScrollView>
        <BottomBar />
    </View>
  )
}

export default Feeds

const styles = StyleSheet.create({})