import { Component } from 'react'
import { Button, Form } from 'react-bootstrap'

class CommentList extends Component {
  state = {
    review: {
      comment: '',
      rate: '1',
      elementId: this.props.bookId,
    },
  }

  submitReview = (e) => {
    e.preventDefault()
    console.log(this.props.bookId)
    fetch('https://striveschool-api.herokuapp.com/api/comments/', {
      method: 'POST',
      body: JSON.stringify(this.state.review),
      headers: {
        'Content-Type': 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzQ4OGQxYTA2ZmM4YzAwMTU2Yjg3OGEiLCJpYXQiOjE3MzI4MzI3ODAsImV4cCI6MTczNDA0MjM4MH0.FlxAciUbNj75psIfuknKjCMI6Zc5EbJOT_szjma-isY',
      },
    })
      .then((response) => {
        if (response.ok) {
          console.log('Review caricata')
          this.setState({
            review: {
              comment: '',
              rate: '1',
              elementId: this.props.bookId,
            },
          })
        } else {
          throw new Error('Errore nel caricamento della review')
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }

  render() {
    return (
      <>
        <h3 className="mt-3 p-1">Aggiungi la tua review:</h3>

        <Form className="text-start bg-light p-3" onSubmit={this.submitReview}>
          <Form.Group className="mb-3">
            <Form.Label>Recensione</Form.Label>
            <Form.Control
              type="text"
              placeholder="Scrivi qui la tua recensione..."
              required
              value={this.state.review.comment}
              onChange={(e) => {
                this.setState({
                  review: {
                    ...this.state.review,
                    comment: e.target.value,
                  },
                })
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Voto</Form.Label>
            <Form.Select
              aria-label="Voto"
              value={this.state.review.rate}
              onChange={(e) => {
                this.setState({
                  review: {
                    ...this.state.review,
                    rate: e.target.value,
                  },
                })
              }}
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Select>
          </Form.Group>

          <Button
            variant="warning"
            className="border-2 border-dark"
            type="submit"
          >
            Invia review
          </Button>
        </Form>
      </>
    )
  }
}

export default CommentList
