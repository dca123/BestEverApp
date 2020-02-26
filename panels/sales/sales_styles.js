import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    overflow: 'scroll',
    backgroundColor: '#EBF2FA'
  },
  daze_title:{
    fontSize: 12,
    color: '#4cbb17',
    fontStyle: 'italic',
    fontWeight: 'bold',
    marginTop: 40,
    textAlign: "center"
  },
  buyButton: {
   backgroundColor: '#379634',
   borderRadius: 2,
   color: 'white',
   fontSize: 20,
   fontWeight: 'bold',
   overflow: 'hidden',
   padding: 10,
   margin: 20,
   textAlign:'center',
 },
 map:{
   flex: 1
 },
calloutTitle:{
  fontSize: 15,
  fontWeight: 'bold'
  },
calloutDesc:{
  fontSize: 15
  }
})
