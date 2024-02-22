/* Menu Drawer */
  //JS for Back to top btn

  const backToTop = document.querySelector("#go-back-top")
  
  window.addEventListener("scroll",function () {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;

    if(scrollPosition > 200){
      backToTop.classList.remove("hidden")
    } else {
      backToTop.classList.add("hidden")
    }
  })

  backToTop.addEventListener("click", function () {

    window.scrollTo({
        top:0,
        behavior : "smooth"
    })
  })