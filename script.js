document.querySelectorAll(".btn").forEach(button => {

    button.addEventListener("click", function(){

        this.style.transform="scale(.97)";

        setTimeout(()=>{

            this.style.transform="";

        },150);

    });

});
