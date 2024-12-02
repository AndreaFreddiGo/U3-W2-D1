import { useState } from 'react'
import Alert from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'

function Welcome() {
  const [show, setShow] = useState(true)

  return (
    <>
      <Alert show={show} variant="light">
        <Alert.Heading>Welcome!!</Alert.Heading>
        <p>Choose your favorite book!!</p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow(false)} variant="outline-dark">
            Close me
          </Button>
        </div>
      </Alert>
    </>
  )
}

export default Welcome
