function message(){
    let galinha = document.getElementById("galinha").play()

}

function ssjMensagem(){
    let audioSsj = document.getElementById("audioSsj").play()
}

function ssj2mensagem(){
    let ssj2Msg = document.getElementById("ssj2Msg").play()
}

function Musicao(){
    let musica = document.getElementById("musica").play()
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

    
    setTimeout(seuMadruga2=>{
        let aura1 = document.getElementById("aura1").style.visibility = "hidden"
        let ssjAura = document.getElementById("ssjAura").style.visibility = "hidden"
        let seuMadrugaTF = document.getElementById("seuMadrugaTF").style.visibility = "hidden"
        let seuMadruga = document.getElementById("seuMadruga").style.visibility = "visible"
        let ssjHair = document.getElementById("ssjHair").style.visibility = "hidden"
        let msgSsj = document.getElementById("msgSsj").style.visibility = "hidden"
        let fraseSsj2 = document.getElementById("fraseSsj2").style.visibility = "hidden"
        let ssj2Aura = document.getElementById("ssj2Aura").style.visibility = "hidden"



    },1200)
    
}

function transform(){
    let baseFP = document.getElementById("baseFP").style.visibility = "hidden"
    let transformar = document.getElementById("transformar").style.visibility = "hidden"
    let transformar1 = document.getElementById("transformar1").style.visibility = "visible"
    let destransformar = document.getElementById("destransformar").style.visibility = "visible"
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

    },5500)
}

function transform1(){
    let baseFP = document.getElementById("baseFP").style.visibility = "hidden"
    let ssjAura = document.getElementById("ssjAura").style.visibility = "hidden"
    let transformar1 = document.getElementById("transformar1").style.visibility = "hidden"



    setTimeout(seuMadruga5=>{
        let ssj2TFaudio = document.getElementById("ssj2TFaudio").play()
        let ssj2Aura = document.getElementById("ssj2Aura").style.visibility = "visible"
        let fraseSsj2 = document.getElementById("fraseSsj2").style.visibility = "visible"
    
        },1500)
        setTimeout(seuMadruga6=>{
            let seuMadrugaTF = document.getElementById("seuMadrugaTF").style.visibility = "visible"
            let msgSsj = document.getElementById("msgSsj").style.visibility = "hidden"
    
        },4500)

}