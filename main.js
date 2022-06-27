var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

function new_image()
{
fabric.Image.fromURL(get_Image,function(Img){
block_Image_object=Img;

block_Image_object.scaleToWidth(700);
block_Image_object.scaleToheight(510);
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