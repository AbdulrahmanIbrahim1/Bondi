


document.addEventListener("keypress" , event =>{
  if (event.code === "KeyW"){
    // window.alert("donee")
    document.getElementsByClassName("main-btn")[1].style.cssText ="margin-bottom:150px; transition:3s;"
  }
  if (event.code === "KeyS"){
    // window.alert("donee")
    document.getElementsByClassName("main-btn")[1].style.cssText ="margin-bottom:-150px; transition:3s;"
  }
  if (event.code === "KeyD"){
    // window.alert("donee")
    document.getElementsByClassName("main-btn")[1].style.cssText ="margin-left:150px; transition:3s;"
  }
  if (event.code === "KeyA"){
    // window.alert("donee")
    document.getElementsByClassName("main-btn")[1].style.cssText ="margin-right:150px; transition:3s;"
  }
  // console.log(event.code)
})

