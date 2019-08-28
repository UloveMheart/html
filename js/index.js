
// document.getElementById("index_name").style.visibility="hidden"
var in_but = document.getElementById("index_but");
var in_none = document.getElementById("index_none");

document.getElementById("index_expect1").style.visibility="hidden"
document.getElementById("index_expect2").style.visibility="hidden"
document.getElementById("index_none").style.visibility="hidden"
document.getElementById("index_but").style.visibility="hidden"
document.getElementById("index_there").style.visibility="hidden"
setTimeout(div_name,1500);
function div_name()
{
    document.getElementById("index_name").style.visibility="hidden";
    document.getElementById("index_expect1").style.visibility="visible";
    document.getElementById("index_expect2").style.visibility="visible";
    setTimeout(div_e1,1500);
}
function div_e1()
{
    document.getElementById("index_expect2").style.textDecoration="line-through";
    // text-decoration:line-through
    setTimeout(div_e2,1500);
}
function div_e2()
{
    in_none.classList.add('activenone');

    document.getElementById("index_none").style.visibility="visible";
    setTimeout(div_n,1500);
}
function div_n()
{
    in_none.classList.remove('activenone');
    in_but.classList.add('activebut');
    document.getElementById("index_expect1").style.visibility="hidden";
    document.getElementById("index_expect2").style.visibility="hidden";
    document.getElementById("index_none").style.visibility="hidden";
    document.getElementById("index_but").style.visibility="visible";
    setTimeout(div_b,2000);
}
function div_b()
{
    in_but.classList.remove('activebut');
    document.getElementById("index_but").style.visibility="hidden";
    document.getElementById("index_there").style.visibility="visible";
    setTimeout(div_t,6000);
}
function div_t()
{
    document.getElementById("index_there").style.visibility="hidden";
    document.getElementById("index_name").style.visibility="visible";
    setTimeout(div_name,1500);
}