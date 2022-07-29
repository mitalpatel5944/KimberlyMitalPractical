import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Modal,
  ActivityIndicator
} from 'react-native';
import { ColorApp } from '../theme';

const Loader = props => {
  const {
    loading,
    ...attributes
  } = props;

  return (
    <Modal
      transparent={true}
      animationType={'none'}
      visible={loading}
      onRequestClose={() => { console.log('close modal') }}>
      <View style={styles.modalBackground}>
        <View style={styles.activityIndicatorWrapper}>
          <ActivityIndicator
            animating={loading} size={'large'} color={ColorApp.lightPink} />
          {/* <Write size={18} styles={{ alignSelf: 'center', paddingLeft: 45 }} familt={'regular'}>Loading</Write> */}
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
    // backgroundColor: '#00000040'
  },
  activityIndicatorWrapper: {
    // backgroundColor: '#00000040',
    backgroundColor: ColorApp.Black,
    height: 80,
    width: '25%',
    // margin: 15,
    // padding : 20,
    // paddingHorizontal: 15,
    borderRadius: 10,
    // flexDirection : 'row',
    // display: 'flex',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default Loader;