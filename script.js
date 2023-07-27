let isXTurn = true; // Variable para controlar el turno (true para 'x', false para 'o')






var elementosA = [
  document.getElementById("1a"),
  document.getElementById("2a"),
  document.getElementById("3a"),
  document.getElementById("4a"),
  document.getElementById("5a"),
  document.getElementById("6a"),
  document.getElementById("7a"),
  document.getElementById("8a"),
  document.getElementById("9a"),
  0
];


var elementosB = [
  document.getElementById("1b"),
  document.getElementById("2b"),
  document.getElementById("3b"),
  document.getElementById("4b"),
  document.getElementById("5b"),
  document.getElementById("6b"),
  document.getElementById("7b"),
  document.getElementById("8b"),
  document.getElementById("9b"),
  0
];


var elementosC = [
  document.getElementById("1c"),
  document.getElementById("2c"),
  document.getElementById("3c"),
  document.getElementById("4c"),
  document.getElementById("5c"),
  document.getElementById("6c"),
  document.getElementById("7c"),
  document.getElementById("8c"),
  document.getElementById("9c"),
  0
];



var elementosD = [
  document.getElementById("1d"),
  document.getElementById("2d"),
  document.getElementById("3d"),
  document.getElementById("4d"),
  document.getElementById("5d"),
  document.getElementById("6d"),
  document.getElementById("7d"),
  document.getElementById("8d"),
  document.getElementById("9d"),
  0
];


var elementosE = [
  document.getElementById("1e"),
  document.getElementById("2e"),
  document.getElementById("3e"),
  document.getElementById("4e"),
  document.getElementById("5e"),
  document.getElementById("6e"),
  document.getElementById("7e"),
  document.getElementById("8e"),
  document.getElementById("9e"),
  0
];


var elementosF = [
  document.getElementById("1f"),
  document.getElementById("2f"),
  document.getElementById("3f"),
  document.getElementById("4f"),
  document.getElementById("5f"),
  document.getElementById("6f"),
  document.getElementById("7f"),
  document.getElementById("8f"),
  document.getElementById("9f"),
  0
];


var elementosG = [
  document.getElementById("1g"),
  document.getElementById("2g"),
  document.getElementById("3g"),
  document.getElementById("4g"),
  document.getElementById("5g"),
  document.getElementById("6g"),
  document.getElementById("7g"),
  document.getElementById("8g"),
  document.getElementById("9g"),
  0
];


var elementosH = [
  document.getElementById("1h"),
  document.getElementById("2h"),
  document.getElementById("3h"),
  document.getElementById("4h"),
  document.getElementById("5h"),
  document.getElementById("6h"),
  document.getElementById("7h"),
  document.getElementById("8h"),
  document.getElementById("9h"),
  0
];


var elementosJ = [
  document.getElementById("1j"),
  document.getElementById("2j"),
  document.getElementById("3j"),
  document.getElementById("4j"),
  document.getElementById("5j"),
  document.getElementById("6j"),
  document.getElementById("7j"),
  document.getElementById("8j"),
  document.getElementById("9j"),
  0
];












let cont =0;




function clicked(event) {
  // Obtener el ID de la celda clickeada
  const cellId = event.target.id;

  


  console.log(cellId);

  // Verificar si la celda está vacía antes de agregar 'x' u 'o'
  if (event.target.textContent.trim() === '') {
    cont++;

    event.target.textContent = isXTurn ? 'x' : 'o';
    isXTurn = !isXTurn; // Cambiar el turno
  

  // Desactivar todos los botones después del primer clic
  if (cont >= 1) {
    const buttons = document.querySelectorAll('.inner-cell');
    buttons.forEach(button => {
      button.disabled = true;
    });
  }




  // Activar los botones del cuadrante correspondiente
  if (
    cellId === '1a' ||
    cellId === '1b' ||
    cellId === '1c' ||
    cellId === '1d' ||
    cellId === '1e' ||
    cellId === '1f' ||
    cellId === '1g' ||
    cellId === '1h' ||
    cellId === '1j'
  ) {

    if(elementosA[9]>0){

      if(cellId === '1b'){
        for(var i=0; i<9;i++){
          elementosB[i].disabled = false;

        }

      }
      else if(cellId === '1c'){
        for(var i=0; i<9;i++){
          elementosC[i].disabled = false;

        }
      }
      else if(cellId === '1d'){
        for(var i=0; i<9;i++){
          elementosD[i].disabled = false;

        }
      }
      else if(cellId === '1e'){
        for(var i=0; i<9;i++){
          elementosE[i].disabled = false;

        }
      }
      else if(cellId === '1f'){
        for(var i=0; i<9;i++){
          elementosF[i].disabled = false;

        }
      }
      else if(cellId === '1g'){
        for(var i=0; i<9;i++){
          elementosG[i].disabled = false;

        }
      }
      else if(cellId === '1h'){
        for(var i=0; i<9;i++){
          elementosH[i].disabled = false;

        }
      }
      else if(cellId === '1j'){
        for(var i=0; i<9;i++){
          elementosJ[i].disabled = false;

        }
      }
    }
    else{


    for(var i=0;i<9;i++){

    elementosA[i].disabled = false;

    }
  }

 
  
  }


  else if(
    cellId === '2a' ||
    cellId === '2b' ||
    cellId === '2c' ||
    cellId === '2d' ||
    cellId === '2e' ||
    cellId === '2f' ||
    cellId === '2g' ||
    cellId === '2h' ||
    cellId === '2j'
  ){

    if(elementosB[9]>0){

      if(cellId === '2a'){
        for(var i=0; i<9;i++){
          elementosA[i].disabled = false;

        }

      }
      else if(cellId === '2c'){
        for(var i=0; i<9;i++){
          elementosC[i].disabled = false;

        }
      }
      else if(cellId === '2d'){
        for(var i=0; i<9;i++){
          elementosD[i].disabled = false;

        }
      }
      else if(cellId === '2e'){
        for(var i=0; i<9;i++){
          elementosE[i].disabled = false;

        }
      }
      else if(cellId === '2f'){
        for(var i=0; i<9;i++){
          elementosF[i].disabled = false;

        }
      }
      else if(cellId === '2g'){
        for(var i=0; i<9;i++){
          elementosG[i].disabled = false;

        }
      }
      else if(cellId === '2h'){
        for(var i=0; i<9;i++){
          elementosH[i].disabled = false;

        }
      }
      else if(cellId === '2j'){
        for(var i=0; i<9;i++){
          elementosJ[i].disabled = false;

        }
      }
    }
    else{


    for(var i=0;i<9;i++){

    elementosB[i].disabled = false;

    }
  }





  }

  else if(
    cellId === '3a' ||
    cellId === '3b' ||
    cellId === '3c' ||
    cellId === '3d' ||
    cellId === '3e' ||
    cellId === '3f' ||
    cellId === '3g' ||
    cellId === '3h' ||
    cellId === '3j'
  ){

    if(elementosC[9]>0){

      if(cellId === '3a'){
        for(var i=0; i<9;i++){
          elementosA[i].disabled = false;

        }

      }
      else if(cellId === '3b'){
        for(var i=0; i<9;i++){
          elementosB[i].disabled = false;

        }
      }
      else if(cellId === '3d'){
        for(var i=0; i<9;i++){
          elementosD[i].disabled = false;

        }
      }
      else if(cellId === '3e'){
        for(var i=0; i<9;i++){
          elementosE[i].disabled = false;

        }
      }
      else if(cellId === '3f'){
        for(var i=0; i<9;i++){
          elementosF[i].disabled = false;

        }
      }
      else if(cellId === '3g'){
        for(var i=0; i<9;i++){
          elementosG[i].disabled = false;

        }
      }
      else if(cellId === '3h'){
        for(var i=0; i<9;i++){
          elementosH[i].disabled = false;

        }
      }
      else if(cellId === '3j'){
        for(var i=0; i<9;i++){
          elementosJ[i].disabled = false;

        }
      }
    }
    else{


    for(var i=0;i<9;i++){

    elementosC[i].disabled = false;

    }
  }


  }


  else if(
    cellId === '4a' ||
    cellId === '4b' ||
    cellId === '4c' ||
    cellId === '4d' ||
    cellId === '4e' ||
    cellId === '4f' ||
    cellId === '4g' ||
    cellId === '4h' ||
    cellId === '4j'
  ){

    if(elementosD[9]>0){

      if(cellId === '4a'){
        for(var i=0; i<9;i++){
          elementosA[i].disabled = false;

        }

      }
      else if(cellId === '4b'){
        for(var i=0; i<9;i++){
          elementosB[i].disabled = false;

        }
      }
      else if(cellId === '4c'){
        for(var i=0; i<9;i++){
          elementosC[i].disabled = false;

        }
      }
      else if(cellId === '4e'){
        for(var i=0; i<9;i++){
          elementosE[i].disabled = false;

        }
      }
      else if(cellId === '4f'){
        for(var i=0; i<9;i++){
          elementosF[i].disabled = false;

        }
      }
      else if(cellId === '4g'){
        for(var i=0; i<9;i++){
          elementosG[i].disabled = false;

        }
      }
      else if(cellId === '4h'){
        for(var i=0; i<9;i++){
          elementosH[i].disabled = false;

        }
      }
      else if(cellId === '4j'){
        for(var i=0; i<9;i++){
          elementosJ[i].disabled = false;

        }
      }
    }
    else{


    for(var i=0;i<9;i++){

    elementosD[i].disabled = false;

    }
  }


  }


  else if(
    cellId === '5a' ||
    cellId === '5b' ||
    cellId === '5c' ||
    cellId === '5d' ||
    cellId === '5e' ||
    cellId === '5f' ||
    cellId === '5g' ||
    cellId === '5h' ||
    cellId === '5j'
  ){


    if(elementosE[9]>0){

      if(cellId === '5a'){
        for(var i=0; i<9;i++){
          elementosA[i].disabled = false;

        }

      }
      else if(cellId === '5b'){
        for(var i=0; i<9;i++){
          elementosB[i].disabled = false;

        }
      }
      else if(cellId === '5c'){
        for(var i=0; i<9;i++){
          elementosC[i].disabled = false;

        }
      }
      else if(cellId === '5d'){
        for(var i=0; i<9;i++){
          elementosD[i].disabled = false;

        }
      }
      else if(cellId === '5f'){
        for(var i=0; i<9;i++){
          elementosF[i].disabled = false;

        }
      }
      else if(cellId === '5g'){
        for(var i=0; i<9;i++){
          elementosG[i].disabled = false;

        }
      }
      else if(cellId === '5h'){
        for(var i=0; i<9;i++){
          elementosH[i].disabled = false;

        }
      }
      else if(cellId === '5j'){
        for(var i=0; i<9;i++){
          elementosJ[i].disabled = false;

        }
      }
    }
    else{


    for(var i=0;i<9;i++){

    elementosE[i].disabled = false;

    }
  }


  }


  else if(
    cellId === '6a' ||
    cellId === '6b' ||
    cellId === '6c' ||
    cellId === '6d' ||
    cellId === '6e' ||
    cellId === '6f' ||
    cellId === '6g' ||
    cellId === '6h' ||
    cellId === '6j'
  ){

    if(elementosF[9]>0){

      if(cellId === '6a'){
        for(var i=0; i<9;i++){
          elementosA[i].disabled = false;

        }

      }
      else if(cellId === '6b'){
        for(var i=0; i<9;i++){
          elementosB[i].disabled = false;

        }
      }
      else if(cellId === '6c'){
        for(var i=0; i<9;i++){
          elementosC[i].disabled = false;

        }
      }
      else if(cellId === '6d'){
        for(var i=0; i<9;i++){
          elementosD[i].disabled = false;

        }
      }
      else if(cellId === '6e'){
        for(var i=0; i<9;i++){
          elementosE[i].disabled = false;

        }
      }
      else if(cellId === '6g'){
        for(var i=0; i<9;i++){
          elementosG[i].disabled = false;

        }
      }
      else if(cellId === '6h'){
        for(var i=0; i<9;i++){
          elementosH[i].disabled = false;

        }
      }
      else if(cellId === '6j'){
        for(var i=0; i<9;i++){
          elementosJ[i].disabled = false;

        }
      }
    }
    else{


    for(var i=0;i<9;i++){

    elementosF[i].disabled = false;

    }
  }


  }


  else if(
    cellId === '7a' ||
    cellId === '7b' ||
    cellId === '7c' ||
    cellId === '7d' ||
    cellId === '7e' ||
    cellId === '7f' ||
    cellId === '7g' ||
    cellId === '7h' ||
    cellId === '7j'
  ){

    if(elementosG[9]>0){

      if(cellId === '7a'){
        for(var i=0; i<9;i++){
          elementosA[i].disabled = false;

        }

      }
      else if(cellId === '7b'){
        for(var i=0; i<9;i++){
          elementosB[i].disabled = false;

        }
      }
      else if(cellId === '7c'){
        for(var i=0; i<9;i++){
          elementosC[i].disabled = false;

        }
      }
      else if(cellId === '7d'){
        for(var i=0; i<9;i++){
          elementosD[i].disabled = false;

        }
      }
      else if(cellId === '7e'){
        for(var i=0; i<9;i++){
          elementosE[i].disabled = false;

        }
      }
      else if(cellId === '7f'){
        for(var i=0; i<9;i++){
          elementosF[i].disabled = false;

        }
      }
      else if(cellId === '7h'){
        for(var i=0; i<9;i++){
          elementosH[i].disabled = false;

        }
      }
      else if(cellId === '7j'){
        for(var i=0; i<9;i++){
          elementosJ[i].disabled = false;

        }
      }
    }
    else{


    for(var i=0;i<9;i++){

    elementosG[i].disabled = false;

    }
  }


  }


  else if(
    cellId === '8a' ||
    cellId === '8b' ||
    cellId === '8c' ||
    cellId === '8d' ||
    cellId === '8e' ||
    cellId === '8f' ||
    cellId === '8g' ||
    cellId === '8h' ||
    cellId === '8j'
  ){

    if(elementosH[9]>0){

      if(cellId === '8a'){
        for(var i=0; i<9;i++){
          elementosA[i].disabled = false;

        }

      }
      else if(cellId === '8b'){
        for(var i=0; i<9;i++){
          elementosB[i].disabled = false;

        }
      }
      else if(cellId === '8c'){
        for(var i=0; i<9;i++){
          elementosC[i].disabled = false;

        }
      }
      else if(cellId === '8d'){
        for(var i=0; i<9;i++){
          elementosD[i].disabled = false;

        }
      }
      else if(cellId === '8e'){
        for(var i=0; i<9;i++){
          elementosE[i].disabled = false;

        }
      }
      else if(cellId === '8f'){
        for(var i=0; i<9;i++){
          elementosF[i].disabled = false;

        }
      }
      else if(cellId === '8g'){
        for(var i=0; i<9;i++){
          elementosG[i].disabled = false;

        }
      }
      else if(cellId === '8j'){
        for(var i=0; i<9;i++){
          elementosJ[i].disabled = false;

        }
      }
    }
    else{


    for(var i=0;i<9;i++){

    elementosH[i].disabled = false;

    }
  }



  }

  else if(
    cellId === '9a' ||
    cellId === '9b' ||
    cellId === '9c' ||
    cellId === '9d' ||
    cellId === '9e' ||
    cellId === '9f' ||
    cellId === '9g' ||
    cellId === '9h' ||
    cellId === '9j'
  ){

    if(elementosJ[9]>0){

      if(cellId === '9a'){
        for(var i=0; i<9;i++){
          elementosA[i].disabled = false;

        }

      }
      else if(cellId === '9b'){
        for(var i=0; i<9;i++){
          elementosB[i].disabled = false;

        }
      }
      else if(cellId === '9c'){
        for(var i=0; i<9;i++){
          elementosC[i].disabled = false;

        }
      }
      else if(cellId === '9d'){
        for(var i=0; i<9;i++){
          elementosD[i].disabled = false;

        }
      }
      else if(cellId === '9e'){
        for(var i=0; i<9;i++){
          elementosE[i].disabled = false;

        }
      }
      else if(cellId === '9f'){
        for(var i=0; i<9;i++){
          elementosF[i].disabled = false;

        }
      }
      else if(cellId === '9g'){
        for(var i=0; i<9;i++){
          elementosG[i].disabled = false;

        }
      }
      else if(cellId === '9h'){
        for(var i=0; i<9;i++){
          elementosH[i].disabled = false;

        }
      }
    }
    else{


    for(var i=0;i<9;i++){

    elementosJ[i].disabled = false;

    }
  }



  }






  }


  //win condition A

  if ((elementosA[0].textContent.trim() === 'x' && elementosA[1].textContent.trim()==='x' && elementosA[2].textContent.trim() === 'x') ||

  (elementosA[3].textContent.trim() === 'x' && elementosA[4].textContent.trim()==='x' && elementosA[5].textContent.trim() === 'x') ||
  (elementosA[6].textContent.trim() === 'x' && elementosA[7].textContent.trim()==='x' && elementosA[8].textContent.trim() === 'x') ||
  (elementosA[0].textContent.trim() === 'x' && elementosA[3].textContent.trim()==='x' && elementosA[6].textContent.trim() === 'x') ||
  (elementosA[1].textContent.trim() === 'x' && elementosA[4].textContent.trim()==='x' && elementosA[7].textContent.trim() === 'x') ||
  (elementosA[2].textContent.trim() === 'x' && elementosA[5].textContent.trim()==='x' && elementosA[8].textContent.trim() === 'x') ||
  (elementosA[0].textContent.trim() === 'x' && elementosA[4].textContent.trim()==='x' && elementosA[8].textContent.trim() === 'x') ||
  (elementosA[2].textContent.trim() === 'x' && elementosA[4].textContent.trim() ==='x' && elementosA[6].textContent.trim() === 'x')
  
  )
  {

    elementosA[0].style.backgroundColor = "red";
    elementosA[4].style.backgroundColor = "red";
    elementosA[8].style.backgroundColor = "red";
    elementosA[2].style.backgroundColor = "red";
    elementosA[6].style.backgroundColor = "red";

    for(var i=0;i<9;i++){

      elementosA[i].disabled = true;
  
      }


      elementosA[9] = 1;


    





  }

  else if(

    (elementosA[0].textContent.trim() === 'o' && elementosA[1].textContent.trim()==='o' && elementosA[2].textContent.trim() === 'o') ||

    (elementosA[3].textContent.trim() === 'o' && elementosA[4].textContent.trim()==='o' && elementosA[5].textContent.trim() === 'o') ||
    (elementosA[6].textContent.trim() === 'o' && elementosA[7].textContent.trim()==='o' && elementosA[8].textContent.trim() === 'o') ||
    (elementosA[0].textContent.trim() === 'o' && elementosA[3].textContent.trim()==='o' && elementosA[6].textContent.trim() === 'o') ||
    (elementosA[1].textContent.trim() === 'o' && elementosA[4].textContent.trim()==='o' && elementosA[7].textContent.trim() === 'o') ||
    (elementosA[2].textContent.trim() === 'o' && elementosA[5].textContent.trim()==='o' && elementosA[8].textContent.trim() === 'o') ||
    (elementosA[0].textContent.trim() === 'o' && elementosA[4].textContent.trim()==='o' && elementosA[8].textContent.trim() === 'o') ||
    (elementosA[2].textContent.trim() === 'o' && elementosA[4].textContent.trim()==='o' && elementosA[6].textContent.trim() === 'o')

  )
  {
    elementosA[0].style.backgroundColor = "blue";
    elementosA[1].style.backgroundColor = "blue";
    elementosA[2].style.backgroundColor = "blue";
    elementosA[3].style.backgroundColor = "blue";
    elementosA[5].style.backgroundColor = "blue";
    elementosA[6].style.backgroundColor = "blue";
    elementosA[7].style.backgroundColor = "blue";
    elementosA[8].style.backgroundColor = "blue";

    for(var i=0;i<9;i++){

      elementosA[i].disabled = true;
  
      }

      elementosA[9] = 2;

   




  }

  else if(
    (elementosB[0].textContent.trim() === 'x' && elementosB[1].textContent.trim()==='x' && elementosB[2].textContent.trim() === 'x') ||

  (elementosB[3].textContent.trim() === 'x' && elementosB[4].textContent.trim()==='x' && elementosB[5].textContent.trim() === 'x') ||
  (elementosB[6].textContent.trim() === 'x' && elementosB[7].textContent.trim()==='x' && elementosB[8].textContent.trim() === 'x') ||
  (elementosB[0].textContent.trim() === 'x' && elementosB[3].textContent.trim()==='x' && elementosB[6].textContent.trim() === 'x') ||
  (elementosB[1].textContent.trim() === 'x' && elementosB[4].textContent.trim()==='x' && elementosB[7].textContent.trim() === 'x') ||
  (elementosB[2].textContent.trim() === 'x' && elementosB[5].textContent.trim()==='x' && elementosB[8].textContent.trim() === 'x') ||
  (elementosB[0].textContent.trim() === 'x' && elementosB[4].textContent.trim()==='x' && elementosB[8].textContent.trim() === 'x') ||
  (elementosB[2].textContent.trim() === 'x' && elementosB[4].textContent.trim()==='x' && elementosB[6].textContent.trim() === 'x')

  )
  {
    elementosB[0].style.backgroundColor = "red";
    elementosB[4].style.backgroundColor = "red";
    elementosB[8].style.backgroundColor = "red";
    elementosB[2].style.backgroundColor = "red";
    elementosB[6].style.backgroundColor = "red";

    for(var i=0;i<9;i++){

      elementosB[i].disabled = true;
  
      }

      elementosB[9] = 1;


  }

  else if(

    (elementosB[0].textContent.trim() === 'o' && elementosB[1].textContent.trim()==='o' && elementosB[2].textContent.trim() === 'o') ||

    (elementosB[3].textContent.trim() === 'o' && elementosB[4].textContent.trim()==='o' && elementosB[5].textContent.trim() === 'o') ||
    (elementosB[6].textContent.trim() === 'o' && elementosB[7].textContent.trim()==='o' && elementosB[8].textContent.trim() === 'o') ||
    (elementosB[0].textContent.trim() === 'o' && elementosB[3].textContent.trim()==='o' && elementosB[6].textContent.trim() === 'o') ||
    (elementosB[1].textContent.trim() === 'o' && elementosB[4].textContent.trim()==='o' && elementosB[7].textContent.trim() === 'o') ||
    (elementosB[2].textContent.trim() === 'o' && elementosB[5].textContent.trim()==='o' && elementosB[8].textContent.trim() === 'o') ||
    (elementosB[0].textContent.trim() === 'o' && elementosB[4].textContent.trim()==='o' && elementosB[8].textContent.trim() === 'o') ||
    (elementosB[2].textContent.trim() === 'o' && elementosB[4].textContent.trim()==='o' && elementosB[6].textContent.trim() === 'o')

  )
  {
    elementosB[0].style.backgroundColor = "blue";
    elementosB[1].style.backgroundColor = "blue";
    elementosB[2].style.backgroundColor = "blue";
    elementosB[3].style.backgroundColor = "blue";
    elementosB[5].style.backgroundColor = "blue";
    elementosB[6].style.backgroundColor = "blue";
    elementosB[7].style.backgroundColor = "blue";
    elementosB[8].style.backgroundColor = "blue";

    for(var i=0;i<9;i++){

      elementosB[i].disabled = true;
  
      }

      elementosB[9] = 2;

   




  }
  else if(
    (elementosC[0].textContent.trim() === 'x' && elementosC[1].textContent.trim()==='x' && elementosC[2].textContent.trim() === 'x') ||

  (elementosC[3].textContent.trim() === 'x' && elementosC[4].textContent.trim()==='x' && elementosC[5].textContent.trim() === 'x') ||
  (elementosC[6].textContent.trim() === 'x' && elementosC[7].textContent.trim()==='x' && elementosC[8].textContent.trim() === 'x') ||
  (elementosC[0].textContent.trim() === 'x' && elementosC[3].textContent.trim()==='x' && elementosC[6].textContent.trim() === 'x') ||
  (elementosC[1].textContent.trim() === 'x' && elementosC[4].textContent.trim()==='x' && elementosC[7].textContent.trim() === 'x') ||
  (elementosC[2].textContent.trim() === 'x' && elementosC[5].textContent.trim()==='x' && elementosC[8].textContent.trim() === 'x') ||
  (elementosC[0].textContent.trim() === 'x' && elementosC[4].textContent.trim()==='x' && elementosC[8].textContent.trim() === 'x') ||
  (elementosC[2].textContent.trim() === 'x' && elementosC[4].textContent.trim()==='x' && elementosC[6].textContent.trim() === 'x')

  )
  {
    elementosC[0].style.backgroundColor = "red";
    elementosC[4].style.backgroundColor = "red";
    elementosC[8].style.backgroundColor = "red";
    elementosC[2].style.backgroundColor = "red";
    elementosC[6].style.backgroundColor = "red";

    for(var i=0;i<9;i++){

      elementosC[i].disabled = true;
  
      }

      elementosC[9] = 1;


  }

  else if(

    (elementosC[0].textContent.trim() === 'o' && elementosC[1].textContent.trim()==='o' && elementosC[2].textContent.trim() === 'o') ||

    (elementosC[3].textContent.trim() === 'o' && elementosC[4].textContent.trim()==='o' && elementosC[5].textContent.trim() === 'o') ||
    (elementosC[6].textContent.trim() === 'o' && elementosC[7].textContent.trim()==='o' && elementosC[8].textContent.trim() === 'o') ||
    (elementosC[0].textContent.trim() === 'o' && elementosC[3].textContent.trim()==='o' && elementosC[6].textContent.trim() === 'o') ||
    (elementosC[1].textContent.trim() === 'o' && elementosC[4].textContent.trim()==='o' && elementosC[7].textContent.trim() === 'o') ||
    (elementosC[2].textContent.trim() === 'o' && elementosC[5].textContent.trim()==='o' && elementosC[8].textContent.trim() === 'o') ||
    (elementosC[0].textContent.trim() === 'o' && elementosC[4].textContent.trim()==='o' && elementosC[8].textContent.trim() === 'o') ||
    (elementosC[2].textContent.trim() === 'o' && elementosC[4].textContent.trim()==='o' && elementosC[6].textContent.trim() === 'o')

  )
  {
    elementosC[0].style.backgroundColor = "blue";
    elementosC[1].style.backgroundColor = "blue";
    elementosC[2].style.backgroundColor = "blue";
    elementosC[3].style.backgroundColor = "blue";
    elementosC[5].style.backgroundColor = "blue";
    elementosC[6].style.backgroundColor = "blue";
    elementosC[7].style.backgroundColor = "blue";
    elementosC[8].style.backgroundColor = "blue";
   

    for(var i=0;i<9;i++){

      elementosC[i].disabled = true;
  
      }

      elementosC[9] = 2;





  }

  else if(
    (elementosD[0].textContent.trim() === 'x' && elementosD[1].textContent.trim()==='x' && elementosD[2].textContent.trim() === 'x') ||

  (elementosD[3].textContent.trim() === 'x' && elementosD[4].textContent.trim()==='x' && elementosD[5].textContent.trim() === 'x') ||
  (elementosD[6].textContent.trim() === 'x' && elementosD[7].textContent.trim()==='x' && elementosD[8].textContent.trim() === 'x') ||
  (elementosD[0].textContent.trim() === 'x' && elementosD[3].textContent.trim()==='x' && elementosD[6].textContent.trim() === 'x') ||
  (elementosD[1].textContent.trim() === 'x' && elementosD[4].textContent.trim()==='x' && elementosD[7].textContent.trim() === 'x') ||
  (elementosD[2].textContent.trim() === 'x' && elementosD[5].textContent.trim()==='x' && elementosD[8].textContent.trim() === 'x') ||
  (elementosD[0].textContent.trim() === 'x' && elementosD[4].textContent.trim()==='x' && elementosD[8].textContent.trim() === 'x') ||
  (elementosD[2].textContent.trim() === 'x' && elementosD[4].textContent.trim()==='x' && elementosD[6].textContent.trim() === 'x')

  )
  {
    elementosD[0].style.backgroundColor = "red";
    elementosD[4].style.backgroundColor = "red";
    elementosD[8].style.backgroundColor = "red";
    elementosD[2].style.backgroundColor = "red";
    elementosD[6].style.backgroundColor = "red";

    for(var i=0;i<9;i++){

      elementosD[i].disabled = true;
  
      }

      elementosD[9] = 1;


  }

  else if(

    (elementosD[0].textContent.trim() === 'o' && elementosD[1].textContent.trim()==='o' && elementosD[2].textContent.trim() === 'o') ||

    (elementosD[3].textContent.trim() === 'o' && elementosD[4].textContent.trim()==='o' && elementosD[5].textContent.trim() === 'o') ||
    (elementosD[6].textContent.trim() === 'o' && elementosD[7].textContent.trim()==='o' && elementosD[8].textContent.trim() === 'o') ||
    (elementosD[0].textContent.trim() === 'o' && elementosD[3].textContent.trim()==='o' && elementosD[6].textContent.trim() === 'o') ||
    (elementosD[1].textContent.trim() === 'o' && elementosD[4].textContent.trim()==='o' && elementosD[7].textContent.trim() === 'o') ||
    (elementosD[2].textContent.trim() === 'o' && elementosD[5].textContent.trim()==='o' && elementosD[8].textContent.trim() === 'o') ||
    (elementosD[0].textContent.trim() === 'o' && elementosD[4].textContent.trim()==='o' && elementosD[8].textContent.trim() === 'o') ||
    (elementosD[2].textContent.trim() === 'o' && elementosD[4].textContent.trim()==='o' && elementosD[6].textContent.trim() === 'o')

  )
  {
    elementosD[0].style.backgroundColor = "blue";
    elementosD[1].style.backgroundColor = "blue";
    elementosD[2].style.backgroundColor = "blue";
    elementosD[3].style.backgroundColor = "blue";
    elementosD[5].style.backgroundColor = "blue";
    elementosD[6].style.backgroundColor = "blue";
    elementosD[7].style.backgroundColor = "blue";
    elementosD[8].style.backgroundColor = "blue";

    for(var i=0;i<9;i++){

      elementosD[i].disabled = true;
  
      }


      elementosD[9] = 2;

   




  }

  else if(
    (elementosE[0].textContent.trim() === 'x' && elementosE[1].textContent.trim()==='x' && elementosE[2].textContent.trim() === 'x') ||

  (elementosE[3].textContent.trim() === 'x' && elementosE[4].textContent.trim()==='x' && elementosE[5].textContent.trim() === 'x') ||
  (elementosE[6].textContent.trim() === 'x' && elementosE[7].textContent.trim()==='x' && elementosE[8].textContent.trim() === 'x') ||
  (elementosE[0].textContent.trim() === 'x' && elementosE[3].textContent.trim()==='x' && elementosE[6].textContent.trim() === 'x') ||
  (elementosE[1].textContent.trim() === 'x' && elementosE[4].textContent.trim()==='x' && elementosE[7].textContent.trim() === 'x') ||
  (elementosE[2].textContent.trim() === 'x' && elementosE[5].textContent.trim()==='x' && elementosE[8].textContent.trim() === 'x') ||
  (elementosE[0].textContent.trim() === 'x' && elementosE[4].textContent.trim()==='x' && elementosE[8].textContent.trim() === 'x') ||
  (elementosE[2].textContent.trim() === 'x' && elementosE[4].textContent.trim()==='x' && elementosE[6].textContent.trim() === 'x')

  )
  {
    elementosE[0].style.backgroundColor = "red";
    elementosE[4].style.backgroundColor = "red";
    elementosE[8].style.backgroundColor = "red";
    elementosE[2].style.backgroundColor = "red";
    elementosE[6].style.backgroundColor = "red";

    for(var i=0;i<9;i++){

      elementosE[i].disabled = true;
  
      }

      elementosE[9] = 1;


  }

  else if(

    (elementosE[0].textContent.trim() === 'o' && elementosE[1].textContent.trim()==='o' && elementosE[2].textContent.trim() === 'o') ||

    (elementosE[3].textContent.trim() === 'o' && elementosE[4].textContent.trim()==='o' && elementosE[5].textContent.trim() === 'o') ||
    (elementosE[6].textContent.trim() === 'o' && elementosE[7].textContent.trim()==='o' && elementosE[8].textContent.trim() === 'o') ||
    (elementosE[0].textContent.trim() === 'o' && elementosE[3].textContent.trim()==='o' && elementosE[6].textContent.trim() === 'o') ||
    (elementosE[1].textContent.trim() === 'o' && elementosE[4].textContent.trim()==='o' && elementosE[7].textContent.trim() === 'o') ||
    (elementosE[2].textContent.trim() === 'o' && elementosE[5].textContent.trim()==='o' && elementosE[8].textContent.trim() === 'o') ||
    (elementosE[0].textContent.trim() === 'o' && elementosE[4].textContent.trim()==='o' && elementosE[8].textContent.trim() === 'o') ||
    (elementosE[2].textContent.trim() === 'o' && elementosE[4].textContent.trim()==='o' && elementosE[6].textContent.trim() === 'o')

  )
  {
    elementosE[0].style.backgroundColor = "blue";
    elementosE[1].style.backgroundColor = "blue";
    elementosE[2].style.backgroundColor = "blue";
    elementosE[3].style.backgroundColor = "blue";
    elementosE[5].style.backgroundColor = "blue";
    elementosE[6].style.backgroundColor = "blue";
    elementosE[7].style.backgroundColor = "blue";
    elementosE[8].style.backgroundColor = "blue";

    for(var i=0;i<9;i++){

      elementosE[i].disabled = true;
  
      }


      elementosE[9] = 2;

   




  }

  else if(
    (elementosF[0].textContent.trim() === 'x' && elementosF[1].textContent.trim()==='x' && elementosF[2].textContent.trim() === 'x') ||

  (elementosF[3].textContent.trim() === 'x' && elementosF[4].textContent.trim()==='x' && elementosF[5].textContent.trim() === 'x') ||
  (elementosF[6].textContent.trim() === 'x' && elementosF[7].textContent.trim()==='x' && elementosF[8].textContent.trim() === 'x') ||
  (elementosF[0].textContent.trim() === 'x' && elementosF[3].textContent.trim()==='x' && elementosF[6].textContent.trim() === 'x') ||
  (elementosF[1].textContent.trim() === 'x' && elementosF[4].textContent.trim()==='x' && elementosF[7].textContent.trim() === 'x') ||
  (elementosF[2].textContent.trim() === 'x' && elementosF[5].textContent.trim()==='x' && elementosF[8].textContent.trim() === 'x') ||
  (elementosF[0].textContent.trim() === 'x' && elementosF[4].textContent.trim()==='x' && elementosF[8].textContent.trim() === 'x') ||
  (elementosF[2].textContent.trim() === 'x' && elementosF[4].textContent.trim()==='x' && elementosF[6].textContent.trim() === 'x')

  )
  {
    elementosF[0].style.backgroundColor = "red";
    elementosF[4].style.backgroundColor = "red";
    elementosF[8].style.backgroundColor = "red";
    elementosF[2].style.backgroundColor = "red";
    elementosF[6].style.backgroundColor = "red";

    for(var i=0;i<9;i++){

      elementosF[i].disabled = true;
  
      }

      elementosF[9] = 1;


  }

  else if(

    (elementosF[0].textContent.trim() === 'o' && elementosF[1].textContent.trim()==='o' && elementosF[2].textContent.trim() === 'o') ||

    (elementosF[3].textContent.trim() === 'o' && elementosF[4].textContent.trim()==='o' && elementosF[5].textContent.trim() === 'o') ||
    (elementosF[6].textContent.trim() === 'o' && elementosF[7].textContent.trim()==='o' && elementosF[8].textContent.trim() === 'o') ||
    (elementosF[0].textContent.trim() === 'o' && elementosF[3].textContent.trim()==='o' && elementosF[6].textContent.trim() === 'o') ||
    (elementosF[1].textContent.trim() === 'o' && elementosF[4].textContent.trim()==='o' && elementosF[7].textContent.trim() === 'o') ||
    (elementosF[2].textContent.trim() === 'o' && elementosF[5].textContent.trim()==='o' && elementosF[8].textContent.trim() === 'o') ||
    (elementosF[0].textContent.trim() === 'o' && elementosF[4].textContent.trim()==='o' && elementosF[8].textContent.trim() === 'o') ||
    (elementosF[2].textContent.trim() === 'o' && elementosF[4].textContent.trim()==='o' && elementosF[6].textContent.trim() === 'o')

  )
  {
    elementosF[0].style.backgroundColor = "blue";
    elementosF[1].style.backgroundColor = "blue";
    elementosF[2].style.backgroundColor = "blue";
    elementosF[3].style.backgroundColor = "blue";
    elementosF[5].style.backgroundColor = "blue";
    elementosF[6].style.backgroundColor = "blue";
    elementosF[7].style.backgroundColor = "blue";
    elementosF[8].style.backgroundColor = "blue";


    for(var i=0;i<9;i++){

      elementosF[i].disabled = true;
  
      }

      elementosF[9] = 2;




   




  }

  else if(
    (elementosG[0].textContent.trim() === 'x' && elementosG[1].textContent.trim()==='x' && elementosG[2].textContent.trim() === 'x') ||

  (elementosG[3].textContent.trim() === 'x' && elementosG[4].textContent.trim()==='x' && elementosG[5].textContent.trim() === 'x') ||
  (elementosG[6].textContent.trim() === 'x' && elementosG[7].textContent.trim()==='x' && elementosG[8].textContent.trim() === 'x') ||
  (elementosG[0].textContent.trim() === 'x' && elementosG[3].textContent.trim()==='x' && elementosG[6].textContent.trim() === 'x') ||
  (elementosG[1].textContent.trim() === 'x' && elementosG[4].textContent.trim()==='x' && elementosG[7].textContent.trim() === 'x') ||
  (elementosG[2].textContent.trim() === 'x' && elementosG[5].textContent.trim()==='x' && elementosG[8].textContent.trim() === 'x') ||
  (elementosG[0].textContent.trim() === 'x' && elementosG[4].textContent.trim()==='x' && elementosG[8].textContent.trim() === 'x') ||
  (elementosG[2].textContent.trim() === 'x' && elementosG[4].textContent.trim()==='x' && elementosG[6].textContent.trim() === 'x')

  )
  {
    elementosG[0].style.backgroundColor = "red";
    elementosG[4].style.backgroundColor = "red";
    elementosG[8].style.backgroundColor = "red";
    elementosG[2].style.backgroundColor = "red";
    elementosG[6].style.backgroundColor = "red";

    for(var i=0;i<9;i++){

      elementosG[i].disabled = true;
  
      }

      elementosG[9] = 1;


  }

  else if(

    (elementosG[0].textContent.trim() === 'o' && elementosG[1].textContent.trim()==='o' && elementosG[2].textContent.trim() === 'o') ||

    (elementosG[3].textContent.trim() === 'o' && elementosG[4].textContent.trim()==='o' && elementosG[5].textContent.trim() === 'o') ||
    (elementosG[6].textContent.trim() === 'o' && elementosG[7].textContent.trim()==='o' && elementosG[8].textContent.trim() === 'o') ||
    (elementosG[0].textContent.trim() === 'o' && elementosG[3].textContent.trim()==='o' && elementosG[6].textContent.trim() === 'o') ||
    (elementosG[1].textContent.trim() === 'o' && elementosG[4].textContent.trim()==='o' && elementosG[7].textContent.trim() === 'o') ||
    (elementosG[2].textContent.trim() === 'o' && elementosG[5].textContent.trim()==='o' && elementosG[8].textContent.trim() === 'o') ||
    (elementosG[0].textContent.trim() === 'o' && elementosG[4].textContent.trim()==='o' && elementosG[8].textContent.trim() === 'o') ||
    (elementosG[2].textContent.trim() === 'o' && elementosG[4].textContent.trim()==='o' && elementosG[6].textContent.trim() === 'o')

  )
  {
    elementosG[0].style.backgroundColor = "blue";
    elementosG[1].style.backgroundColor = "blue";
    elementosG[2].style.backgroundColor = "blue";
    elementosG[3].style.backgroundColor = "blue";
    elementosG[5].style.backgroundColor = "blue";
    elementosG[6].style.backgroundColor = "blue";
    elementosG[7].style.backgroundColor = "blue";
    elementosG[8].style.backgroundColor = "blue";


    for(var i=0;i<9;i++){

      elementosG[i].disabled = true;
  
      }

      elementosG[9] = 2;

   




  }

  else if(
    (elementosH[0].textContent.trim() === 'x' && elementosH[1].textContent.trim()==='x' && elementosH[2].textContent.trim() === 'x') ||

  (elementosH[3].textContent.trim() === 'x' && elementosH[4].textContent.trim()==='x' && elementosH[5].textContent.trim() === 'x') ||
  (elementosH[6].textContent.trim() === 'x' && elementosH[7].textContent.trim()==='x' && elementosH[8].textContent.trim() === 'x') ||
  (elementosH[0].textContent.trim() === 'x' && elementosH[3].textContent.trim()==='x' && elementosH[6].textContent.trim() === 'x') ||
  (elementosH[1].textContent.trim() === 'x' && elementosH[4].textContent.trim()==='x' && elementosH[7].textContent.trim() === 'x') ||
  (elementosH[2].textContent.trim() === 'x' && elementosH[5].textContent.trim()==='x' && elementosH[8].textContent.trim() === 'x') ||
  (elementosH[0].textContent.trim() === 'x' && elementosH[4].textContent.trim()==='x' && elementosH[8].textContent.trim() === 'x') ||
  (elementosH[2].textContent.trim() === 'x' && elementosH[4].textContent.trim()==='x' && elementosH[6].textContent.trim() === 'x')

  )
  {
    elementosH[0].style.backgroundColor = "red";
    elementosH[4].style.backgroundColor = "red";
    elementosH[8].style.backgroundColor = "red";
    elementosH[2].style.backgroundColor = "red";
    elementosH[6].style.backgroundColor = "red";

    for(var i=0;i<9;i++){

      elementosH[i].disabled = true;
  
      }

      elementosH[9] = 1;


  }

  else if(

    (elementosH[0].textContent.trim() === 'o' && elementosH[1].textContent.trim()==='o' && elementosH[2].textContent.trim() === 'o') ||

    (elementosH[3].textContent.trim() === 'o' && elementosH[4].textContent.trim()==='o' && elementosH[5].textContent.trim() === 'o') ||
    (elementosH[6].textContent.trim() === 'o' && elementosH[7].textContent.trim()==='o' && elementosH[8].textContent.trim() === 'o') ||
    (elementosH[0].textContent.trim() === 'o' && elementosH[3].textContent.trim()==='o' && elementosH[6].textContent.trim() === 'o') ||
    (elementosH[1].textContent.trim() === 'o' && elementosH[4].textContent.trim()==='o' && elementosH[7].textContent.trim() === 'o') ||
    (elementosH[2].textContent.trim() === 'o' && elementosH[5].textContent.trim()==='o' && elementosH[8].textContent.trim() === 'o') ||
    (elementosH[0].textContent.trim() === 'o' && elementosH[4].textContent.trim()==='o' && elementosH[8].textContent.trim() === 'o') ||
    (elementosH[2].textContent.trim() === 'o' && elementosH[4].textContent.trim()==='o' && elementosH[6].textContent.trim() === 'o')

  )
  {
    elementosH[0].style.backgroundColor = "blue";
    elementosH[1].style.backgroundColor = "blue";
    elementosH[2].style.backgroundColor = "blue";
    elementosH[3].style.backgroundColor = "blue";
    elementosH[5].style.backgroundColor = "blue";
    elementosH[6].style.backgroundColor = "blue";
    elementosH[7].style.backgroundColor = "blue";
    elementosH[8].style.backgroundColor = "blue";


    for(var i=0;i<9;i++){

      elementosH[i].disabled = true;
  
      }

      elementosH[9] = 2;

   




  }

  else if(
    (elementosJ[0].textContent.trim() === 'x' && elementosJ[1].textContent.trim()==='x' && elementosJ[2].textContent.trim() === 'x') ||

  (elementosJ[3].textContent.trim() === 'x' && elementosJ[4].textContent.trim()==='x' && elementosJ[5].textContent.trim() === 'x') ||
  (elementosJ[6].textContent.trim() === 'x' && elementosJ[7].textContent.trim()==='x' && elementosJ[8].textContent.trim() === 'x') ||
  (elementosJ[0].textContent.trim() === 'x' && elementosJ[3].textContent.trim()==='x' && elementosJ[6].textContent.trim() === 'x') ||
  (elementosJ[1].textContent.trim() === 'x' && elementosJ[4].textContent.trim()==='x' && elementosJ[7].textContent.trim() === 'x') ||
  (elementosJ[2].textContent.trim() === 'x' && elementosJ[5].textContent.trim()==='x' && elementosJ[8].textContent.trim() === 'x') ||
  (elementosJ[0].textContent.trim() === 'x' && elementosJ[4].textContent.trim()==='x' && elementosJ[8].textContent.trim() === 'x') ||
  (elementosJ[2].textContent.trim() === 'x' && elementosJ[4].textContent.trim()==='x' && elementosJ[6].textContent.trim() === 'x')

  )
  {
    elementosJ[0].style.backgroundColor = "red";
    elementosJ[4].style.backgroundColor = "red";
    elementosJ[8].style.backgroundColor = "red";
    elementosJ[2].style.backgroundColor = "red";
    elementosJ[6].style.backgroundColor = "red";


    for(var i=0;i<9;i++){

      elementosJ[i].disabled = true;
  
      }

      elementosJ[9] = 1;


  }

  else if(

    (elementosJ[0].textContent.trim() === 'o' && elementosJ[1].textContent.trim()==='o' && elementosJ[2].textContent.trim() === 'o') ||

    (elementosJ[3].textContent.trim() === 'o' && elementosJ[4].textContent.trim()==='o' && elementosJ[5].textContent.trim() === 'o') ||
    (elementosJ[6].textContent.trim() === 'o' && elementosJ[7].textContent.trim()==='o' && elementosJ[8].textContent.trim() === 'o') ||
    (elementosJ[0].textContent.trim() === 'o' && elementosJ[3].textContent.trim()==='o' && elementosJ[6].textContent.trim() === 'o') ||
    (elementosJ[1].textContent.trim() === 'o' && elementosJ[4].textContent.trim()==='o' && elementosJ[7].textContent.trim() === 'o') ||
    (elementosJ[2].textContent.trim() === 'o' && elementosJ[5].textContent.trim()==='o' && elementosJ[8].textContent.trim() === 'o') ||
    (elementosJ[0].textContent.trim() === 'o' && elementosJ[4].textContent.trim()==='o' && elementosJ[8].textContent.trim() === 'o') ||
    (elementosJ[2].textContent.trim() === 'o' && elementosJ[4].textContent.trim()==='o' && elementosJ[6].textContent.trim() === 'o')

  )
  {
    elementosJ[0].style.backgroundColor = "blue";
    elementosJ[1].style.backgroundColor = "blue";
    elementosJ[2].style.backgroundColor = "blue";
    elementosJ[3].style.backgroundColor = "blue";
    elementosJ[5].style.backgroundColor = "blue";
    elementosJ[6].style.backgroundColor = "blue";
    elementosJ[7].style.backgroundColor = "blue";
    elementosJ[8].style.backgroundColor = "blue";


    for(var i=0;i<9;i++){

      elementosJ[i].disabled = true;
  
      }


      elementosJ[9] = 2;

   




  }
  else if (
    (elementosA[0].textContent.trim() === 'x' || elementosA[0].textContent.trim() === 'o') &&
    (elementosA[1].textContent.trim() === 'x' || elementosA[1].textContent.trim() === 'o') &&
    (elementosA[2].textContent.trim() === 'x' || elementosA[2].textContent.trim() === 'o') &&
    (elementosA[3].textContent.trim() === 'x' || elementosA[3].textContent.trim() === 'o') &&
    (elementosA[4].textContent.trim() === 'x' || elementosA[4].textContent.trim() === 'o') &&
    (elementosA[5].textContent.trim() === 'x' || elementosA[5].textContent.trim() === 'o') &&
    (elementosA[6].textContent.trim() === 'x' || elementosA[6].textContent.trim() === 'o') &&
    (elementosA[7].textContent.trim() === 'x' || elementosA[7].textContent.trim() === 'o') &&
    (elementosA[8].textContent.trim() === 'x' || elementosA[8].textContent.trim() === 'o') &&
    elementosA[9] === 0
  ) 
  {

  
  elementosA[9] =3;

  for(var i=0;i<9;i++){

    elementosA[i].disabled = true;
    elementosA[i].style.backgroundColor = "green";


    }


}

else if((elementosB[0].textContent.trim() === 'x' || elementosB[0].textContent.trim() === 'o') && (elementosB[1].textContent.trim() === 'x' || elementosB[1].textContent.trim() === 'o') &&  (elementosB[2].textContent.trim() === 'x' || elementosB[2].textContent.trim() === 'o') && 
(elementosB[3].textContent.trim() === 'x' || elementosB[3].textContent.trim() === 'o') &&  (elementosB[4].textContent.trim() === 'x' || elementosB[4].textContent.trim() === 'o') &&  (elementosB[5].textContent.trim() === 'x' || elementosB[5].textContent.trim() === 'o') && 
(elementosB[6].textContent.trim() === 'x' || elementosB[6].textContent.trim() === 'o') &&  (elementosB[7].textContent.trim() === 'x' || elementosB[7].textContent.trim() === 'o') && (elementosB[8].textContent.trim() === 'x' || elementosB[8].textContent.trim() === 'o')
&& elementosB[9] ===0 ){

elementosB[9] =3;

for(var i=0;i<9;i++){

  elementosB[i].disabled = true;
  elementosB[i].style.backgroundColor = "green";


  }


}
else if((elementosC[0].textContent.trim() === 'x' || elementosC[0].textContent.trim() === 'o') && (elementosC[1].textContent.trim() === 'x' || elementosC[1].textContent.trim() === 'o') &&  (elementosC[2].textContent.trim() === 'x' || elementosC[2].textContent.trim() === 'o') && 
(elementosC[3].textContent.trim() === 'x' || elementosC[3].textContent.trim() === 'o') &&  (elementosC[4].textContent.trim() === 'x' || elementosC[4].textContent.trim() === 'o') &&  (elementosC[5].textContent.trim() === 'x' || elementosC[5].textContent.trim() === 'o') && 
(elementosC[6].textContent.trim() === 'x' || elementosC[6].textContent.trim() === 'o') &&  (elementosC[7].textContent.trim() === 'x' || elementosC[7].textContent.trim() === 'o') && (elementosC[8].textContent.trim() === 'x' || elementosC[8].textContent.trim() === 'o')
&& elementosC[9]===0 ){

elementosC[9] =3;

for(var i=0;i<9;i++){

  elementosC[i].disabled = true;
  elementosC[i].style.backgroundColor = "green";


  }


}

else if((elementosD[0].textContent.trim() === 'x' || elementosD[0].textContent.trim() === 'o') && (elementosD[1].textContent.trim() === 'x' || elementosD[1].textContent.trim() === 'o') &&  (elementosD[2].textContent.trim() === 'x' || elementosD[2].textContent.trim() === 'o') && 
(elementosD[3].textContent.trim() === 'x' || elementosD[3].textContent.trim() === 'o') &&  (elementosD[4].textContent.trim() === 'x' || elementosD[4].textContent.trim() === 'o') &&  (elementosD[5].textContent.trim() === 'x' || elementosD[5].textContent.trim() === 'o') && 
(elementosD[6].textContent.trim() === 'x' || elementosD[6].textContent.trim() === 'o') &&  (elementosD[7].textContent.trim() === 'x' || elementosD[7].textContent.trim() === 'o') && (elementosD[8].textContent.trim() === 'x' || elementosD[8].textContent.trim() === 'o')
&& elementosD[9] ===0 ){

elementosD[9]=3;

for(var i=0;i<9;i++){

  elementosD[i].disabled = true;
  elementosD[i].style.backgroundColor = "green";


  }


}

else if((elementosE[0].textContent.trim() === 'x' || elementosE[0].textContent.trim() === 'o') && (elementosE[1].textContent.trim() === 'x' || elementosE[1].textContent.trim() === 'o') &&  (elementosE[2].textContent.trim() === 'x' || elementosE[2].textContent.trim() === 'o') && 
(elementosE[3].textContent.trim() === 'x' || elementosE[3].textContent.trim() === 'o') &&  (elementosE[4].textContent.trim() === 'x' || elementosE[4].textContent.trim() === 'o') &&  (elementosE[5].textContent.trim() === 'x' || elementosE[5].textContent.trim() === 'o') && 
(elementosE[6].textContent.trim() === 'x' || elementosE[6].textContent.trim() === 'o') &&  (elementosE[7].textContent.trim() === 'x' || elementosE[7].textContent.trim() === 'o') && (elementosE[8].textContent.trim() === 'x' || elementosE[8].textContent.trim() === 'o')
&& elementosE[9] ===0 ){

elementosE[9] =3;

for(var i=0;i<9;i++){

  elementosE[i].disabled = true;
  elementosE[i].style.backgroundColor = "green";


  }


}
else if((elementosF[0].textContent.trim() === 'x' || elementosF[0].textContent.trim() === 'o') && (elementosF[1].textContent.trim() === 'x' || elementosF[1].textContent.trim() === 'o') &&  (elementosF[2].textContent.trim() === 'x' || elementosF[2].textContent.trim() === 'o') && 
(elementosF[3].textContent.trim() === 'x' || elementosF[3].textContent.trim() === 'o') &&  (elementosF[4].textContent.trim() === 'x' || elementosF[4].textContent.trim() === 'o') &&  (elementosF[5].textContent.trim() === 'x' || elementosF[5].textContent.trim() === 'o') && 
(elementosF[6].textContent.trim() === 'x' || elementosF[6].textContent.trim() === 'o') &&  (elementosF[7].textContent.trim() === 'x' || elementosF[7].textContent.trim() === 'o') && (elementosF[8].textContent.trim() === 'x' || elementosF[8].textContent.trim() === 'o')
&& elementosF[9]===0 ){

elementosF[9] =3;

for(var i=0;i<9;i++){

  elementosF[i].disabled = true;
  elementosF[i].style.backgroundColor = "green";


  }


}
else if((elementosG[0].textContent.trim() === 'x' || elementosG[0].textContent.trim() === 'o') && (elementosG[1].textContent.trim() === 'x' || elementosG[1].textContent.trim() === 'o') &&  (elementosG[2].textContent.trim() === 'x' || elementosG[2].textContent.trim() === 'o') && 
(elementosG[3].textContent.trim() === 'x' || elementosG[3].textContent.trim() === 'o') &&  (elementosG[4].textContent.trim() === 'x' || elementosG[4].textContent.trim() === 'o') &&  (elementosG[5].textContent.trim() === 'x' || elementosG[5].textContent.trim() === 'o') && 
(elementosG[6].textContent.trim() === 'x' || elementosG[6].textContent.trim() === 'o') &&  (elementosG[7].textContent.trim() === 'x' || elementosG[7].textContent.trim() === 'o') && (elementosG[8].textContent.trim() === 'x' || elementosG[8].textContent.trim() === 'o')
&& elementosG[9]===0 ){

elementosG[9] =3;

for(var i=0;i<9;i++){

  elementosG[i].disabled = true;
  elementosG[i].style.backgroundColor = "green";


  }


}
else if((elementosH[0].textContent.trim() === 'x' || elementosH[0].textContent.trim() === 'o') && (elementosH[1].textContent.trim() === 'x' || elementosH[1].textContent.trim() === 'o') &&  (elementosH[2].textContent.trim() === 'x' || elementosH[2].textContent.trim() === 'o') && 
(elementosH[3].textContent.trim() === 'x' || elementosH[3].textContent.trim() === 'o') &&  (elementosH[4].textContent.trim() === 'x' || elementosH[4].textContent.trim() === 'o') &&  (elementosH[5].textContent.trim() === 'x' || elementosH[5].textContent.trim() === 'o') && 
(elementosH[6].textContent.trim() === 'x' || elementosH[6].textContent.trim() === 'o') &&  (elementosH[7].textContent.trim() === 'x' || elementosH[7].textContent.trim() === 'o') && (elementosH[8].textContent.trim() === 'x' || elementosH[8].textContent.trim() === 'o')
&& elementosH[9] ===0 ){

elementosH[9] = 3;

for(var i=0;i<9;i++){

  elementosH[i].disabled = true;
  elementosH[i].style.backgroundColor = "green";


  }


}
else if((elementosJ[0].textContent.trim() === 'x' || elementosJ[0].textContent.trim() === 'o') && (elementosJ[1].textContent.trim() === 'x' || elementosJ[1].textContent.trim() === 'o') &&  (elementosJ[2].textContent.trim() === 'x' || elementosJ[2].textContent.trim() === 'o') && 
(elementosJ[3].textContent.trim() === 'x' || elementosJ[3].textContent.trim() === 'o') &&  (elementosJ[4].textContent.trim() === 'x' || elementosJ[4].textContent.trim() === 'o') &&  (elementosJ[5].textContent.trim() === 'x' || elementosJ[5].textContent.trim() === 'o') && 
(elementosJ[6].textContent.trim() === 'x' || elementosJ[6].textContent.trim() === 'o') &&  (elementosJ[7].textContent.trim() === 'x' || elementosJ[7].textContent.trim() === 'o') && (elementosJ[8].textContent.trim() === 'x' || elementosJ[8].textContent.trim() === 'o')
&& elementosJ[9] === 0 ){

elementosJ[9] =3;

for(var i=0;i<9;i++){

  elementosJ[i].disabled = true;
  elementosJ[i].style.backgroundColor = "green";


  }


}

















  if((elementosA[9]=== 1 && elementosB[9] ===1 && elementosC[9] ===1) ||
  (elementosD[9]=== 1 && elementosE[9] ===1 && elementosF[9] ===1) ||
  (elementosG[9]=== 1 && elementosH[9] ===1 && elementosJ[9] ===1) ||

  (elementosA[9]=== 1 && elementosD[9] ===1 && elementosG[9] ===1) ||
  (elementosB[9]=== 1 && elementosE[9] ===1 && elementosH[9] ===1) ||
  (elementosC[9]=== 1 && elementosF[9] ===1 && elementosJ[9] ===1) ||

  (elementosA[9]=== 1 && elementosE[9] ===1 && elementosJ[9] ===1) ||
  (elementosG[9]=== 1 && elementosE[9] ===1 && elementosC[9] ===1) 



  )

  {
    alert("Ha ganado el jugador x");


    for(var i=0 ; i<9 ; i++){

      elementosA[i].disabled = true;
      elementosB[i].disabled = true;
      elementosC[i].disabled = true;
      elementosD[i].disabled = true;
      elementosE[i].disabled = true;
      elementosF[i].disabled = true;
      elementosG[i].disabled = true;
      elementosH[i].disabled = true;
      elementosJ[i].disabled = true;

    }

  }


  else if(
    (elementosA[9]=== 2 && elementosB[9] ===2 && elementosC[9] ===2) ||
    (elementosD[9]=== 2 && elementosE[9] ===2 && elementosF[9] ===2) ||
    (elementosG[9]=== 2 && elementosH[9] ===2 && elementosJ[9] ===2) ||
  
    (elementosA[9]=== 2 && elementosD[9] ===2 && elementosG[9] ===2) ||
    (elementosB[9]=== 2 && elementosE[9] ===2 && elementosH[9] ===2) ||
    (elementosC[9]=== 2 && elementosF[9] ===2 && elementosJ[9] ===2) ||
  
    (elementosA[9]=== 2 && elementosE[9] ===2 && elementosJ[9] ===2) ||
    (elementosG[9]=== 2 && elementosE[9] ===2 && elementosC[9] ===2)
  )
  {
    alert("Ha ganado el jugador o");
    for(var i=0 ; i<9 ; i++){

      elementosA[i].disabled = true;
      elementosB[i].disabled = true;
      elementosC[i].disabled = true;
      elementosD[i].disabled = true;
      elementosE[i].disabled = true;
      elementosF[i].disabled = true;
      elementosG[i].disabled = true;
      elementosH[i].disabled = true;
      elementosJ[i].disabled = true;

    }


  }

  //empate


  console.log("A " + elementosA[9] +"\n");
  console.log( "B " + elementosB[9] +"\n");
  console.log( "C " + elementosC[9] +"\n");
  console.log("D " + elementosD[9] +"\n");
  console.log("E " + elementosE[9] +"\n");
  console.log( "F " + elementosF[9] +"\n");
  console.log("G " + elementosG[9] +"\n");
  console.log("H " + elementosH[9] +"\n");
  console.log("J " +  elementosJ[9] +"\n");
  console.log("\n")











  

  


}



 







  


// Obtener referencia al botón por su ID
const restartButton = document.getElementById('restart');

// Agregar el evento de clic al botón
restartButton.addEventListener('click', function() {
 
  for(var i=0;i<9;i++){
    elementosA[i].textContent ='';
    elementosA[i].disabled =false;

    elementosB[i].textContent ='';
    elementosB[i].disabled =false;

    elementosC[i].textContent ='';
    elementosC[i].disabled =false;

    elementosD[i].textContent ='';
    elementosD[i].disabled =false;

    elementosE[i].textContent ='';
    elementosE[i].disabled =false;

    elementosF[i].textContent ='';
    elementosF[i].disabled =false;

    elementosG[i].textContent ='';
    elementosG[i].disabled =false;

    elementosH[i].textContent ='';
    elementosH[i].disabled =false;

    elementosJ[i].textContent ='';
    elementosJ[i].disabled =false;

    elementosA[i].style.backgroundColor = "transparent";
    elementosB[i].style.backgroundColor = "transparent";
    elementosC[i].style.backgroundColor = "transparent";
    elementosD[i].style.backgroundColor = "transparent";
    elementosE[i].style.backgroundColor = "transparent";
    elementosF[i].style.backgroundColor = "transparent";
    elementosG[i].style.backgroundColor = "transparent";
    elementosH[i].style.backgroundColor = "transparent";
    elementosJ[i].style.backgroundColor = "transparent";



  }


  elementosA[9] =0;
  elementosB[9] =0;
  elementosC[9] =0;
  elementosD[9] =0;
  elementosE[9] =0;
  elementosF[9] =0;
  elementosG[9] =0;
  elementosH[9] =0;
  elementosJ[9] =0;

  isXTurn = true;

  cont =0;

});









// Agregar el evento de clic a cada botón
const buttons = document.querySelectorAll('.inner-cell');
buttons.forEach(button => {
  button.addEventListener('click', clicked);
});



