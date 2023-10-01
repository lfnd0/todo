import { StatusBar } from 'react-native'
import { Fragment } from 'react'
import { Home } from './src/components/Home'

export default function App() {
  return (
    <Fragment>
      <Home />
      <StatusBar
        barStyle='light-content'
        backgroundColor='transparent'
        translucent
      />
    </Fragment>
  )
}
