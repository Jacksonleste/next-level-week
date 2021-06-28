import Modal from './modal.js'

const modal = Modal()

const modalTitle = document.querySelector(".modal h2")
const modalDescription = document.querySelector(".modal p")
const modalButton = document.querySelector(".modal .buttons .red")

// Pegar todos os botões que existe com a classe check
const checkButtons = document.querySelectorAll(".actions a.check")

checkButtons.forEach(button => { 
    //Adicionar a escuta
    button.addEventListener("click", handleClick)
})

const deleteButtons = document.querySelectorAll(".actions a.delete")

// Quando o botão excluir for precionado, 
deleteButtons.forEach(button => {
    // Adicionar a escuta
    button.addEventListener("click", event => handleClick(event, false))
    })

function handleClick(event, check = true){
        event.preventDefault()
        const text = check ? 'Marcar como lida' : 'Excluir'

        const slug = check ? 'check' : 'delete'
        const roomId = document.querySelector("#room-id").dataset.id
        const questionId = event.target.dataset.id

        const form = document.querySelector(".modal form")
        form.setAttribute("action", `/question/${roomId}/${questionId}/${slug}`)

        // Mudar HTML
        modalButton.innerHTML = `Sim, ${text.toLowerCase()}`
        modalTitle.innerHTML = `${text} essa pergunta`
        modalDescription.innerHTML = `Tem certeza que deseja ${text.toLowerCase()} esta pergunta?`
        modalButton.style.background = check ? 'var(--blue)' : 'var(--red)'
    // Abrir modal
    modal.open() 
}