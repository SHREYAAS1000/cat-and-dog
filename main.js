img ="";
status = "";
objects = []; //  it is an array
function preload()
{
img = loadImage("dog_cat.jpg");
}

function setup()
{
    canvas = createCanvas(640,420);
    canvas.center();

    objectDetector = ml5.objectDetector("cocossd", modelLoaded); // used to load the cocossd moddel

    document.getElementById("status").innerHTML="Status : Detecting object";
}

function draw()
{
    image(img,0,0,640,420);
   //fill("#FF0000");
   //text("dog", 45,75);
    //noFill();
    //stroke("#FF0000");
    //rect(30,60,450,350);

    //fill("#FF0000");
    //text("cat",320,120);
    //noFill();
    //stroke("#FF0000");
    //rect(300,90,270,320);

    if(status !="")
    {
        for (i = 0; i < objects.length; i++) 
        {
            document.getElementById("status").innerHTML = "Status : Object Detected";

            fill("#FF0000");
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + " " + percent + "%", objects[i].x, objects[i].y);
            noFill();
            stroke("#FF0000");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height)
        }
    }

}

function modelLoaded()
{
    console.log("model is loaded")
    status = true ;
    objectDetector.detect(img,gotresults);

}

function gotresults(error,results)
{
    if (error) {
        console.error(error)
    }
    else {
        console.log(results)
        objects = results // stores all the values of results array into object array
    }
}
