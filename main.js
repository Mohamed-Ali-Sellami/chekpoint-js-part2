/* 1/Fonctions de manipulation de chaînes */


//Inverser une chaîne//
function inverser(s) {
var s = 'Gomycode';
var rev = s.split('').reverse().join('');     // split ((divise))     reverse(te9leb)   join(tlase9)
console.log(rev);

}


//compter le nombre de caractere dans une chaine 

function count(str) {
   return str.length ;
   console.log(str);
}


//mettre premier caractere en majuscule 


function strUcFirst(a) {
var texte = 'texte';
 return strUcFirst(texte);


}
console.log(texte);

/*Fonctions des tableaux */

//max d'un tableau//

function max(tab) {
var tab=[0];
for (var i = 1; i < tab.length; i++) {
    if (tab[i] > max) {
        max = tab[i];
    }
}
return max;
}
console.log("Le max est :", max);


//min d'un tableau//
function min(tab){
var tab=[0];
for (var i = 1; i < tab.length; i++) {
    if (tab[i] < min) {
        min = tab[i];
    }
}
return min;
}
console.log("Le min est :", min);
//somme tab//
function somme(tab) {
var somme =0 ;

for (i=0 ; i<length.tab ;i++) {
    somme += tab[i] ;
}
return somme;

}
console.log("La Somme est :", somme);



/*

function filter tableaux

*/



/*Fonction mathematique */


//calcul factoriel//
function fact(nbr){
    var i ;
    var nbr; 
    var f ;
    for(i = 1; i <= nbr; i++)  
    {
      f = f * i;   
    }  
    return f;
  }
  console.log(fact(nbr));

  //nombre premier//
  function isPrime(num) {

    var num ;
    var i ;
    if (num <= 1) 
    return false;
    
    for (var i = 2; i < num; i++) {
        if (num % i === 0) {
        return false; 
        }
        else 
        return true; 
}
}

//fibonacci//
function fib(n)
{
    let a = 0, b = 1, c, i;
    if( n == 0)
        return a;
    for(i = 2; i <= n; i++)
    {
    c = a + b;
    a = b;
    b = c;
    }
    return b;
}




