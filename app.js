const title = document.querySelector('#title')
const text = document.querySelector('#text')
const button = document.querySelector('button')


const fetchAdvice = async () => {
    const res = await fetch("https://api.adviceslip.com/advice")
    const data = await res.json()

    console.log(data)

    title.innerHTML = `Advice #${data.slip.id}`
    text.innerHTML = `"${data.slip.advice}"`
}

button.addEventListener('click', fetchAdvice)

