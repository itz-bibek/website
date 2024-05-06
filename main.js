/*<-------------------------Script for skiils------------------------------>*/

    var tablinks = document.getElementsByClassName("tab-links");
    var tabcontents = document.getElementsByClassName("tab-contents");
    function opentab(tabname){
        for(tablink of tablinks){
            tablink.classList.remove("active-link");
        }
        for(tabcontent of tabcontents){
            tabcontent.classList.remove("active-tab");
        }
        event.currentTarget.classList.add("active-link");
        document.getElementById(tabname).classList.add("active-tab");
    }



/*<-------------------------------Mobile----side-menu---------------------->*/

    var sidemenu = document.getElementById("sidemenu");

    function openmenu(){
        sidemenu.style.right = "0";
    }

    function closemenu(){
        sidemenu.style.right = "-200px";
    }



/*-------------------Form---script-------------------*/

    const scriptURL = 'https://script.google.com/macros/s/AKfycbyclZeZPTA20FlMpDk6pDgKzvPyxnFrMOx8yAnBTSJxlHU_icVVQnpmp5D_D25OabN8SA/exec'
    const form = document.forms['submit-to-google-sheet']
    const msg = document.getElementById("msg")
  
    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            msg.innerHTML = "Feedback Sent Successfuly"
            setTimeout(function(){
                msg.innerHTML = ""
            },5000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
    })


    

/*-----------------------type js for header------------------------------*/

var typed = new Typed('.type-text', {
    strings: ['Novice Developer', 'Web Developer','Novice Developer', 'Novice Developer', 'Web Developer', 'Novice Developer', 'Web Developer', 'Novice Developer'],
    typeSpeed: 70,
  });
