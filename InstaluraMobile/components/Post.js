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
    marginBottom: 10,
    width: 40,
    height: 40
  },
  rodape: {
    margin: 10
  },
  likes: {
    fontWeight: 'bold',
  },
  comentario: {
    flexDirection: 'row'
  },
  tituloComentario: {
    fontWeight: 'bold',
    marginRight: 5
  }
})

class Post extends Component {
  constructor(props) {
    super(props)
    this.state = {
      liked: props.liked,
      likers: props.likers,
      likedStatus: BotaoLike
    }
  }
  handlerLike = () => {
    let {
      liked,
      likers
    } = this.state
    const {
      usuario
    } = this.props

    liked = !liked

    if (liked) {
      likers = [
        ...likers,
        {login: usuario}
      ]
    } else {
      likers = likers.filter(item => {
        return item.login !== usuario
      })
    }

    this.setState({
      liked: liked,
      likers: likers,
      likedStatus: liked ? BotaoLiked : BotaoLike
    })
  }


  showLikes = () => {
    const {
      likers
    } = this.state
    if (likers.length === 0) {
      return
    }
    return (
      <Text style={styles.likes}>{likers.length} curtida{likers.length > 1 && 's'}</Text>
    )
  }

  render() {
    const {
      fotoDePerfil,
      usuario,
      foto,
      comentario
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
          {this.showLikes()}
          {comentario.map((comentario, index) =>
            <View style={styles.comentario} key={index}>
              <Text style={styles.tituloComentario}>{comentario.login}</Text>
              <Text>{comentario.texto}</Text>
            </View>
          )}
        </View>
      </View>
    )
  }
}

Post.propTypes = {
  fotoDePerfil: PropTypes.string ,
  usuario: PropTypes.string,
  foto: PropTypes.string,
  liked: PropTypes.bool,
  likers: PropTypes.array,
  comentario: PropTypes.array
}

Post.defaultProps = {
  likers: []
}

export default Post