let numero: number = 200;
let segundonumero: number = 100;

console.log(numero + segundonumero);
let idade: number = 16;
let texto: string = "minha idade é:" + idade;

console.log(texto);

let idadeNova: number = 16;
let textoNovo: string = "minha idade é:" ;

console.log(textoNovo + idadeNova);

let verdadeiro: boolean = true;

console.log(verdadeiro);


let arr: number[] = [1,2,3,4,10,50,60];
console.log(arr);
console.log( "tamanho do array:" + arr.length);
console.log("acessando a posicao do array: " + arr [0 ]);
console.log(arr.indexOf(250));

let arrayTexto: Array<string>;
arrayTexto = ['ab', 'bc', 'cd', ]
console.log(arrayTexto);
console.log(arrayTexto.length);
console.log(arrayTexto.indexOf('ab'));

function exibirTexto(){
    console.log('Exibindo meu Texto')
}
 exibirTexto();

 function exibindoOutroTexto(){
  return "Exibindo Outro Texto";
 }

 
    console.log(exibindoOutroTexto());

    function retornaNumero(): number {
        return 1;
    }

    console.log(retornaNumero()); 

    function retornaTexto(): string{
        return "retornando string";
    }
console.log(retornaTexto());

function soma(a: number, b: number): number {
    return a + b;
}
console.log( "o valor da soma é: " + soma(50, 100));

function multiplicar(a: number, b:number): number{
    return a * b; 
}

console.log("o valor da multiplicaçao é:" + multiplicar(5, 5));

function number(a: number, b:number, c: number) : number{
    return (a + b) * c;
}
console.log("o valor da funçao é: "+ number(5, 5,5) );


function multiplicaçao (a: number,b: number): string {
    return "o resultado da multiplicaçao é:" + (a * b);
}
console.log(multiplicaçao(5,5));
