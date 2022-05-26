var emailv,textv;

function readform()
{
  
    emailv = document.getElementById("mail").value;
    textv = document.getElementById("feedback").value;
}

document.getElementById("insert").onclick = function(){
    readform();
    firebase
    .database()
    .ref("Feedback_Panel/"+textv)
    .set({
        
        mail_id : emailv,
        feed_back : textv
    })
    alert("Thanks For Your Valueable Feedback...");
   
    document.getElementById("mail").value="";
    document.getElementById("feedback").value="";   
}
