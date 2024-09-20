var i=0;
function changer(){
    if(i==0)
    {
        document.getElementById('img1').src="nature2.jpg";
        i=1;
    }
    else if(i==1)
    {
        document.getElementById('img1').src="nature3.jpg";
        i=2;
    }
    else if(i==2){
        document.getElementById('img1').src="mountain.jpg";
        i=0;
    }
    
    setTimeout(() => {
        changer();
    }, 2000);
}