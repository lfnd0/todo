import { Text, TouchableOpacity, View } from 'react-native'
import { styles } from './styles'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { FontAwesome5 } from '@expo/vector-icons';
import { useState } from 'react';

type Props = {
  description: string
  isDone: boolean
  done: () => void
  remove: () => void
}

export function Task({ description, isDone, done, remove }: Props) {
  const [isHovered, setIsHovered] = useState(false)

  function handlePressIn() {
    setIsHovered(true);
  };

  function handlePressOut() {
    setIsHovered(false);
  };

  return (
    <View style={styles.content}>
      <View style={styles.tasks}>
        <TouchableOpacity
          style={[styles.checkbox, isDone ? styles.doneCheckbox : null]}
          onPress={done}
        >
          <MaterialCommunityIcons name="check" style={isDone ? styles.check : { display: 'none' }} />
        </TouchableOpacity>

        <Text style={[styles.description, isDone ? styles.doneDescription : null]}>
          {description}
        </Text>

        <TouchableOpacity
          onPress={remove}
          onPressIn={handlePressIn}
          onPressOut={handlePressOut}
          style={[styles.button, isHovered ? styles.buttonHovered : null]}
        >
          <FontAwesome5
            name="trash-alt"
            style={[ styles.trash, isHovered ? styles.trashHovered : null]}
          />
        </TouchableOpacity>
      </View>
    </View >
  )
}
