import React, {Component} from 'react'
import {
  FlatList,
  StyleSheet
} from 'react-native'

import Post from './components/Post'

const styles = StyleSheet.create({
  container: {
    marginTop: 20
  }
})

class App extends Component {
  constructor() {
    super()
    this.state = {
      fotos: []
    }
  }
  componentDidMount() {
    fetch('https://instalura-api.herokuapp.com/api/public/fotos/rafael')
      .then(response => {
        return response.json()
      })
      .then(json => {
        this.setState({
          fotos: json
        })
      })
  }
  render() {
    const { fotos } = this.state
    return (
      <FlatList
        style={styles.container}
        data={fotos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={ ({item}) =>
          <Post
            fotoDePerfil={item.urlPerfil}
            foto={item.urlFoto}
            usuario={item.loginUsuario}
          />
        }
      />
    )
  }
}

export default App