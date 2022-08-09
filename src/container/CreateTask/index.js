import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { Header, Input, Button ,BottomBar } from '../../component';
import DropDownPicker from 'react-native-dropdown-picker';
import LinearGradient from 'react-native-linear-gradient';

const CreateTask = (props) => {

    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        { label: 'Male', value: 'Male' },
        { label: 'Female', value: 'Female' },
        { label: 'Other', value: 'Other' },
    ]);
    const [open1, setOpen1] = useState(false);
    const [value1, setValue1] = useState(null);
    const [items1, setItems1] = useState([
        { label: 'Male', value: 'Male' },
        { label: 'Female', value: 'Female' },
        { label: 'Other', value: 'Other' },
    ]);
    const [open2, setOpen2] = useState(false);
    const [value2, setValue2] = useState(null);
    const [items2, setItems2] = useState([
        { label: 'Male', value: 'Male' },
        { label: 'Female', value: 'Female' },
        { label: 'Other', value: 'Other' },
    ]);
    const [open3, setOpen3] = useState(false);
    const [value3, setValue3] = useState(null);
    const [items3, setItems3] = useState([
        { label: 'Male', value: 'Male' },
        { label: 'Female', value: 'Female' },
        { label: 'Other', value: 'Other' },
    ]);
    return (
        <View style={{ flex: 1, backgroundColor: '#0b0016' }}>
            <Header title='Create Task' />
            <ScrollView>
                <View style={{ marginHorizontal: 20 }}>
                    <View style={{ flexDirection: 'row', marginBottom: 50  , marginTop:60 , justifyContent:'space-between' }}>
                        <View style={{ width: '47%' }}>
                            <Text style={{ color: '#fff', fontSize: 16, paddingVertical: 5 }}>Store</Text>
                            <LinearGradient colors={['#66412c', '#342740', '#66412c']} style={styles.linearGradient} start={{ x: 0, y: 0.5 }} end={{ x: 1, y: 0 }}>
                                <DropDownPicker
                                    scrollViewProps={DropDownPicker.setListMode('SCROLLVIEW')}
                                    open={open}
                                    value={value}
                                    items={items}
                                    setOpen={setOpen}
                                    setValue={setValue}
                                    setItems={setItems}
                                    autoScroll={true}
                                    placeholder="Select Store"
                                    placeholderStyle={{ color: '#fff' }}
                                    showArrowIcon={true}
                                    max={3}
                                    style={styles.DropDownStyle}
                                    containerStyle={styles.containerStyle}
                                    labelStyle={{ color: '#fff' }}
                                    arrowIconContainerStyle={styles.arrowIconContainerStyle}
                                />
                            </LinearGradient>
                        </View>
                        <View style={{ width: '47%' }}>
                            <Text style={{ color: '#fff', fontSize: 16, paddingVertical: 5 }}>Site</Text>
                            <LinearGradient colors={['#66412c', '#342740', '#66412c']} style={styles.linearGradient} start={{ x: 0, y: 0.5 }} end={{ x: 1, y: 0 }}>
                                <DropDownPicker
                                    scrollViewProps={DropDownPicker.setListMode('SCROLLVIEW')}
                                    open={open1}
                                    value={value1}
                                    items={items1}
                                    setOpen={setOpen1}
                                    setValue={setValue1}
                                    setItems={setItems1}
                                    autoScroll={true}
                                    placeholder="Select Site"
                                    placeholderStyle={{ color: '#fff' }}
                                    showArrowIcon={true}
                                    max={3}
                                    style={styles.DropDownStyle}
                                    containerStyle={styles.containerStyle}
                                    labelStyle={{ color: '#fff' }}
                                    arrowIconContainerStyle={styles.arrowIconContainerStyle}
                                />
                            </LinearGradient>
                        </View>
                    </View>
                    <View>
                        <Text style={{ fontSize: 16, fontWeight: 'normal', color: '#fff', paddingVertical: 5 }}>Product</Text>
                        <Input placaeholdertitle='Keyword or URL' />
                    </View>
                    <View style={{ flexDirection: 'row', marginBottom: 30  , marginTop:50 , justifyContent:'space-between' }}>
                        <View style={{ width: '47%' }}>
                            <Text style={{ color: '#fff', fontSize: 16, paddingVertical: 5 }}>Profile</Text>
                            <LinearGradient colors={['#66412c', '#342740', '#66412c']} style={styles.linearGradient} start={{ x: 0, y: 0.5 }} end={{ x: 1, y: 0 }}>
                                <DropDownPicker
                                    scrollViewProps={DropDownPicker.setListMode('SCROLLVIEW')}
                                    open={open2}
                                    value={value2}
                                    items={items2}
                                    setOpen={setOpen2}
                                    setValue={setValue2}
                                    setItems={setItems2}
                                    autoScroll={true}
                                    placeholder="Select Profile"
                                    placeholderStyle={{ color: '#fff' }}
                                    showArrowIcon={true}
                                    max={3}
                                    style={styles.DropDownStyle}
                                    containerStyle={styles.containerStyle}
                                    labelStyle={{ color: '#fff' }}
                                    arrowIconContainerStyle={styles.arrowIconContainerStyle}
                                />
                            </LinearGradient>
                        </View>
                        <View style={{ width: '47%' }}>
                            <Text style={{ color: '#fff', fontSize: 16, paddingVertical: 5 }}>Proxies</Text>
                            <LinearGradient colors={['#66412c', '#342740', '#66412c']} style={styles.linearGradient} start={{ x: 0, y: 0.5 }} end={{ x: 1, y: 0 }}>
                                <DropDownPicker
                                    scrollViewProps={DropDownPicker.setListMode('SCROLLVIEW')}
                                    open={open3}
                                    value={value3}
                                    items={items3}
                                    setOpen={setOpen3}
                                    setValue={setValue3}
                                    setItems={setItems3}
                                    autoScroll={true}
                                    placeholder="Select Proxies"
                                    placeholderStyle={{ color: '#fff' }}
                                    showArrowIcon={true}
                                    max={3}
                                    style={styles.DropDownStyle}
                                    containerStyle={styles.containerStyle}
                                    labelStyle={{ color: '#fff' }}
                                    arrowIconContainerStyle={styles.arrowIconContainerStyle}
                                />
                            </LinearGradient>

                        </View>
                    </View>
                    <View style={{ marginVertical: 30 }}><Button title='Create Task' btntxtstyle={{ color: '#fff' }} btnonpress={()=>props.navigation.navigate('Feeds')} /></View>
                </View>
            </ScrollView>
            <BottomBar />
        </View>
    )
}

export default CreateTask

const styles = StyleSheet.create({
    DropDownStyle: {
        backgroundColor: 'transparent',
        borderWidth: 0,
    },
    containerStyle: {
        width: '100%',
        borderWidth: 0,
    },
    arrowIconContainerStyle: {
        // backgroundColor: '#010394',
        height: 50,
        width: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: -10,
        marginVertical: -5,
        color: '#fff'
    },
    linearGradient: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        borderRadius: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.39,
        shadowRadius: 4.65,
        elevation: 5,

    },
})