export default class Modal {
  #props
  constructor(props) {
    this.#props = props

  }

  render() {
    const div = document.createElement('div')
    div.classList.add('modal')

    const modalContent = document.createElement('div')
    modalContent.classList.add('modal-content')

    const icon = document.createElement('i')
    icon.classList.add('fa-solid', 'fa-x')
    this.close(icon, div)

    const text = document.createElement('h1')
    const textContent = document.createTextNode(this.#props.title)
    text.append(textContent)

    const modalDiv = document.createElement('div')
    modalDiv.classList.add('modalDiv')

    const img = document.createElement('img')
    img.setAttribute('src', this.#props.image_src)

    const textDiv = document.createElement('div')
    const date = document.createElement('h3')
    date.appendChild(document.createTextNode('Data:'))

    const dateText = document.createElement('p')
    dateText.appendChild(document.createTextNode(this.#props.date))

    const location = document.createElement('h3')
    location.appendChild(document.createTextNode('Lokacija:'))

    const locationText = document.createElement('p')
    locationText.appendChild(document.createTextNode(this.#props.location_address))

    const category = document.createElement('h3')
    category.appendChild(document.createTextNode('Kategorija:'))

    const categoryText = document.createElement('p')
    categoryText.appendChild(document.createTextNode(this.#props.category))


    const eventLink = document.createElement('h3')
    eventLink.append(document.createTextNode('Daugiau apie renginį: '))
    const button = document.createElement('a')
    button.append(document.createTextNode('Sužinoti daugiau'))
    button.setAttribute('href', this.#props.link)
    button.setAttribute('target', '_blank')

    textDiv.append(date, dateText, location, locationText, category, categoryText, eventLink, button)

    const description = document.createElement('p')
    description.innerHTML = this.#props.content

    modalDiv.append(img, textDiv)

    modalContent.append(icon, text, modalDiv, description)

    div.append(modalContent)

    document.body.append(div)

    return div
  }

  close(icon, div) {
    icon.addEventListener('click', () => {
      div.remove()
    })
    window.onclick = (event) => {
      if (event.target.classList.value === 'modal') {
        div.remove()

      }
    }
  }
}