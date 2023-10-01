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
    borderRadius: 9,
    width: 18,
    height: 18,
    borderColor: '#4EA8DE',
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkboxDone: {
    backgroundColor: '#5E60CE',
    borderColor: '#5E60CE',
  },
  checkboxHovered: {
    opacity: 0.2,
    backgroundColor: '#1E6F9F',
    borderColor: '#1E6F9F',
  },
  check: {
    fontSize: 14,
    color: '#FFF',
  },
  description: {
    fontSize: 14,
    color: '#F2F2F2',
    width: '80%',
  },
  descriptionDone: {
    color: '#808080',
    textDecorationLine: 'line-through',
  },
  trashHovered: {
    color: '#E25858',
  },
  button: {
    width: 32,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonHovered: {
    borderRadius: 5,
    backgroundColor: '#333333',
  },
  trash: {
    fontSize: 14,
    color: '#808080',
  },
})
