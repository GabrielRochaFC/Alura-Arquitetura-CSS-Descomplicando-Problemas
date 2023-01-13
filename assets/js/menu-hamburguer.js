function alteraVisibilidadeMenu(){
    let menuLista = document.getElementsByClassName("menu__lista")
    // console.log(menuLista[0])
    if (menuLista[0].style.display === 'none') {
        menuLista[0].style.display = 'block'
    } else {
        menuLista[0].style.display = 'none'
    }
}