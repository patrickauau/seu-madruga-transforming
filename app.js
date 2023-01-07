function message(){
    let galinha = document.getElementById("galinha").play()

}

function ssjMensagem(){
    let audioSsj = document.getElementById("audioSsj").play()
}

function ssj2mensagem(){
    let ssj2Msg = document.getElementById("ssj2Msg").play()
}

function ssj3mensagem(){
    let ssj3Msg = document.getElementById("ssj3Msg").play()
}

function Musicao(){
    let musica = document.getElementById("musica").play()
    musica.currentTime = 0;
    let fusaomusica = document.getElementById("fusaomusica")
    fusaomusica.pause()

}

function fp(){
    let baseFP = document.getElementById("baseFP").style.visibility = "hidden"
    let transformar = document.getElementById("transformar").style.visibility = "hidden"
    let destransformar = document.getElementById("destransformar").style.visibility = "visible"
    let audioBaseFP = document.getElementById("audioBaseFP").play()
    let transformar1 = document.getElementById("transformar1").style.visibility = "hidden"
    setTimeout(seuMadruga=>{
        let aura1 = document.getElementById("aura1").style.visibility = "visible"

    },1800)
    setTimeout(seuMadruga1=>{
        let voz = document.getElementById("voz").play()

    },2200)
    


}

function destransform(){
    let baseFP = document.getElementById("baseFP").style.visibility = "visible"
    let transformar = document.getElementById("transformar").style.visibility = "visible"
    let destransformar = document.getElementById("destransformar").style.visibility = "hidden"
    let audioDestransforma = document.getElementById("audioDestransforma").play()
    let transformar1 = document.getElementById("transformar1").style.visibility = "hidden"
    let transformar2 = document.getElementById("transformar2").style.visibility = "hidden"
    let musicaPica = document.getElementById("musicaPica").style.visibility = "visible"
    
    
    setTimeout(seuMadruga2=>{
        let aura1 = document.getElementById("aura1").style.visibility = "hidden"
        let ssjAura = document.getElementById("ssjAura").style.visibility = "hidden"
        let seuMadrugaTF = document.getElementById("seuMadrugaTF").style.visibility = "hidden"
        let seuMadruga = document.getElementById("seuMadruga").style.visibility = "visible"
        let ssjHair = document.getElementById("ssjHair").style.visibility = "hidden"
        let msgSsj = document.getElementById("msgSsj").style.visibility = "hidden"
        let fraseSsj2 = document.getElementById("fraseSsj2").style.visibility = "hidden"
        let ssj2Aura = document.getElementById("ssj2Aura").style.visibility = "hidden"
        let madrugassj3 = document.getElementById("madrugassj3").style.visibility = "hidden"
        let madruves = document.getElementById("madruves").style.visibility = "hidden"
        let madruveshair = document.getElementById("madruveshair").style.visibility = "hidden"
        let madruvesaura = document.getElementById("madruvesaura").style.visibility = "hidden"



    },1200)
    
}

function transform(){
    let baseFP = document.getElementById("baseFP").style.visibility = "hidden"
    let transformar = document.getElementById("transformar").style.visibility = "hidden"
    let atasanar = document.getElementById("atasanar").play()
    setTimeout(seuMadruga3=>{
    let audioBaseFP = document.getElementById("audioBaseFP").play()

    },4500)
    setTimeout(seuMadruga4=>{
        let auraSom = document.getElementById("auraSom").play()
        let ssjAura = document.getElementById("ssjAura").style.visibility = "visible"
        let seuMadrugaTF = document.getElementById("seuMadrugaTF").style.visibility = "visible"
        let seuMadruga = document.getElementById("seuMadruga").style.visibility = "hidden"
        let ssjHair = document.getElementById("ssjHair").style.visibility = "visible"
        let msgSsj = document.getElementById("msgSsj").style.visibility = "visible"
        let transformar1 = document.getElementById("transformar1").style.visibility = "visible"
        let destransformar = document.getElementById("destransformar").style.visibility = "visible"

    },5500)
}

function transform1(){
    let baseFP = document.getElementById("baseFP").style.visibility = "hidden"
    let ssjAura = document.getElementById("ssjAura").style.visibility = "hidden"
    let transformar1 = document.getElementById("transformar1").style.visibility = "hidden"
    let destransformar = document.getElementById("destransformar").style.visibility = "hidden"



    setTimeout(seuMadruga5=>{
        let ssj2TFaudio = document.getElementById("ssj2TFaudio").play()
        let ssj2Aura = document.getElementById("ssj2Aura").style.visibility = "visible"
        let fraseSsj2 = document.getElementById("fraseSsj2").style.visibility = "visible"
        let transformar2 = document.getElementById("transformar2").style.visibility = "visible"
        let destransformar = document.getElementById("destransformar").style.visibility = "visible"
    
        },1500)
        setTimeout(seuMadruga6=>{
            let seuMadrugaTF = document.getElementById("seuMadrugaTF").style.visibility = "visible"
            let msgSsj = document.getElementById("msgSsj").style.visibility = "hidden"
    
        },4500)

}

function transform2(){
    let ssj2Aura = document.getElementById("ssj2Aura").style.visibility = "hidden"
    let madruga3 = document.getElementById("madruga3").play()
    let msgSsj = document.getElementById("msgSsj").style.visibility = "hidden"
    let fraseSsj2 = document.getElementById("fraseSsj2").style.visibility = "hidden"
    let destransformar = document.getElementById("destransformar").style.visibility = "hidden"
    let message = document.getElementById("mensagem").style.visibility = "hidden"
    let transformar2 = document.getElementById("transformar2").style.visibility = "hidden"

    setTimeout(seuMadruga7 => {
        let madrugassj3 = document.getElementById("madrugassj3").style.visibility = "visible"
        let ssj2Aura = document.getElementById("ssj2Aura").style.visibility = "visible"
        let fraseSsj3 = document.getElementById("fraseSsj3").style.visibility = "visible"
        let destransformar = document.getElementById("destransformar").style.visibility = "visible"
        let seuMadrugaTF = document.getElementById("seuMadrugaTF").style.visibility = "hidden"
        let ssjHair = document.getElementById("ssjHair").style.visibility = "hidden"
        let fusao = document.getElementById("fusao").style.visibility = "visible"


    }, 20000);
    
}

function fundir(){
    let madrugafundir = document.getElementById("madrugafundir").style.visibility = "visible"
    let chavesfundir = document.getElementById("chavesfundir").style.visibility = "visible"
    let madrugassj3 = document.getElementById("madrugassj3").style.visibility = "hidden"
    let ssj2Aura = document.getElementById("ssj2Aura").style.visibility = "hidden"
    let fraseSsj3 = document.getElementById("fraseSsj3").style.visibility = "hidden"
    let fusao = document.getElementById("fusao").style.visibility = "hidden" 
    let madrugafusionado = document.getElementById("madrugafusionado").play()
    let mensagem = document.getElementById("mensagem").style.visibility = "hidden"
    let destransformar = document.getElementById("destransformar").style.visibility = "hidden"
    let musicaPica = document.getElementById("musicaPica").style.visibility = "hidden"
    let musica = document.getElementById("musica")
    musica.pause()

    let fusaomusica = document.getElementById("fusaomusica")
    fusaomusica.play()
    fusaomusica.loop = true;
    fusaomusica.currentTime = 0;
    


    setTimeout(aparecerEfeito=> {
        let efeito = document.getElementById("efeito").style.visibility = "visible"
        let madrugafundir = document.getElementById("madrugafundir").style.visibility = "hidden"
        let chavesfundir = document.getElementById("chavesfundir").style.visibility = "hidden"
        
        
    }, 9300);

    setTimeout(aparecerFusao => {
        let efeito = document.getElementById("efeito").style.visibility = "hidden"
        let madruves = document.getElementById("madruves").style.visibility = "visible"
    }, 22300);

    setTimeout(aura5 => {
        
        let audioBaseFP = document.getElementById("audioBaseFP").play()
    }, 28000);
    setTimeout( virarSsj => {
        let madruveshair = document.getElementById("madruveshair").style.visibility = "visible"
        let madruvesaura = document.getElementById("madruvesaura").style.visibility = "visible"
        let destransformar = document.getElementById("destransformar").style.visibility = "visible"
    }, 29500);
    

}

