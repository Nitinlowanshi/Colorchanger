const btn = document.querySelector("#botton");
const colorpiker = () => {
    const rondomcolor = Math.floor(Math.random() * 16777215);
    const rondomcode = "#" + rondomcolor.toString(16);
    document.body.style.backgroundColor = rondomcode;
    document.querySelector("#code").innerHTML=rondomcode;
}
btn.addEventListener("click",function(){
    colorpiker();
}
)
colorpiker();