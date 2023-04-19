import { data } from './data.js'
import Card from './Card.js'

const cardRender = () => {
  const eventCardsDiv = document.querySelector('#eventCards')

  for (const entry of data) {
    const card = new Card(entry)
    eventCardsDiv.append(card.render())
  }

}
cardRender()
