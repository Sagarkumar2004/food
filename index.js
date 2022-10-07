console.log("javacript is runing")
document.querySelector(".menu").addEventListener("click", function(){
    document.querySelector(".navbar").classList.toggle("navgo");
    document.querySelector(".menu").style.display = "none";
  })

  document.querySelector(".cross").addEventListener("click", function(){
    document.querySelector(".navbar").classList.toggle("navgo");
    document.querySelector(".menu").style.display = "block";
    
  })


  document.querySelector(".navList").addEventListener("click", function(){
    document.querySelector(".navbar").classList.toggle("navgo");
    document.querySelector(".menu").style.display = "block";
  })