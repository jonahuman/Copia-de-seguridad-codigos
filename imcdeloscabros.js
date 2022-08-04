    function saltarlinea()  {

        document.write("<br>");
        document.write("<br>");
        document.write("<br>");

} 

    function imprimir(frase) {

        document.write(frase)
        saltarlinea();

}

    function calcularImc(peso,altura,nombre) {

        imc = peso / (altura * altura)
        imprimir("El imc calculado de " + nombre + " es " + imc);
        
}
        
    calcularImc(68,1.71, "flerxay");
    calcularImc(80,1.74, "christian");
