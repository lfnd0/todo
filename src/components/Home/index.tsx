import { FlatList, Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { styles } from './style'
import { Task } from '../Task'

const assets = '../../../assets/'

export function Home() {
  const tasks = [
    'Tarefa 1', 'Tarefa 2', 'Tarefa 3'
  ]

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.logo}
          source={require(`${assets}logo.png`)}
        />
      </View>

      <View style={styles.content}>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder='Adicione uma nova tarefa'
            placeholderTextColor='#808080'
            selectionColor='#F2F2F2'
          />

          <TouchableOpacity
            style={styles.button}
          >
            <Image
              style={styles.plus}
              source={require(`${assets}plus.png`)}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.status}>
          <View style={styles.inline}>
            <Text style={styles.create}>Criadas</Text>
            <Text style={styles.counter}>0</Text>
          </View>

          <View style={styles.inline}>
            <Text style={styles.done}>Concluídas</Text>
            <Text style={styles.counter}>0</Text>
          </View>
        </View>

        <FlatList
          data={tasks}
          keyExtractor={item => item}
          renderItem={({ item }) => (
            <Task description={item} />
          )}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => (
            <View style={styles.empty}>
              <Image
                style={styles.clipboard}
                source={require(`${assets}clipboard.png`)}
              />
              <Text style={styles.info1}>
                Você ainda não tem tarefas cadastradas
              </Text>
              <Text style={styles.info2}>
                Crie tarefas e organize seus itens a fazer
              </Text>
            </View>
          )}
        />
      </View>
    </View>
  )
}
