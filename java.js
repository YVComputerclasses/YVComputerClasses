
function or()
{
    var us = document.getElementById("log").value;
    var pw = document.getElementById("pas").value;

    if(us == "YV" && pw == "Y@V")
    {
        alert("Admin Login Successfully");
        window.open("adminh.html");
    }
    else
    {
        alert("Admin Pless Enter Valid Id Our Password !");
    }
}
function check()
{
    var use = document.getElementById("login").value;
    var pwd = document.getElementById("password").value;

    if(use == "Dipesh" && pwd == "DK123")
    {
        alert("Student Login Successfully");
        window.open("dipeshh.html");
        // alert("પહેલા બાકી રહેલી ફી ભરો પછીજ તમે તમરી આઈડી વાપરી સકશો.");  
    }
    else if(use == "Riya" && pwd == "Raa123")
    {
        alert("Student Login Successfully");
        window.open("riyaph.html");
    }
    else if(use == "Parth" && pwd == "PP123")
    {
        alert("Student Login Successfully");
        window.open("parthph.html");
    }
    else if(use == "Kundan" && pwd =="KR123")
    {
        alert("Student Login Successfully");
        window.open("kundanh.html");
    }
    else if(use == "Vikash" && pwd == "VR123")
    {
        alert("Student Login Successfully");
        window.open("vikashh.html");
    }
    else
    {
        alert("Student Pless Enter Valid Id Our Password !");
    }
}

function check1()
{
    var rn1 = document.getElementById("rno").value;
    var cn1 = document.getElementById("cno").value;

    if(rn1 == "442831" && cn1 == "164873")
    {
        alert("Certificate Is Verfy");
    }
    else if(rn1 == "442831" && cn1 == "190516")
    {
        alert("Certificate Is Verfy");
    }
    else    
    {
        alert("Student Pless Enter Velid register Our Certificate No !");
    }
}
function wait()
{
    alert("પરીક્ષા ની તારીખ ના દિવસ થી તમે સર્ટિફિકેટ & માર્કશીટ ડાઉનલોડ કરી સકો છો");
} 
function logout(){
        let text = "Are You Sourse";
        if (confirm(text) == true) {
          window.close();
        } 
      }