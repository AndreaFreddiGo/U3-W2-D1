import { Component } from 'react'
import { Col, Card, Button } from 'react-bootstrap'
import CommentArea from './CommentArea'

class SingleBook extends Component {
  state = {
    selected: false, //il libro non è selezionato e quindi non è attivo
  }

  render() {
    return (
      <>
        {this.state.selected && (
          <CommentArea selectedBook={this.props.book.asin} />
        )}
        <Col xs={12} md={4} lg={3}>
          <Card
            onClick={() => {
              console.log(this.props.book)
              this.setState({ selected: !this.state.selected })
            }}
            className={`h-100 border-3 p-2 d-flex flex-column ${
              this.state.selected ? 'border-danger' : 'border-dark'
            }`}
          >
            <Card.Img variant="top" src={this.props.book.img} />
            <Card.Body className=" d-flex flex-column">
              <Card.Title>{this.props.book.title}</Card.Title>
              <Card.Text>Price: {this.props.book.price}</Card.Text>
              <Button
                className=" mt-auto border-2 border-dark"
                variant="warning"
              >
                BUY
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </>
    )
  }
}

export default SingleBook
