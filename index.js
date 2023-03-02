
  function DistressActive(){
    document.getElementById('distress_opt').style.display = 'block';
    document.getElementById('excitement_opt').style.display = 'none';
    document.getElementById('satisfied_opt').style.display = 'none';
    document.getElementById('depression_opt').style.display = 'none';
  }

  function ExcitmentActive(){
    document.getElementById('excitement_opt').style.display = 'block';
    document.getElementById('distress_opt').style.display = 'none';
    document.getElementById('satisfied_opt').style.display = 'none';
    document.getElementById('depression_opt').style.display = 'none';
  }

  function ContentmentActive(){
    document.getElementById('satisfied_opt').style.display = 'block';
    document.getElementById('distress_opt').style.display = 'none';
    document.getElementById('excitement_opt').style.display = 'none';
    document.getElementById('depression_opt').style.display = 'none';
  }
  
  function DepressionActive(){
    document.getElementById('depression_opt').style.display = 'block';
    document.getElementById('distress_opt').style.display = 'none';
    document.getElementById('excitement_opt').style.display = 'none';
    document.getElementById('satisfied_opt').style.display = 'none';

  }

  function category(){

    
    document.getElementById('track').style.display = 'block';
    document.getElementById('result').style.display = 'block';


    var distressEle = document.getElementsByName('distress');
    var excitementEle = document.getElementsByName('excitement');
    var contentementEle = document.getElementsByName('contentement');
    var depressionEle = document.getElementsByName('depression');


    for(i = 0; i < distressEle.length; i++) {
        if(distressEle[i].checked)
            
            switch(distressEle[i].value) {
                case 'Annoyed':
                    document.getElementById("result").innerHTML = "If you are feeling " + distressEle[i].value;
                    document.getElementById('track1').href="https://youtu.be/CbalhGNauYY"
                    
                  break;
                case 'Angry':
                    document.getElementById("result").innerHTML = "If you are feeling " + distressEle[i].value;
                    document.getElementById('track1').href="https://youtu.be/de2TdvDaS5A"
                  break;
                case 'Afraid':
                    document.getElementById("result").innerHTML = "If you are feeling " + distressEle[i].value;
                    document.getElementById('track1').href="https://youtu.be/uFhFmjt1qho"
                  break;
                default:
                  // code block
              }
    }

    for(i = 0; i < excitementEle.length; i++) {
        if(excitementEle[i].checked)
            
            switch(excitementEle[i].value) {
                case 'Astonished':
                    document.getElementById("result").innerHTML = "If you are feeling "+ excitementEle[i].value;
                    document.getElementById('track1').href="https://youtu.be/3HM7ir5C2Tg"
                  break;
                case 'Happy':
                    document.getElementById("result").innerHTML = "If you are feeling "+ excitementEle[i].value;
                    document.getElementById('track1').href="https://youtu.be/LFGsZ6ythQQ"
                  break;
                case 'Pleased':
                    document.getElementById("result").innerHTML = "If you are feeling "+ excitementEle[i].value;
                    document.getElementById('track1').href="https://youtu.be/qmc6Q7fz2Jg"
                  break;
                default:
                  // code block
              }
    }

    for(i = 0; i < contentementEle.length; i++) {
        if(contentementEle[i].checked)
            
            switch(contentementEle[i].value) {
                case 'Satisfied':
                    document.getElementById("result").innerHTML = "If you are feeling "+ contentementEle[i].value;
                    document.getElementById('track1').href="https://youtu.be/RCMXO9sBIcU"
                  break;
                case 'Relaxed':
                    document.getElementById("result").innerHTML = "If you are feeling "+ contentementEle[i].value;
                    document.getElementById('track1').href="https://youtu.be/bP9gMpl1gyQ"
                  break;
                case 'Tired':
                    document.getElementById("result").innerHTML = "If you are feeling "+ contentementEle[i].value;
                    document.getElementById('track1').href="https://youtu.be/BiAbVDBfdZw"
                  break;
                default:
                  // code block
              }
    }

    for(i = 0; i < depressionEle.length; i++) {
        if(depressionEle[i].checked)
            
            switch(depressionEle[i].value) {
                case 'Droopy':
                    document.getElementById("result").innerHTML = "If you are feeling "+ depressionEle[i].value;
                    document.getElementById('track1').href="https://youtu.be/lFcSrYw-ARY"
                  break;
                case 'Bored':
                    document.getElementById("result").innerHTML = "If you are feeling "+ depressionEle[i].value;
                    document.getElementById('track1').href="https://youtu.be/In49Gy6UsDc"
                  break;
                case 'Sad':
                    document.getElementById("result").innerHTML = "If you are feeling "+ depressionEle[i].value;
                    document.getElementById('track1').href="https://youtu.be/TqmDn2URAvc"
                  break;
                default:
                  // code block
              }
    }


}

  

