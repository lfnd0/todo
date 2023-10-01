import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  tasks: {
    borderRadius: 5,
    borderWidth: 1,
    padding: 12,
    marginBottom: 10,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#262626',
    borderColor: '#333333',
  },
  checkbox: {
    borderWidth: 1,
    borderRadius: 10,
    width: 20,
    height: 20,
    borderColor: '#4EA8DE',
  },
  description: {
    fontSize: 14,
    color: '#F2F2F2',
    width: '80%',
  },
  trash: {
    width: 12.48,
    height: 14,
    resizeMode: 'stretch',
  }
})
