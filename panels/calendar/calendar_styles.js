import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    backgroundColor: '#EBF2FA',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    flex: 30,
    alignItems: 'stretch'
  },
  dayListContainer: {
    paddingBottom: 5,
    paddingTop: 15,
    width: 20,
    height: 60
  },
  weekText:{
    paddingTop: 25,
    paddingLeft: 10,
    width: 60
  },
  dayList: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
    alignItems: 'flex-start',
    flexGrow: 1
  },
  dayButton: {
    backgroundColor: '#568259',
    borderRadius: 50,
    marginLeft: 10,
    height: 40,
    width: 40,
    alignContent: 'center',
    justifyContent: 'center'
  },
  currentDateDisplay: {
    fontSize: 20,
    color: '#568259',
    marginBottom: 5,
    paddingLeft: 10,
    marginTop: 20
  },

  eventCard: {
    backgroundColor: '#379634',

    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    borderRadius: 4,
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 10,
    paddingLeft: 10,
    flexDirection: 'column',
    flexGrow: 1,
    justifyContent: 'space-between'
  },
  f24: {
    fontSize: 24
  },
  bold: {
    fontWeight: 'bold'
  }
})
