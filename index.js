

        document.querySelector('.btn').onclick = myClick;
        let canvas = document.getElementById('canvas');
        let picture = canvas.getContext('2d');
        let text = canvas.getContext('2d');
        // text.globalCompositeOperation = 'destination-over';
        function myClick(){
                    let img1 = new Image();
                    img1.crossOrigin = 'anonymous'
               img1.src = '14.jpg'; 
               img1.onload = function(){
                 picture.drawImage(img1, 0, 0, 2021, 1276);
                 let font  = new FontFace('Shrift', 'url(Rubik-Regular.ttf)');
                 font.load().then(function() {
                  document.fonts.add(font);
                  text.font = "normal 100px Shrift";
                 let a = document.querySelector('.name').value;
               let c = document.querySelector('.otchestvo').value;
               let d = document.querySelector('.surname').value;
               text.fillText(a, 110, 890);
               text.fillText(c, 110, 1020);
               text.fillText(d, 110, 1150);
               });
               let img2 = new Image();

      
        //       let b = document.querySelector('.number').value;
        //           //   img2.crossOrigin = 'anonymous'
        //             img2.src = 'https://barcode.tec-it.com/barcode.ashx?data=' + b + '&code=EAN13&unit=Fit&dpi=600&imagetype=Gif&rotation=0&color=000000&bgcolor=FFFFFF&qunit=Mm&quiet=0&download=true';
        //             img2.onload = function(){
        //             picture.drawImage(img2, 1300, 870, 650, 300);
        //    };
                    
               };
                 
};

function download(){
    let image = canvas.toDataURL('image/png', 1);
    let link = document.createElement("a");
    link.href = image;
    link.download = "image.png";
    link.click();
}

document.querySelector(".load").addEventListener("click", download)


  



      
    //   img2.onload = function(){
    //   let b = document.querySelector('.number').value;
    //         // img2.crossOrigin = 'anonymous'
    //         img2.src = 'https://barcode.tec-it.com/barcode.ashx?data=' + b + '&code=EAN13&unit=Fit&dpi=600&imagetype=Gif&rotation=0&color=000000&bgcolor=FFFFFF&qunit=Mm&quiet=0&download=true';
    //         picture.drawImage(img2, 600, 102, 180, 65);
            
    //     }
       
      
//       function myClick(){
            
//         var img7 = new Image();
//         var img8 = new Image();
//         var img9 = new Image();

//       //  img1.crossOrigin = 'anonymous'
//   img1.src = 'canvas_600dpi.png'; 
//   img1.onload = function(){
//     picture.drawImage(img1, 100, 60, 2021, 1276);
//     const font  = new FontFace('Shrift', 'url(Rubik-Regular.ttf)');
//     font.load().then(function() {
//      document.fonts.add(font);
//      text.font = "40px Shrift";
//     let a1 = document.querySelector('.name').value;
//   let c1 = document.querySelector('.otchestvo').value;
//   let d1 = document.querySelector('.surname').value;
//   text.fillText(a1, 140, 380);
//   text.fillText(c1, 140, 420);
//   text.fillText(d1, 140, 460);
//   })
// }
      
  
//   img2.onload = function(){
//   let b = document.querySelector('.number').value;
//         // img2.crossOrigin = 'anonymous'
//         img2.src = 'https://barcode.tec-it.com/barcode.ashx?data=' + b + '&code=EAN13&unit=Fit&dpi=600&imagetype=Gif&rotation=0&color=000000&bgcolor=FFFFFF&qunit=Mm&quiet=0&download=true';
//         picture.drawImage(img2, 600, 102, 180, 65);
        
//     }
   
//   };
    
   

    

//     import express from 'express';
// const app = express();

// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// });



// document.querySelector('button').onclick = myClick;
//         var canvas = document.getElementById('canvas');
//         let picture = canvas.getContext('2d');
//         const url = "http://cards.nekrasovka.ru/91e12f6a-de1b-4efd-82c5-a083776b2740.jpg";
// // const image = new Image();
// // image.src = url;
       
        
//         function myClick(){
//             var img1 = new Image();
//             // img1.src = url;
//         // img1.crossOrigin = "Anonymous";
//         // img1.src = url + "?not-from-cache-please";        
//         // img1.crossOrigin = 'anonymous'
//         img1.src = 'http://cards.nekrasovka.ru/91e12f6a-de1b-4efd-82c5-a083776b2740.jpg'; 
//         img1.onload = function(){
//             let a = document.querySelector('.name').value;
//             let c = document.querySelector('.otchestvo').value;
//             let d = document.querySelector('.surname').value;
//           picture.drawImage(img1, 100, 60, 700, 450);
//           picture.fillText(a, 180, 250);
//             picture.fillText(c, 180, 270);
//             picture.fillText(d, 180, 290);
//         }
//         var img2 = new Image();
//         // img2.crossOrigin = 'anonymous'
//         let b = document.querySelector('.number').value;
//         img2.src = 'https://barcode.tec-it.com/barcode.ashx?data=' + b + '&code=EAN13';
//         img2.onload = function(){
//               picture.drawImage(img2, 600, 102, 180, 65);
//           }
            
//         };
         
//         function download(){
//             const image = canvas.toDataURL('image/png', 1);
//             const link = document.createElement('a');
//             link.href = image;
//             link.download = "image.png";
//             link.click();
//         }
     
//         document.querySelector(".load").addEventListener("click", download)





//         const app = express();

// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*');

//     res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
//     next();

//     app.options('*', (req, res) => {
//         // allowed XHR methods  
//         res.header('Access-Control-Allow-Methods', 'GET, PATCH, PUT, POST, DELETE, OPTIONS');
//         res.send();
//     });
// });




   












