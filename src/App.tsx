import axios from 'axios'
import React, { useState } from 'react'
import JokeItem from './components/JokeItem'
import { Wrapper, Row, Header, Image, Search, Form, Button } from './components/styled'
import owl from './images/owl.svg'

const baseURL = 'https://v2.jokeapi.dev/joke/Any'



const App = () => {
  const [search, setSearch] = useState('')
  const [error, setError] = useState(false)
  const [jokes, setJokes] = useState([])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value)
  }

  const getJokes = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const finalState = `${baseURL}?contains=${search}&amount=10`

    const { data } = await axios.get(finalState)

    if (data.error) {
      setError(true)
      setJokes([])
    } else {
      setError(false)
      setJokes(data.jokes)
    }
    setSearch('')
    console.log(data);
  }

  return (
    <Wrapper>
      <Row>
        <Header>Joker</Header>
        <Image src={owl} alt="Baykus" />
      </Row>

      <Form onSubmit={getJokes}>
        <Search type="text" placeholder='Search joke ...' value={search} onChange={handleChange} />
        <Button>Submit</Button>
      </Form>
      {/* Jokes */}
      {
        error && <p> No jokes were found that match provides filtre</p>}
      {
        jokes.length > 0 && jokes.map((joke, index) => <JokeItem key={index} joke={joke} />)
      }


    </Wrapper>
  )
}

export default App