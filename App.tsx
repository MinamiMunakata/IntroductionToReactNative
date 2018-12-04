import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

interface IState {
  message: string
}

export default class App extends React.Component<{}, IState> {
  constructor(props: {}) {
    super(props)
    this.state = {
      message: 'It is done now!',
    }
    // prints default props as json
    console.log(`constructor ${JSON.stringify(props)}`)
    // How to fix the scope problem... X(
    // this._logSomething = this._logSomething.bind(this)
  }

  componentWillMount() {
    // nothing has been rendered,
    console.log('componentWillMount')
  }

  // private method _
  // _logSomething = () => {
  //   console.log('This is actually working!')
  //   console.log(this.state.message)
  // }

  _logSomething() {
    console.log('This is actually working!')
    console.log(this.state.message)
  }

  render() {
    const message = 'Hello World'
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text style={styles.defaultText}>Hi there!</Text>
        <Text>{message}</Text>
        {/* this = app */}
        <Text onPress={() => this._logSomething()} style={styles.defaultText}>
          Press this text!
        </Text>
        <Text>Changes you make will automatically reload...</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    )
  }

  componentDidMount() {
    // we did rendered.
    console.log('componentDidMount')
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  defaultText: {
    color: 'blue',
  },
})
