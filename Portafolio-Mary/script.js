let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu()
{
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar()
{
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades()
{
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 600)
    {
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("programming");
        habilidades[1].classList.add("softwaretesting");
        habilidades[2].classList.add("softwareenginnering");
        habilidades[3].classList.add("java");
        habilidades[4].classList.add("htmlcss");
        habilidades[5].classList.add("javascript");
        habilidades[6].classList.add("dataanalysis");
        habilidades[7].classList.add("scrummaster");
        habilidades[8].classList.add("communication");
        habilidades[9].classList.add("teamwork");
        habilidades[10].classList.add("creativity");
        habilidades[11].classList.add("dedication");
        habilidades[12].classList.add("projectmanagement");
        habilidades[13].classList.add("problemsolving");
        habilidades[14].classList.add("leadership");
        habilidades[15].classList.add("adaptability");
    }
}


//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function()
{
    efectoHabilidades();
} 