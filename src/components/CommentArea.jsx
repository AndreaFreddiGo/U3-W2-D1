import { Component } from 'react'
import CommentList from './CommentList'
import AddComment from './AddComment'

class CommentArea extends Component {
  state = {
    reviews: [],
  }

  getReviews = () => {
    fetch(
      'https://striveschool-api.herokuapp.com/api/comments/' +
        this.props.selectedBook,
      {
        headers: {
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzQ4OGQxYTA2ZmM4YzAwMTU2Yjg3OGEiLCJpYXQiOjE3MzI4MzI3ODAsImV4cCI6MTczNDA0MjM4MH0.FlxAciUbNj75psIfuknKjCMI6Zc5EbJOT_szjma-isY',
        },
      }
    )
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error('Errore nel recupero delle recensioni')
        }
      })
      .then((arrayOfReviews) => {
        console.log('ARRAY', arrayOfReviews)
        this.setState({ reviews: arrayOfReviews })
      })
      .catch((err) => {
        console.log(err)
      })
  }

  componentDidMount() {
    this.getReviews()
  }

  render() {
    return (
      <div>
        <CommentList array={this.state.reviews} />
        <AddComment bookId={this.props.selectedBook} />
      </div>
    )
  }
}

export default CommentArea
