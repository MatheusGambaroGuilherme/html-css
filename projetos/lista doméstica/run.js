function click(){
    var l1 = document.getElementById("lista")
    var cont = document.getElementById("conteudo")
    var item = document.getElementById("item")
    item.innerHTML = `${cont.value}`
}