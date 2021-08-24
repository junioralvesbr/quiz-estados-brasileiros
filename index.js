const $header = document.querySelector('.header')
const $p = document.createElement('p')
const $form = document.querySelector('.form')

const correctAnswer = ['a', 'c', 'a', 'c', 'b', 'a']
let score = 0

const scoreMessage = score => {
    $p.textContent = `Você acertou ${score}`
    $p.setAttribute('class', 'score')
    $header.insertAdjacentElement('beforeEnd', $p)
    scrollTo(0, 0)
}

const handleSubmit = event => {
    event.preventDefault()

    const userAnswer = [
        $form.roraima.value,
        $form.parana.value,
        $form.goias.value,
        $form.bahia.value,
        $form.sergipe.value,
        $form.minasGerais.value
    ]

    correctAnswer.forEach((item, index) => {
        if (item === userAnswer[index]) {
            score += 1
        }
    })

    scoreMessage(score)
    score = 0
}

$form.addEventListener('submit', handleSubmit)