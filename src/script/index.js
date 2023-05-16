let options = document.querySelectorAll(".options")
const resetGame = document.querySelector(".reset")

let check = true
let contador = 0

let possibilidadesVitoriaX = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]

let possibilidadesVitoriaCirclo = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]

options.forEach((position, index) => {
    position.addEventListener("click", () => {
        
        if(check === true) {
            // Style
            let imgX = document.createElement("img")
            imgX.src = './src/assets/x.png'
            position.appendChild(imgX)
            position.style.background = '#FF0000'
            position.style.cursor = 'no-drop'
            position.setAttribute("disabled", '')

            // Remover o item do array, de acordo com o index
            let removerItem = index
            possibilidadesVitoriaX = possibilidadesVitoriaX.map(subarray => subarray.filter(num => num !== removerItem));

            // de acordo com cada index do array se algum apresentar undefined o jogador vence
            possibilidadesVitoriaX.map((todo) => {
                if(todo[0] === undefined){
                    alert("O jogador X venceu")
                    contador--
                    resetGame.style.display = 'block'
                }
            })

            check = false
        }
        else{
            let imgCirclo = document.createElement('img')
            imgCirclo.src = './src/assets/circulo.png'
            position.appendChild(imgCirclo)
            position.style.background = '#01DF01'
            position.style.cursor = 'no-drop'
            position.setAttribute("disabled", '')


            let removerItem = index
            possibilidadesVitoriaCirclo = possibilidadesVitoriaCirclo.map(subarray => subarray.filter(num => num !== removerItem));

            possibilidadesVitoriaCirclo.map((todo) => {
                if(todo[0] === undefined){
                    alert("O jogador 0 venceu")
                    contador--
                    resetGame.style.display = 'block'
                }
            })

            check = true
        }


        contador++
        //Logica pro empate
        if(contador === 9) {
            alert("EMPATE")
            resetGame.style.display = 'block'
        }
    })
})


resetGame.addEventListener("click", function() {
    possibilidadesVitoriaX = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]

    possibilidadesVitoriaCirclo = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]

    check = true
    contador = 0
    
    options.forEach((todo) => {
        todo.style.background = '#0B243B'
        todo.removeAttribute("disabled")
        todo.style.cursor = 'pointer'
        todo.innerHTML = ''
    })

    resetGame.style.display = 'none'
})