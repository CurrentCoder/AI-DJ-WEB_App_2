var Song1 = "Stephen Sanchez - Until I Found You - Piano Cover by Pianella Piano.mp3";
var Song2 = "JVKE_-_golden_hour_ft_Cat_Burns_I_getmp3.pro_.mp3";
Video = "";

function Preload()
{
    loadSound(Song1, Song2);
}

function setUp()
{
    canvas = createCanvas(0, 0, 640, 420);
    canvas.center();

    Video = createCapture(VIDEO);
    video.hide();
}

function Draw()
{
    image(Video, 0, 0, 640, 420);
}
