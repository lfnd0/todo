import { Image, Text, View } from 'react-native'
import { styles } from './styles'

export function EmptyList() {
  return (
    <View style={styles.emptyList}>
      <Image
        style={styles.clipboard}
        source={require('../../../assets/clipboard.png')}
      />
      <Text style={styles.info1}>
        Você ainda não tem tarefas cadastradas.
      </Text>
      <Text style={styles.info2}>
        Crie tarefas e organize seus itens a fazer!
      </Text>
    </View>
  )
}
