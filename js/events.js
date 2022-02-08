
//  System no -2 
function makeRed() {
    document.body.style.backgroundColor = 'red';
}


// handle blue butto click by setting function name
 const blueButton = document. getElementById('make-blue-button');

  


   // just set the name of the function
blueButton.onclick = makeBlue;
 
function makeBlue() {
    document.body.style.backgroundColor = 'blue';
}
      

// handle event using anoymous function

const greenButton = document.getElementById('make-green-button');
 
 // anonymous function

    greenButton.onclick = function (){
        document.body.style.backgroundColor = 'green';
    }


    // handle by using add evenlistener
         const goldenButton = document.getElementById('make-goldenrod');
        goldenButton.addEventListener('click',makeGoldenrod )
        function makeGoldenrod(){
            document.body.style.backgroundColor = 'goldenRod'
}
        
// addEventlistener

const hotPinkButton = document.getElementById('make-hotpink');
    hotPinkButton.addEventListener('click', function(){
        document.body.style.backgroundColor = 'hotpink'
    })

    // Direct shortCut

     document.getElementById('make-lightBlue').addEventListener('click', function(){
             document.body.style.backgroundColor = 'lightBlue';
         })