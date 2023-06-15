function carregar() {
    var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
//var hora = 20
msg.innerHTML = `Agora são ${hora} horas.`
if (hora >= 0 && hora < 12 ) {
    //BOM DIA!
    img.scr = 'imagens/manha.jpg'
    document.body.style.background = '#FFC282'
} else if (hora >= 12 && hora < 18) {
    //BOA TARDE!
    img.src = 'imagens/tarde.jpg'
    document.body.style.background = '#8C7248'
} else {
    //BOA NOITE!
    img.src = 'imagens/noite.jpg'
    document.body.style.background = '#222A2D'
}
}
