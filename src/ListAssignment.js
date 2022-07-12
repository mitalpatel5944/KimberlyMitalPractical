import React, { useState } from "react";

import { View, StyleSheet, SafeAreaView, TextInput, FlatList, Text } from 'react-native'

import AntDesign from 'react-native-vector-icons/AntDesign'
import Entypo from 'react-native-vector-icons/Entypo'
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";

let obj = {
    name: '',
    email: '',
    pswd: '',
    visible: true,

}

let nameVaidate = { red: true, valid: 'Invalid Name' }
let emailVaidate = { red: true, valid: 'Invalid Email' }
let pswdVaidate = { red: true, valid: 'Invalid Password' }

var Emailpattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/; 

function ListAssignment() {

    let [list, setList] = useState('')
    let [data, setdata] = useState([])
    let [nmvalidate, setnmValidate] = useState([])
    let [emvalidate, setemValidate] = useState([])
    let [psvalidate, setpsValidate] = useState([])


    const changeVal = (item, filed, val, index) => {
        let a = { ...item, [filed]: val }
        data[index] = a
        setdata([...data])
    }

    function checkName(item) {
        if (item.name.length != 0) {
            return true
        } else {
            return false
        }
    }

    function checkEmail(item) {
        if (item.email.length != 0) {
            if(Emailpattern.test(item.email)){
                return true
            }else{
                return false
            }
           
        }else {
            return false
        }
    }

    function checkpswd(item) {
        if (item.pswd.length != 0) {
            return true
        } else {
            return false
        }
    }

    function checkInputs(item, index) {
      
            if (checkName(item)) {
                let ob = { red: false, valid: 'valid Name' }
                nmvalidate[index] = ob
                setnmValidate([...nmvalidate])
            }
        

            if (checkEmail(item)) {
                let ob = { red: false, valid: 'valid Email' }
                emvalidate[index] = ob
                setemValidate([...emvalidate])
            }
        
            if (checkpswd(item)) {
                let ob = { red: false, valid: 'valid Password' }
                psvalidate[index] = ob
                setpsValidate([...psvalidate])
            }

      
          
       

    }
    return (
        <SafeAreaView >
            <Text style={styles.title}>Assignment</Text>
            <View style={[styles.row, { padding: 10 }]}>
                <AntDesign
                    name={'minuscircle'}
                    size={24}
                    onPress={() => {
                        setList(list.substr(0, list.length - 1))
                        if (data.length == 1) {
                            setdata([])
                        } else {
                            let newarr = data.splice(0, data.length - 1)
                            setdata(newarr)

                        }
                        if (nmvalidate.length == 1) {
                            setnmValidate([])
                        } else {
                            let newarr = nmvalidate.splice(0, nmvalidate.length - 1)
                            setnmValidate(newarr)

                        }
                        if (emvalidate.length == 1) {
                            setemValidate([])
                        } else {
                            let newarr = emvalidate.splice(0, emvalidate.length - 1)
                            setemValidate(newarr)

                        }
                        if (psvalidate.length == 1) {
                            setpsValidate([])
                        } else {
                            let newarr = psvalidate.splice(0, psvalidate.length - 1)
                            setpsValidate(newarr)

                        }

                    }}
                />

                <AntDesign
                    name={'pluscircle'}
                    size={24}
                    onPress={() => {
                        setList(list.concat(list.length + 1))
                        let d = data
                        d.push(obj)
                        setdata(d)

                        let v = nmvalidate
                        v.push(nameVaidate)
                        setnmValidate(v)

                        let em = emvalidate
                        em.push(emailVaidate)
                        setemValidate(em)

                        let ps = psvalidate
                        ps.push(pswdVaidate)
                        setpsValidate(ps)
                    }}
                />

            </View>

            <View style={styles.lineView} />
            <FlatList
                data={data}
                extraData={data}
                ItemSeparatorComponent={() =>
                    <View style={styles.lineView} />
                }
                contentContainerStyle={{paddingBottom:80}}
                renderItem={({ item, index }) => {
                    console.log("item", item);
                    return (
                        <View>
                            <Text style={styles.subtitle}>Employee Form {index + 1}</Text>
                            <TextInput
                                value={item?.name}
                                placeholder={'Name'}
                                style={styles.input}
                                onChangeText={(val) => {
                                    changeVal(item, 'name', val, index)
                                }}
                            />
                            <Text style={{ color: nmvalidate[index]?.red ? 'red' : 'green', paddingLeft: 20 }}>
                                {nmvalidate[index]?.valid}
                            </Text>

                            <TextInput
                                value={item?.email}
                                placeholder={'Email'}
                                style={styles.input}
                                onChangeText={(val) => {
                                    changeVal(item, 'email', val, index)
                                }}
                            />

                            <Text style={{ color: emvalidate[index]?.red ? 'red' : 'green', paddingLeft: 20 }}>
                                {emvalidate[index]?.valid}
                            </Text>

                            <View style={{ flexDirection: 'row', width: '100%' }}>
                                <TextInput
                                    value={item?.pswd}
                                    placeholder={'Password'}
                                    style={[styles.input, { width: '85%' }]}
                                    secureTextEntry={item.visible}
                                    onChangeText={(val) => {
                                        changeVal(item, 'pswd', val, index)
                                    }}

                                />
                                <Entypo
                                    name={item.visible ? 'eye' : 'eye-with-line'}
                                    size={24}
                                    style={{ alignSelf: 'center' }}
                                    onPress={() => {
                                        changeVal(item, 'visible', !item.visible, index)
                                    }}
                                />
                            </View>
                            <Text style={{ color: psvalidate[index]?.red ? 'red' : 'green', paddingLeft: 20 }}>
                                {psvalidate[index]?.valid}
                            </Text>
                            <Pressable
                                style={styles.btn}
                                onPress={() => {
                                    checkInputs(item, index)
                                }}
                            >
                                <Text style={styles.btnTitle}>Submit</Text>
                            </Pressable>
                        </View>
                    )
                }}
            />

        </SafeAreaView>
    )

}

export default ListAssignment;

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    title: {
        alignSelf: 'center',
        fontSize: 24
    },
    subtitle: {
        fontSize: 18,
        padding: 10
    },
    btnTitle: {
        fontSize: 18,
        alignSelf: 'center',
        color: 'white'
    },
    lineView: {
        height: 1,
        backgroundColor: '#aaa'
    },
    input: {
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#eee',
        padding: 15,
        margin: 10
    },
    btn: {
        backgroundColor: 'red',
        padding: 15,
        borderRadius: 5,
        justifyContent: 'center',
        margin: 10
    }
})

