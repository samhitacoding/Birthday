var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");
function new_image()
{
fabric.Image.fromURL("BirthdayImage.jpg",function(Img){
block_Image_object=Img;

block_Image_object.scaleToWidth(700);
block_Image_object.scaleToHeight(510);
block_Image_object.set({
    top:0,
    Bottom:0,

});
  canvas.add(block_Image_object); 

});

}	

function playSound(){
    x.play();	
}    
