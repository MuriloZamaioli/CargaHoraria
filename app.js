function fnCalcular(){
    let valorHora = document.getElementById("valorHora").value
    let horaTrabalhada = document.getElementById("horaTrabalhada").value
    if(horaTrabalhada<=44){
        let total = valorHora*horaTrabalhada
        document.getElementById("resultado").value = "R$"+total
    }
    else{
        let extra = valorHora*(horaTrabalhada-44)*1.5
        let total = valorHora*44 + extra
        document.getElementById("resultado").value = "R$"+total
    }
}