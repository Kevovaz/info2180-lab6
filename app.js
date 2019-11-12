document.addEventListener("DOMContentLoaded",() => {

let button = document.getElementsByClassName("searchButton");
addButton(button);
});

function addButton(el){
    for(let i=0;i<el.length;i++){
        el[i].addEventListener("click",function (){
            let xhr=new XMLHttpRequest();
            xhr.open("GET","superheroes.php",true);
            xhr.onreadystatechange=function(){
                 if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
                    alert(xhr.responseText);
                 }
            };
            xhr.send();

        });
    }

}