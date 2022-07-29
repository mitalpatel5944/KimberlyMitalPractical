import { StyleSheet } from 'react-native';
import { Fonts, size } from '../theme';

const styles = StyleSheet.create({
  yearTextContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    backgroundColor: 'white',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    marginHorizontal: 5,
  },
  yearTextStyle: {
    fontSize: 15,
    color: 'black',
  },
  datePickerContainer: {
    height: 60,
    marginHorizontal: 5,
    backgroundColor: 'white',
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  timePickerContainer: {
    height: 60,
    marginHorizontal: 5,
    backgroundColor: '#1de9b6',
    marginTop: 10,
    borderRadius: 5,
  },
  flatListStyle: {
    marginHorizontal: 10,
    // paddingBottom :20
  },
  itemViewStyle: {
    alignSelf: 'center',
    alignItems: 'center',
    // justifyContent: 'center',
    // paddingVertical: 5,
    // height:30,
    paddingHorizontal: 10,
    marginHorizontal: 5,
    borderRadius:10
  },
  textSelected: {
    color: '#f44336',
    fontFamily : Fonts.ZenBold,
    fontSize : size.f24,
    lineHeight:30,
    alignSelf:'center'
  },
  textUnSelected: {
    color: '#4A4A4A',
    fontFamily : Fonts.ZenMedium,
    fontSize : size.f24,
    lineHeight:30,
    alignSelf:'center'

  },
});

export default styles;
