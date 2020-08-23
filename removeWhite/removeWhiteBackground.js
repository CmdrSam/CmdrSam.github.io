var image1 ;
var image2;
function upload1(){
  var imgcanvas1 = document.getElementById('can1');
  var fileinput = document.getElementById("finput1");
  image1 = new SimpleImage(fileinput);
  image1.drawTo(imgcanvas1);
}

function upload2(){
  var imgcanvas2 = document.getElementById('can2');
  var fileinput = document.getElementById("finput2");
  image2 = new SimpleImage(fileinput);
  image2.drawTo(imgcanvas2);
}

function greenScreen(){
  

var imHei = image1.getHeight();
var imWid = image1.getWidth();

  image2.setSize(imWid, imHei)

var output = new SimpleImage(imWid,imHei);
var sizeInput = document.getElementById('sldr');
  var size = sizeInput.value;
for (var pixel of image1.values()){
    var x = pixel.getX();
    var y = pixel.getY();
    if (pixel.getGreen() + pixel.getRed() + pixel.getBlue()>size){
        bgPixel = image2.getPixel(x,y);
        
        output.setPixel(x,y,bgPixel);
    }
    else{
        output.setPixel(x,y,pixel);
    }
}
  
  var canv2 = document.getElementById('can2');
  var ctx = canv2.getContext('2d');
 ctx.clearRect(0,0,canv2.width,canv2.height);
  
  var canv1 = document.getElementById('can1');
  output.drawTo(canv1);
  
}