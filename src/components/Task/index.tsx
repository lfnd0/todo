import { Image, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';

type Props = {
  description: string
}

const assets = '../../../assets/'

export function Task({ description }: Props) {
  return (
    <View style={styles.tasks}>
      <TouchableOpacity style={styles.checkbox}>

      </TouchableOpacity>

      <Text style={styles.description}>
        {description}
      </Text>

      <TouchableOpacity>
        <Image
          style={styles.trash}
          source={require(`${assets}trash.png`)}
        />
      </TouchableOpacity>
    </View>
  )
}
