img="";
status="";

function preload()
{
    img1=loadImage("bedroom.jpg");
    img2=loadImage("desk.jpg");
    img3=loadImage("hall.jpg");
    img4=loadImage("fruit_basket.jpg");

}


function setup()
{
    canvas=createCanvas(600,500);
    canvas.center();
    objectDetected=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="indetifying objects";
}

function modelLoaded()
{
    console.log("model loaded");
    status=true;
    objectDetected.detect(img,gotResults);
}

function gotResults(error,results)
{
    if(error)
    {
        console.log(error);
    }

    console.log(results);
}

