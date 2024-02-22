/* Menu Drawer */
  //JS for Back to top btn

  const backToTop = document.querySelector("#go-back-top")
  console.log(backToTop)
//   const scrollPosition = window.scrollY || document.body.scrollTop;
  console.log(window.scrollY)
  backToTop.addEventListener("scroll",function () {
    if(window.scrollY > 200){
      backToTop.classList.add("block")
    } else {
      backToTop.classList.remove("hidden")
    }
  })

  backToTop.addEventListener("click", function () {
     backToTop.scrollTo({
    top: 0,
    behavior: "smooth"
    }) 
    // document.body.scrollTop = 0;
    // document.documentElement.scrollTop = 0
  })