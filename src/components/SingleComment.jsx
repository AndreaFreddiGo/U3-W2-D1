import { Component } from 'react'
import { ListGroup } from 'react-bootstrap'

class SingleComment extends Component {
  state = {
    reviews: [],
  }

  getReviews = () => {
    fetch(
      'https://striveschool-api.herokuapp.com/api/comments/' +
        this.props.review.elementId,
      {
        headers: {
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzQ4OGQxYTA2ZmM4YzAwMTU2Yjg3OGEiLCJpYXQiOjE3MzI4MDc5NjIsImV4cCI6MTczNDAxNzU2Mn0.MRbxUHRZi1aSWV_q9m--e8pMC73RqEYGF-oKPfHn0TI',
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
      .then(() => {
        this.setState({ reviews: this.props.review.array })
      })
      .catch((err) => {
        console.log(err)
      })
  }

  render() {
    return (
      <ListGroup.Item className="d-flex justify-content-between align-items-center">
        <p className=" m-0">
          {this.props.review.author}: {this.props.review.comment}
        </p>
        <button
          className=" px-2 bg-warning rounded-5"
          onClick={() => {
            fetch(
              'https://striveschool-api.herokuapp.com/api/comments/' +
                this.props.review._id,
              {
                method: 'DELETE',
                headers: {
                  Authorization:
                    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzQ4OGQxYTA2ZmM4YzAwMTU2Yjg3OGEiLCJpYXQiOjE3MzI4MDc5NjIsImV4cCI6MTczNDAxNzU2Mn0.MRbxUHRZi1aSWV_q9m--e8pMC73RqEYGF-oKPfHn0TI',
                },
              }
            )
              .then((response) => {
                if (response.ok) {
                  console.log('Eliminazione avvenuta')
                  this.getReviews()
                } else {
                  throw new Error('Errore durante la cancellazione')
                }
              })
              .catch((err) => {
                console.log(err)
              })
          }}
        >
          X
        </button>
      </ListGroup.Item>
    )
  }
}

export default SingleComment
