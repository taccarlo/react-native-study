import { StyleSheet } from 'react-native';
export default StyleSheet.create({
    container: {
      flex: 1,
    },
    header: {
      backgroundColor: '#E91E63',
      alignItems: 'center',
      justifyContent: 'center',
      borderBottomWidth: 10,
      borderBottomColor: '#ddd',
    },
    headerText:{
      color: 'white',
      fontSize:18,
      padding:26,
    },
    scrollContainer:{
      flex:1,
      marginBottom:100,
    },
    footer:{
      position: 'absolute',
      bottom: 0,
      left:0,
      right: 0,
      zIndex: 10,
    },
    textInput:{
      alignSelf: 'stretch',
      color:'#fff',
      padding: 20,
      backgroundColor: '#252525',
      borderTopWidth: 2,
      borderTopColor: '#ededed',
    },
    addButtonFixed:{
      zIndex: 11,
      backgroundColor: '#E91E63',
      width: 90,
      height: 90,
      borderRadius:50,
      alignItems:'center',
      justifyContent:'center',
      elevation:8,
    },
    buttonView:{
      position: 'absolute',
      zIndex: 11,
      right:20,
      bottom: 90,
      elevation:8,
    },
    addButtonText:{
      color:'#fff',
      fontSize:18,
    },
  });
  