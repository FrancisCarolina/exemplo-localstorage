window.addEventListener("load", (event) => {
    const numVisistas = +localStorage.getItem("visitas");
    const tema = localStorage.getItem("tema");
    if(numVisistas===null){
        localStorage.setItem("visitas", 1);
    }else{
        localStorage.setItem("visitas", numVisistas+1);
    }

    if(tema === 'dark'){
        bodyDark();
    }else{
        bodyWhite();
    }

    document.getElementById("count").innerHTML = "Visitas no site: "+(+numVisistas+1);
});

const temaButton = document.getElementById("mudarTema");

temaButton.addEventListener("click", mudarTema);

function mudarTema(){
    const tema = localStorage.getItem("tema");
    if(tema === null){
        localStorage.setItem("tema", "dark"); 
        bodyDark()
    }else if(tema === "dark"){
        localStorage.setItem("tema", "light");
        bodyWhite();
    }else{
        localStorage.setItem("tema", "dark"); 
        bodyDark()
    }
}

function bodyDark(){
    document.getElementById("body").style.backgroundColor = "black";
    document.getElementById("body").style.color = "white";
}
function bodyWhite(){
    document.getElementById("body").style.backgroundColor = "white";
    document.getElementById("body").style.color = "black";
}