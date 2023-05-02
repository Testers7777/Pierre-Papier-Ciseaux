const write = (content) => {
    document.querySelector('p').innerHTML = content
}
var texts = [
    "Pierre",
    "Papier",
    "Ciseaux"
];
function randomText() {
    var randomIndex = Math.floor(Math.random() * texts.length);
    return texts[randomIndex];
  }
  function res(choice1, choice2) {
    if (choice1 == choice2) { return 'Égalité' }
    if (choice1 == 'Pierre' &&  choice2 == 'Papier' || choice1 == 'Papier' && choice2 == 'Ciseaux' || choice1 == 'Ciseaux' && choice2 == 'Pierre') { return 'Perdu' }
    if (choice1 == 'Pierre' && choice2 == 'Ciseaux' || choice1 == 'Papier' &&  choice2 == 'Pierre' || choice1 == 'Ciseaux' && choice2 == 'Papier') { return 'Gagné' }
  }
  
  document.querySelectorAll('.index1').forEach(element => element.addEventListener('click', () => {
    if (element.className != 'restart') {
    document.querySelector('.restart').disabled = false
    document.querySelector('.restart').style.color = 'var(--button-text-color)'
    document.querySelector('.restart').style.backgroundColor = 'var(--danger)'
    document.querySelector('.restart').style.cursor = 'pointer'
    const choice2 = randomText();
    write(res(element.id, choice2) + ', ' + element.id + ' contre ' + choice2)
        document.querySelectorAll('.index1').forEach(element => element.disabled = true)
        document.querySelectorAll('.index1').forEach(element => element.style.backgroundColor = 'var(--primary-disabled)',
    document.querySelectorAll('.index1').forEach(element => element.style.color = 'var(--text-opacity)'),
document.querySelectorAll('.index1').forEach(element => element.style.cursor = 'not-allowed'))
    }
}))

document.querySelector('.restart').addEventListener('click', () => {
    document.querySelector('.restart').disabled = true
    document.querySelector('.restart').style.backgroundColor = 'var(--danger-disabled)'
    document.querySelector('.restart').style.color = 'var(--text-opacity)'
    document.querySelector('.restart').style.cursor = 'not-allowed'
    write('En attente du joueur...')
        document.querySelectorAll('.index1').forEach(element => element.disabled = false)
        document.querySelectorAll('.index1').forEach(element => element.style.backgroundColor = 'var(--primary)',
    document.querySelectorAll('.index1').forEach(element => element.style.color = 'var(--button-text-color)'),
document.querySelectorAll('.index1').forEach(element => element.style.cursor = 'pointer'))
})
