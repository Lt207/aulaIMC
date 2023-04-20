console.log("teste do javascript");

function calculaIMC(){
    let peso, altura, resp;
    peso = parseFloat(document.getElementById("edtPeso").value );
    altura = parseFloat(document.getElementById("edtAltura").value);

    resp = peso/ (altura*altura) ;
    if (resp <= 18.5) {
        classificacao = "abaixo do peso";
    }else if (resp <= 24.9){
        classificacao = "peso ideal";
    }else if (resp <= 29.9){
        classificacao = "levemente acima do peso";
    }else {
        classificacao = "programador, termine a tabela";
    }

    document.getElementById("resp").innerText = "O seu IMC e: " + resp +
    " a sua classificação é a seguinte" + classificacao;
    

}