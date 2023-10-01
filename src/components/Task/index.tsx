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
  const [isHoveredCheckbox, setIsHoveredCheckbox] = useState(false)
  const [isHoveredTrash, setIsHoveredTrash] = useState(false)

  function handlePressInCheckbox() {
    setIsHoveredCheckbox(true)
  }

  function handlePressOutCheckbox() {
    setIsHoveredCheckbox(false)
  }

  function handlePressInTrash() {
    setIsHoveredTrash(true)
  }

  function handlePressOutTrash() {
    setIsHoveredTrash(false)
  }

  return (
    <View style={styles.content}>
      <View style={styles.tasks}>
        <TouchableOpacity
          onPressIn={handlePressInCheckbox}
          onPressOut={handlePressOutCheckbox}
          style={[styles.checkbox, isHoveredCheckbox ? styles.checkboxHovered : null, isDone ? styles.checkboxDone : null]}
          onPress={done}
        >
          <MaterialCommunityIcons name="check" style={isDone ? styles.check : { display: 'none' }} />
        </TouchableOpacity>

        <Text style={[styles.description, isDone ? styles.descriptionDone : null]}>
          {description}
        </Text>

        <TouchableOpacity
          onPress={remove}
          onPressIn={handlePressInTrash}
          onPressOut={handlePressOutTrash}
          style={[styles.button, isHoveredTrash ? styles.buttonHovered : null]}
        >
          <FontAwesome5
            name="trash-alt"
            style={[styles.trash, isHoveredTrash ? styles.trashHovered : null]}
          />
        </TouchableOpacity>
      </View>
    </View >
  )
}
