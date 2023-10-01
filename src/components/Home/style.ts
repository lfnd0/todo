import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1A1A',
  },
  header: {
    height: 190,
    backgroundColor: '#0D0D0D',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 110.34,
    height: 32,
    resizeMode: 'stretch',
  },
  content: {
    paddingRight: 14,
    paddingLeft: 14,
  },
  form: {
    marginTop: -30,
    marginBottom: 30,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    padding: 16,
    fontSize: 16,
    marginRight: 6,
    borderRadius: 5,
    borderWidth: 1,
    backgroundColor: '#262626',
    borderColor: '#0D0D0D',
    color: '#FFF',
  },
  button: {
    width: 60,
    height: 60,
    borderRadius: 5,
    backgroundColor: '#1E6F9F',
    alignItems: 'center',
    justifyContent: 'center',
  },
  plus: {
    width: 16,
    height: 16,
    resizeMode: 'stretch',
  },
  status: {
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inline: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  create: {
    fontSize: 17,
    color: '#4EA8DE',
    fontWeight: 'bold',
  },
  done: {
    fontSize: 17,
    color: '#8284FA',
    fontWeight: 'bold',
  },
  counter: {
    marginLeft: 8,
    fontSize: 15,
    paddingVertical: 1,
    paddingHorizontal: 12,
    borderRadius: 10,
    color: '#FFF',
    fontWeight: 'bold',
    backgroundColor: '#333333',
  },
  empty: {
    borderTopWidth: 1.3,
    padding: 50,
    borderTopColor: '#333333',
    alignItems: 'center',
  },
  clipboard: {
    width: 56,
    height: 56,
    resizeMode: 'stretch',
  },
  info1: {
    marginTop: 22,
    fontSize: 14,
    color: '#808080',
    fontWeight: 'bold',
  },
  info2: {
    fontSize: 14,
    color: '#808080',
  },
})
