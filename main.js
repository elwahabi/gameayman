var enterButton = document.getElementById('enterButton');
    var output = document.getElementById('outputTxt');
    var remiaing=document.getElementById("numbr");
    var scoree=document.getElementById("score");
    var randomNumber = Math.floor(Math.random()*100)+1;
    console.log(randomNumber)
    var nbr=10;


    
    function random(){
      var input = document.getElementById('userInput').value;
      if(input == randomNumber){
        if(nbr==10 || nbr==9)
        {
          output.innerHTML="You are genius,  "+" number is "+ randomNumber;
  
   
        }
        else{
          output.innerHTML="Good job"+ ", "+ " number is "+ randomNumber;
 
   
        }
       
        //condi
      }
      else if(input>randomNumber && input<100){
        output.innerHTML="You guessed too high!";
        nbr--;
        remiaing.innerHTML=nbr;
      }
      else if(input<randomNumber && input>1){
        output.innerHTML="You guessed too low!";
        nbr--;
        remiaing.innerHTML=nbr;
      }



      else if(input<1){
        output.innerHTML="The number must be between 1 o 100";
      }



      else if(isNaN(input)){
        output.innerHTML="This is not a number";
      }
      else{
        output.innerHTML="Guess a number between 1-100";
      }
      if(nbr==0){
        output.innerHTML="Game over! Sorry, your chances are over.";
        nbr=10;
        remiaing.innerHTML=nbr;
      }
     

    }
 
    btn.addEventListener('click', random);