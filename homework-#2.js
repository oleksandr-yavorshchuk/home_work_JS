let N = +prompt ( `Введіть перше значення`, `Ввід`);
while(!Number.isInteger(+N)){
    N = +prompt ( 'Введіть перше значення', 'Ввід');
}
let M = +prompt ( `Введіть друге ціле значення`, `Ввід`);
while(!Number.isInteger(+N)){
    N = +prompt ( 'Введіть друге  значення', 'Ввід');
}

let booleanNumbers = confirm("при додавані значень пропускат парні");
let  sum ;

for (sum = 0; N <= M; N++) {
   if (booleanNumbers && N % 2 == 0)  continue;
    sum += N;
}
alert (sum);
document.writeln
(
`    <p>Введіть перше значення, Ввід ${N} </br>
    Введіть друге  значення, Ввід ${M} </p>
    <p>Пропускати парні: ${booleanNumbers}</p>
     <p>Сумма чисел від N до М дорівнює: ${sum}</p> `
     );
