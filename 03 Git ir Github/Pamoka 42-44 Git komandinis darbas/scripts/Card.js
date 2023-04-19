import Modal from "./Modal.js"

export default class Card {
  #props
  constructor(props) {
    this.#props = props
  }

  render() {
    const card = document.createElement('div')
    card.classList.add('card')

    const img = document.createElement('img')
    img.setAttribute('src', this.#props.image_src)

    const title = document.createElement('p')
    const titleText = this.#props.title

    title.innerHTML = titleText

    const dateContainer = document.createElement('div')
    dateContainer.classList.add('date')
    const date = document.createElement('span')
    date.innerHTML = this.#props.date
    dateContainer.appendChild(date)

    card.append(img, title, dateContainer)
    const modal = new Modal(this.#props)
    card.addEventListener('click', () => modal.render())

    return card
  }
}