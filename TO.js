let randNum = Math.floor(Math.random()*101);
a = 0

function GN(){
    const Guess_Number =document.getElementById('G_N').value;
    if(Guess_Number < randNum){
        alert("น้อยกว่า")
    }
     else if(Guess_Number > randNum){
        alert("มากกว่า")
     }
     else if(Guess_Number == randNum){
        alert("ถูกต้อง ค่าที่ถูกต้องคือ : "+randNum+"คุณทายไปทั้งหมด :"+a+"ครั้ง")
     }
    a = a+1
}