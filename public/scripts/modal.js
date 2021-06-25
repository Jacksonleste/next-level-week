export default function Modal(){ // Exportando a função Modal
    
    const modaWrapper = document.querySelector('.modal-wrapper').classList
    const cancelButton = document.querySelector('.cancel')

    cancelButton.addEventListener("click", close)
    
    function open(){
        // Funcionalidade de adicionar a classe active da modal
        modaWrapper.add("active")
    }
    function close(){
        // Funcionalidade de remover a classe active da modal
        modaWrapper.remove("active")
    }

    return{
        open,
        close
    }
}