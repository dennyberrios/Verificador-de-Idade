function verificar(){
    var data= new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if(fano.value.length == 0 || Number(fano.value) > ano){
        alert('[ERRO] Verifique os dados e tente novamente!')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        //res.innerHTML = `Idade calculada ${idade}`
        var genero= ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if(fsex[0].checked){
            genero='Homem'
            if(idade >= 0 && idade < 10){
                img.setAttribute('src','./img/menino.jpg')
            }else if(idade < 21){
                img.setAttribute('src','./img/jovemH.jpg')
            }else if(idade < 50){
                img.setAttribute('src','./img/homem.jpg')
            }else{
                img.setAttribute('src','./img/idoso.jpg')
            }
        }else if(fsex[1].checked){
            genero='Mulher'
            if(idade >= 0 && idade < 10){
                img.setAttribute('src','./img/menina.jpg')
            }else if(idade < 21){
                img.setAttribute('src','./img/jovemM.jpg')
            }else if(idade < 50){
                img.setAttribute('src','./img/mulher.jpg')
            }else{
                img.setAttribute('src','./img/idosa.jpg')
            }
        }
        res.innerHTML=`Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }

}