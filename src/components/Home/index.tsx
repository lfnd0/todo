import { Alert, FlatList, Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { styles } from './style'
import { Task } from '../Task'
import { useEffect, useState } from 'react'
import { EmptyList } from '../EmptyList'

type TaskType = {
  description: string
  isDone: boolean
}

export function Home() {
  const [tasks, setTasks] = useState<TaskType[]>([])
  const [description, setDescription] = useState('')
  const [counterTasksCreated, setCounterTasksCreated] = useState<number>(tasks.length)
  const [counterTasksDone, setCounterTasksDone] = useState<number>(tasks.filter(item => item.isDone === true).length)

  useEffect(() => {
    setCounterTasksCreated(tasks.length)
    setCounterTasksDone(tasks.filter(item => item.isDone === true).length)
  }, [tasks])

  function handleTaskAdd() {
    if (!description || tasks.find(item => description === item.description)) {
      return Alert.alert('Tarefa inválida', 'Revise a descrição da sua tarefa.')
    }

    const task = {
      description,
      isDone: false,
    }

    setTasks(prevState => [...prevState, task])
    setDescription('')
  }

  function handleTaskDone(task: TaskType) {
    task.isDone = task.isDone ? false : true
    setCounterTasksDone(tasks.filter(item => item.isDone === true).length)
  }

  function handleTaskRemove(task: TaskType) {
    Alert.alert('Remover', `Deseja remover a tarefa: ${task.description}?`, [
      {
        text: 'Sim',
        onPress: () => setTasks(prevState => prevState.filter(item => item.description !== task.description)),
      },
      {
        text: 'Não',
        style: 'cancel',
      }
    ])
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.logo}
          source={require('../../../assets/logo.png')}
        />
      </View>

      <View style={styles.content}>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder='Adicione uma nova tarefa'
            placeholderTextColor='#808080'
            selectionColor='#F2F2F2'
            value={description}
            onChangeText={setDescription}
          />

          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.8}
            onPress={handleTaskAdd}
          >
            < Feather
              name='plus-circle'
              style={styles.plus}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.status}>
          <View style={styles.inline}>
            <Text style={styles.create}>Criadas</Text>
            <Text style={styles.counter}>{counterTasksCreated}</Text>
          </View>

          <View style={styles.inline}>
            <Text style={styles.done}>Concluídas</Text>
            <Text style={styles.counter}>{counterTasksDone}</Text>
          </View>
        </View>
      </View>

      <FlatList
        data={tasks}
        keyExtractor={item => item.description}
        renderItem={({ item }) => (
          <Task
            description={item.description}
            isDone={item.isDone}
            done={() => handleTaskDone(item)}
            remove={() => handleTaskRemove(item)}
          />
        )}
        showsVerticalScrollIndicator={true}
        ListEmptyComponent={() => (
          <EmptyList />
        )}
      />
    </View>
  )
}
