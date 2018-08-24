import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    paddingTop: 10,
    overflow: 'scroll',
    backgroundColor: '#777171'
  },
  rank: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFEB3C'
  },
  rank_append: {
    fontSize: 24,
    color: '#FFEB3C'
  },
  card: {
    backgroundColor: '#483F40',

    marginLeft: 10,
    marginRight: 10,
    marginBottom: 20,
    borderRadius: 4,
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 10,
    paddingLeft: 10,

    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  crest: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10
  },

  f22: {
    fontSize: 22
  },
  f24: {
    fontSize: 24
  },
  bold: {
    fontWeight: 'bold'
  }
})
