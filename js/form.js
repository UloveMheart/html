function changeInfo(code,name,detail,count){
    var string1 = name.value;
    var string2 = gender.value;
    var string3 = email.value;
    var string4 = phone.value;
    var string5 = comment.value;
    document.getElementById('form').action="workServlet?action=alterInfo&name="+string1+"&gender="+string2+"&email="+string3+"&phone="+string4+"";
    document.getElementById("form").submit();

    alert(':'+name);
}