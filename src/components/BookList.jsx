import SingleBook from './SingleBook'

const BookList = (props) => {
  return props.genre.map((element, i) => {
    return <SingleBook book={element} key={i} />
  })
}

export default BookList
