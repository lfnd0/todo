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
    marginRight: 14,
    marginLeft: 14,
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
  buttonHovered: {
    backgroundColor: '#4EA8DE',
  },
  plus: {
    fontSize: 17,
    color: '#FFF',
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
    fontSize: 16,
    color: '#4EA8DE',
    fontWeight: 'bold',
  },
  done: {
    fontSize: 16,
    color: '#8284FA',
    fontWeight: 'bold',
  },
  counter: {
    marginLeft: 8,
    fontSize: 14,
    paddingVertical: 1,
    paddingHorizontal: 12,
    borderRadius: 10,
    color: '#FFF',
    fontWeight: 'bold',
    backgroundColor: '#333333',
  },
})
