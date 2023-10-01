import { Image, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';

type Props = {
  description: string
  done: () => void
  remove: () => void
}

const assets = '../../../assets/'

export function Task({ description, done, remove }: Props) {
  return (
    <View style={styles.content}>
      <View style={styles.tasks}>
        <TouchableOpacity
          style={styles.checkbox}
          onPress={done}
        >

        </TouchableOpacity>

        <Text style={styles.description}>
          {description}
        </Text>

        <TouchableOpacity
          onPress={remove}
        >
          <Image
            style={styles.trash}
            source={require(`${assets}trash.png`)}
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}
