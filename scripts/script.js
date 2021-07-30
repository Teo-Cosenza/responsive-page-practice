function toggleMobileNavigation(){
    var element = document.getElementById("mobile--navigation");

    if(element.classList.contains("mobile--navigation__open")){
        element.classList.remove("mobile--navigation__open");
    }
    else{
        element.classList.add("mobile--navigation__open");
    }
}

let loaderLogo = document.querySelector('.loadLogos');

window.addEventListener('load', function() {
    loaderLogo.style.display = 'none';
});
