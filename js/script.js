const multiplicationForm = document.querySelector("#multiplication-form")

const numberInput = document.querySelector("#number")

const multiplicationInput = document.querySelector("#multiplicator")

const multiplicationTitle = document.querySelector("#multiplication-title span")

const multiplicationTable = document.querySelector("#multiplication-operations")



//Evento

multiplicationForm.addEventListener("submit", (e) =>{
    e.preventDefault();
    //Quando clicar no botção calcular, não quero que ele recarregue a página

    const multiplicationNumber = numberInput.value; // numero inserido da tabuada

    const multiplicatorNumber = +multiplicationInput.value; // Quantas vezes eu vou calcular o número inserido

    if (!multiplicationNumber || !multiplicatorNumber) return; // Só será executado se ambos os campos estiverem preenchidos
    
    createTable(multiplicationNumber, multiplicatorNumber); // vamos criar a função que cria a tabela mas para isso, precisamos garantir  que o campos "#multiplication-title span" e "#multiplication-operations" estejam vazios.....

})