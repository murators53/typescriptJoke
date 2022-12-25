import React from 'react'
import {Joke, FlagKeys} from './common/types'
import {CardWrapper, CardTop, CardBottom, Setup, Delivery} from './styled/Card'

interface JokeItemProps {
    joke: Joke
}

const JokeItem:React.FC<JokeItemProps> = ({ joke }) => {
    console.log(joke);
    const flags = Object.keys(joke.flags)
    .filter((key) => joke.flags[key as FlagKeys])
    .join(" , ")
    
  return (
     <CardWrapper>
        <CardTop>
            {
                joke.type === 'single' ? (
                    <p>{joke.joke}</p>
                ) : (
                    <>
                        <Setup>{joke.setup}</Setup>
                        <Delivery>{joke.delivery}</Delivery>
                    </>
                )
            }
        </CardTop>
        <CardBottom>
            <p>{joke.category}</p>
            <p>{flags}</p>
        </CardBottom>
        
    </CardWrapper> 
  )
}

export default JokeItem