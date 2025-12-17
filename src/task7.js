const arr = [
    [0,1,2,3,4,5,6,7,8,9],
    [10,11,12,13,14,15,16,17,18,19],
    [20,21,22,23,24,25,26,27,28,29]
  ]
  
  // Type your code below this line!
  
  //Agregando un elemento a la fila 2 con push
  console.log("Agregando elemento a fila: ");
  arr[2].push(30);
  console.log(arr);

  //Agregando una fila completa de numeros al array
  console.log("Agregando fila completa de numeros: ");
  arr.push([31,32,33,34,35]);
  console.log(arr);
  
  //Eliminando un elemento de una fila en especifico
  console.log("Eliminando un elemento de una fila en especifico: ");
  arr[3].splice(1,1);
  console.log(arr);

  //Invertir una de las filas sin afectar el resto
  console.log("Invertir una de las filas: ")
  arr[3].reverse();
  console.log(arr);
  
  // Type your code above this line!