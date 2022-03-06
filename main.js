https://teachablemachine.withgoogle.com/models/WS6Haefm4/
function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/WS6Haefm4/,modelReady");
}

function modelReady(){
    classifier.classify(gotResults);
}