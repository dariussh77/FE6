document.querySelector('#subscr')
  .addEventListener('submit', e => {
    e.preventDefault()
    const input = e.target.elements.email.value

    alert(input + ' paštas sėkmingai prenumeravo mūsų naujienlaiškį ✉️')

    document.querySelector('#subscr').reset()
  })