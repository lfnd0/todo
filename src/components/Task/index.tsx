import { Text, TouchableOpacity, View } from 'react-native'
import { styles } from './styles'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { FontAwesome5 } from '@expo/vector-icons';

type Props = {
  description: string
  isDone: boolean
  done: () => void
  remove: () => void
}

export function Task({ description, isDone, done, remove }: Props) {
  return (
    <View style={styles.content}>
      <View style={styles.tasks}>
        <TouchableOpacity
          style={isDone ? styles.doneCheckbox : styles.checkbox}
          onPress={done}
        >
          <MaterialCommunityIcons name="check" style={isDone ? styles.check : { display: 'none' }} />
        </TouchableOpacity>

        <Text style={isDone ? styles.doneDescription : styles.description}>
          {description}
        </Text>

        <TouchableOpacity
          onPress={remove}
        >
          <FontAwesome5
            name="trash-alt"
            style={styles.trash}
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}
