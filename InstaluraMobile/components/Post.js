import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {
  Text, 
  View,
  Image,
  Dimensions,
  StyleSheet
} from 'react-native'

const size = Dimensions.get('screen').width

const styles = StyleSheet.create({
  cabecalho: {
    margin: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  fotoDePerfil: {
    marginRight: 10,
    borderRadius: 20,
    width: 40, height: 40
  },
  foto: {
    width: size,
    height: size
  }
})

class Post extends Component {
  render() {
    const {
      fotoDePerfil,
      usuario,
      foto
    } = this.props
    return (
      <View>
        <View
          style={styles.cabecalho}
        >
          <Image
            source={{uri: fotoDePerfil}}
            style={styles.fotoDePerfil}
          />
          <Text>{usuario}</Text>
        </View>
        <Image
          source={{uri: foto}}
          style={styles.foto}
        />
      </View>
    )
  }
}

Post.propTypes = {
  fotoDePerfil: PropTypes.string ,
  usuario: PropTypes.string,
  foto: PropTypes.string
}

export default Post