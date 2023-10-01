import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  content: {
    marginRight: 14,
    marginLeft: 14,
  },
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
    borderRadius: 11,
    width: 22,
    height: 22,
    borderColor: '#4EA8DE',
    alignItems: 'center',
    justifyContent: 'center',
  },
  doneCheckbox: {
    borderWidth: 1,
    borderRadius: 11,
    width: 22,
    height: 22,
    backgroundColor: '#5E60CE',
    borderColor: '#5E60CE',
    alignItems: 'center',
    justifyContent: 'center',
  },
  description: {
    fontSize: 14,
    color: '#F2F2F2',
    width: '80%',
  },
  doneDescription: {
    fontSize: 14,
    color: '#808080',
    width: '80%',
    textDecorationLine: 'line-through',
  },
  trash: {
    fontSize: 16,
    color: '#808080'
  },
  check: {
    fontSize: 14,
    color: '#FFF',
  },
})
