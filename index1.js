
document.querySelector('button').onclick = myClick;



let canvas1 = document.getElementById('canvas1');


let picture1 = canvas1.getContext('2d');
// picture1.globalCompositeOperation = 'destination-over';

function myClick(){
            
  let img3 = new Image();
  img3.crossOrigin = 'anonymous'
  img3.src = '15.jpg';
  img3.onload = function(){
   picture1.drawImage(img3, 0, 0, 2021, 1276);
  }
};