export type Flag = {
    nsfw: boolean
    religious: boolean
    political: boolean
    racist: boolean
    sexist: boolean
    explicit: boolean
}

export type FlagKeys = 'nsfw' |'religious' |'political' |'racist' |'sexist' |'explicit' ;


export type Category = "Any" | 'Misc' | 'Programming' | 'Dark' | 'Pun' | 'Spooky' | 'Christmas';

  
export  type Joke = {
    id: string
    safe: boolean
    lang: 'cs' | 'de' | 'en' | 'es' | 'fr' | 'pt'
    category: Category
    flags: Flag
    type: 'single' | 'twopart'
    setup?: string
    delivery?: string
    joke?: string
  }
  