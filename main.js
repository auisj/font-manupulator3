function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);


}
function modelLoaded() {
    console.log('PoseNet Is Intitialized');
}
function gotPoses(results){

    if(results.length >0)
    {
        console.log(results);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.leftWrist.x;
        difference = floor(leftWristX = rightWristX);

    }
}
function draw(){
    background('#969A97');
    fill('#F90093');
    square( rightWristX, leftWristX , difference);
    textSize(100);
    fill(255);
    text('Ayush', 10, 50);
}
difference = 0;
rightWristX = 10,20,30,40,50;
leftWristX = 10,100,200,300;



