function calcu(){
    var num1=parseFloat(document.getElementById("num1").value);
    var num2=parseFloat(document.getElementById("num2").value);
    var option = document.getElementById("option").value;
    if(option ==="+")
    {
        document.getElementById("result").value=num1+num2;
    }
    else if(option ==="-")
    {
        document.getElementById("result").value=num1-num2;
    }
   else if(option ==="*")
    {
        document.getElementById("result").value=num1*num2;
    }
   else if(option ==="/")
    {
        document.getElementById("result").value=num1/num2;
    }
    else if(option ==="%")
    {
        document.getElementById("result").value=num1%num2;
    }

}