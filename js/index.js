const results = document.getElementById('results')
const containerButtons = document.querySelector('.container-buttons')
const themePWA = document.getElementById('theme-color')
let number1 = 0
let number2 = 0
let typeOperation = ''

containerButtons.addEventListener('click', e => {
  const click = e.target
  const data = click.dataset
  if (data.number) {
    writeScreen(data.number)
  }
  if (data.math) {
    getOperation(data.math)
  }
  if (data.operation) {
    runOperation(data.operation)
  }
})
const writeScreen = number => {
  results.innerHTML += number
  if (
    results.innerHTML.includes('+') ||
    results.innerHTML.includes('-') ||
    results.innerHTML.includes('*') ||
    results.innerHTML.includes('/')
  ) {
    results.innerHTML = number
    number2 = number
  }
}
const getOperation = operation => {
  number1 = results.innerHTML
  results.innerHTML = operation
  typeOperation = operation
  return { number1, typeOperation }
}
const runOperation = operation => {
  if (operation === 'reset') {
    results.innerHTML = ''
  } else if (operation === 'del') {
    results.innerHTML = results.innerHTML.slice(results.length, -1)
  } else if (operation === 'equal') {
    function getResults (number1, typeOperation) {
      number2 = results.innerHTML
      switch (typeOperation) {
        case '+':
          results.innerHTML = Number(number1) + Number(number2)
          break
        case '-':
          results.innerHTML = Number(number1) - Number(number2)
          break
        case '*':
          results.innerHTML = Number(number1) * Number(number2)
          break
        case '/':
          results.innerHTML = Number(number1) / Number(number2)
          break
      }
    }
    getResults(number1, typeOperation)
  }
}

window.onkeyup = e => {
  if (!isNaN(e.key)) {
    writeScreen(Number(e.key))
  } else {
    switch (e.code) {
      case 'NumpadDecimal':
        writeScreen(e.key)
        break
      case 'NumpadAdd':
        getOperation('+')
        break
      case 'NumpadSubtract':
        getOperation('-')
        break
      case 'NumpadMultiply':
        getOperation('*')
        break
      case 'NumpadDivide':
        getOperation('/')
        break
      case 'Backspace':
        runOperation('del')
        break
      case 'Escape':
        runOperation('reset')
        break
      case 'Enter':
        runOperation('equal')
        break
      case 'NumpadEnter':
        runOperation('equal')
        break
    }
  }
}

// Change theme

const body = document.getElementById('body')
const dark = document.getElementById('dark')
const light = document.getElementById('light')
const dracula = document.getElementById('dracula')
const classList = (add, remove, removeTwo, color) => {
  body.classList.add(add)
  body.classList.remove(remove)
  body.classList.remove(removeTwo)
  themePWA.content = color
}
const containClass = theme => {
  if (body.classList.contains(theme)) {
    localStorage.setItem('theme', theme)
  } else if (!body.classList.contains(theme)) {
    localStorage.setItem('theme', theme)
  }
}
const changeTheme = (element, theme, color, secondary, tertiary) => {
  element.onclick = () => {
    classList(theme, secondary, tertiary, color)
    containClass(theme)
  }
}
changeTheme(dark, 'dark', '#3a4764', 'light', 'dracula')
changeTheme(light, 'light', '#e6e6e6', 'dark', 'dracula')
changeTheme(dracula, 'dracula', '#160628', 'light', 'dark')
const detectedTheme = theme => {
  if (
    localStorage.theme === theme ||
    (!('theme' in localStorage) &&
      window.matchMedia(`(prefers-color-scheme: ${theme})`).matches)
  ) {
    body.classList.add(theme)
    switch (theme) {
      case 'dark':
        themePWA.content = '#3a4764'
        break
      case 'light':
        themePWA.content = '#e6e6e6'
        break
      case 'dracula':
        themePWA.content = '#160628'
        break
    }
  } else {
    body.classList.remove(theme)
  }
}
detectedTheme('dark')
detectedTheme('light')
detectedTheme('dracula')
