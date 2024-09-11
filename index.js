const links = document.querySelectorAll("#Header ul li a");

links.forEach(link => {
    link.addEventListener("click", function() {
        links.forEach(link => {
            link.parentElement.classList.remove("active");
        })
        this.parentElement.classList.add("active");
   })
})