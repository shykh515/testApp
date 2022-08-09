import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React from 'react';
import {Header, Button, BottomBar} from '../../component';
import LinearGradient from 'react-native-linear-gradient';
import {Icon} from 'react-native-elements';
import {LineChart} from 'react-native-chart-kit';
const {width} = Dimensions.get('screen');
const Status = () => {
  const arr = [
    {
      name: 'Total',
      backgroundColor: '#c4503c',
    },
    {
      name: 'Week',
      backgroundColor: 'rgba(51, 38, 65, 1)',
    },
    {
      name: 'Month',
      backgroundColor: '#332641',
    },
    {
      name: 'Year',
      backgroundColor: '#332641',
    },
  ];
  const data = {
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
      },
    ],
  };
  const chartConfig = {
    backgroundGradientFrom: '#1E2923',
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: '#08130D',
    backgroundGradientToOpacity: 0,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  }
  const data1 = {
    datasets: [
      {
        data: [100, 120, 100, 90, 95, 70 , 60 , 65 , 50],
      },
    ],
  };
  const chartConfig1 = {
    backgroundGradientFrom: '#1E2923',
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: '#08130D',
    backgroundGradientToOpacity: 0,
    color: (opacity = 1) => `rgba(240, 10, 10, ${opacity})`,
  }
  return (
    <View style={{flex: 1, backgroundColor: '#0b0016'}}>
      <Header title="Status" />
      <ScrollView>
        <View style={{margin: 20}}>
          <Text style={styles.header}>
            Tool
          </Text>
          <View style={styles.chart}>
            <LinearGradient start={{x: 0, y: 0.5}} end={{x: 1, y: 0}} colors={['#66412c', '#342740', '#66412c']} style={[styles.linearGradient]}>
                <View style={{marginLeft:-30}}>
                    <LineChart
                        data={data}
                        width={180}
                        height={180}
                        chartConfig={chartConfig}
                        withDots={false}
                        withInnerLines={false}
                        withOuterLines={false}
                        withHorizontalLabels={false}
                    />
                </View>
                <Text style={styles.chartNum}>14</Text>
                <Text style={styles.chartNum}>Success</Text>
            </LinearGradient>
            <LinearGradient start={{x: 0, y: 0.5}}  end={{x: 1, y: 0}}colors={['#66412c', '#342740', '#66412c']} style={[styles.linearGradient]}>
                 <View style={{marginLeft:-30}}>
                    <LineChart
                        data={data1}
                        width={180}
                        height={180}
                        chartConfig={chartConfig1}
                        withDots={false}
                        withInnerLines={false}
                        withOuterLines={false}
                        withHorizontalLabels={false}
                    />
                </View>
                <Text style={styles.chartNum}>24</Text>
                <Text style={styles.chartNum}>Declines</Text>
              </LinearGradient>
          </View>
          <View style={styles.btnView}>
            {arr.map(val => {
              return (
                <TouchableOpacity style={[styles.btnTouchableOpacity , {backgroundColor: val.backgroundColor,}]}>
                  <Text style={{color: '#fff'}}>{val.name}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
          <View
            style={styles.lockView}>
            <View style={styles.iconView}>
              <Icon name="lock" type="feather" color="#FFF" size={32} />
            </View>
            <View style={{marginLeft: 20}}>
              <Text style={styles.lockTxt}>
                01
              </Text>
              <Text style={styles.lockTxt}>
                Check Out
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <BottomBar />
    </View>
  );
};

export default Status;

const styles = StyleSheet.create({
  linearGradient: {
    alignItems: 'center',
    // justifyContent: 'center',
    height: 250,
    borderRadius: 15,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.39,
    shadowRadius: 4.65,
    elevation: 5,
    // paddingHorizontal: 40,
    width: '48%',
  },
  header:{
    fontSize: 18,
    fontWeight: 'normal',
    color: '#fff',
    marginVertical: 20,
    marginLeft: 30,
  },
  chart:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  chartNum:{
    color:'#fff' ,
     fontSize:18
    },
    btnView:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 40,
      },
    btnTouchableOpacity:{
        
        width: 80,
        height: 35,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
      },
    lockView:{
        flexDirection: 'row',
         marginVertical: 50, 
         marginLeft: 50
        },
    iconView:{
        borderRadius: 100,
        width: 80,
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#db6141',
        borderWidth: 1,
    },
    lockTxt:{color: '#fff', fontSize: 25, fontWeight: 'bold'}
});
