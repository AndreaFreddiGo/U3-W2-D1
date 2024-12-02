import { Component } from 'react'
import SingleComment from './SingleComment'
import { ListGroup } from 'react-bootstrap'

class CommentList extends Component {
  render() {
    return (
      <ListGroup>
        {this.props.array.map((element) => {
          return (
            <SingleComment
              review={element}
              key={element._id}
              array={this.props.array}
            />
          )
        })}
      </ListGroup>
    )
  }
}

export default CommentList
