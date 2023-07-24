

const from = document.querySelector("#form")
const input = document.querySelector("#input")
const button = document.querySelector(".btn")
const list = document.querySelector(".grocery")
const allClear = document.querySelector(".clear-btn")
const alert = document.querySelector(".alert")


let cout = -1
let selectedId = 0;
form.addEventListener('submit', (e) => {
    e.preventDefault()
    cout++
    if(button.innerText == "submit"){
        if (input.value != ""){

            let div = document.createElement("div")
            div.setAttribute("class","add")
            div.setAttribute("data-set", cout)
    
            let li = document.createElement('li')
            li.style.listStyle = "none"
            li.innerText = input.value
    
            div.appendChild(li)
            alertBar("items to be added","green",'#87ec9f')
    
    
    
            let edit = document.createElement("span")
            edit.innerHTML = ` <i class="fas fa-edit" data-set="${cout}"></i>`
            div.appendChild(edit)


            let remove = document.createElement("span")
            remove.innerHTML = '<i class="fas fa-trash"></i>'
            div.appendChild(remove)
    
            list.appendChild(div)
    

            remove.addEventListener('click', (e) => {
                e.target.parentElement.parentElement.remove()
                alertBar("item removed","red","#eba0a7")
            })

    
            allClear.addEventListener("click", () => {
                div.remove()
                alertBar("All item Clear","red","#eba0a7")
            })

    
            edit.addEventListener("click",(e) => {
                selectedId = e.target.dataset.set
                input.value = e.target.parentElement.parentElement.children[0].innerText
                button.innerText = "update"  
            })

            button.addEventListener("click",()=>{
                    if(button.innerText == "update"){
                        alertBar("item Updated","green","#87ec9f")
                    }
            })
            
            input.value = ""
        }
    }
    else if(button.innerText == "update"){
        let alldiv = document.querySelectorAll(".add")
        for (let i = 0; i < alldiv.length; i++) {
            if(alldiv[i].dataset.set == selectedId){
                alldiv[i].children[0].innerText = input.value
            }
        }
        button.innerText = "submit"
        input.value = ""
    }
})

function alertBar(text,color,colors){
    alert.innerText = text
    alert.style.color = color
    alert.style.background = colors
    window.setTimeout(()=>{
    alert.innerText = ""
    alert.style.color = ""
    alert.style.background =""
    },500)
}