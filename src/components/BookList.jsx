import { Component } from 'react'
import SingleBook from './SingleBook'
import { Col } from 'react-bootstrap'
import CommentArea from './CommentArea'

class BookList extends Component {
  state = {
    asin: '', //il libro non è selezionato e quindi non è attivo
  }

  selectBook = (asin) => {
    this.setState({ asin: asin })
  }

  render() {
    return (
      <>
        <Col className="col-8 d-flex flex-wrap justify-content-start">
          {this.props.genre.map((element, i) => (
            <SingleBook
              book={element}
              key={i}
              asin={this.state.asin}
              selectBook={this.selectBook}
            />
          ))}
        </Col>

        <Col className="col-4">
          <CommentArea asin={this.state.asin} />
        </Col>
      </>
    )
  }
}

export default BookList
