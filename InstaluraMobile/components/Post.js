import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {
  Text, 
  View,
  Image,
  Dimensions,
  StyleSheet,
  TouchableOpacity
} from 'react-native'

import BotaoLike from '../resources/img/s2.png'
import BotaoLiked from '../resources/img/s2-checked.png'

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
  },
  botaoDeLike: {
    width: 40,
    height: 40
  },
  rodape: {
    margin: 10
  }
})

class Post extends Component {
  constructor(props) {
    super(props)
    this.state = {
      liked: props.liked,
      likedStatus: BotaoLike
    }
  }
  handlerLike = () => {
    let {
      liked
    } = this.state
    liked = !liked
    this.setState({
      liked: liked,
      likedStatus: liked ? BotaoLiked : BotaoLike
    })
  }
  render() {
    const {
      fotoDePerfil,
      usuario,
      foto
    } = this.props
    const {
      likedStatus
    } = this.state
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
        <View style={styles.rodape}>
          <TouchableOpacity onPress={this.handlerLike}>
            <Image
              style={styles.botaoDeLike}
              source={likedStatus}
            />
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

Post.propTypes = {
  fotoDePerfil: PropTypes.string ,
  usuario: PropTypes.string,
  foto: PropTypes.string,
  liked: PropTypes.bool
}

export default Post