const body = document.querySelector("body"),
      nav = document.querySelector("nav"),
      sidebarOpen = document.querySelector(".sidebarOpen"),
      siderbarClose = document.querySelector(".siderbarClose");

      let getMode = localStorage.getItem("mode");
          if(getMode && getMode === "dark-mode"){
            body.classList.add("dark");
          }

      
//   js code to toggle sidebar
sidebarOpen.addEventListener("click" , () =>{
    nav.classList.add("active");
});

body.addEventListener("click" , e =>{
    let clickedElm = e.target;

    if(!clickedElm.classList.contains("sidebarOpen") && !clickedElm.classList.contains("menu")){
        nav.classList.remove("active");
        
    }
});


 // Select all image containers and the content area
 const imageContainers = document.querySelectorAll('.image-container');
 const contentArea = document.querySelector('.content');
 const contentTitle = contentArea.querySelector('h2');
 const contentDescription = contentArea.querySelector('p');

 // Add hover event listeners to each image container
 imageContainers.forEach(container => {
     container.addEventListener('mouseenter', () => {
         const title = container.getAttribute('data-title');
         const description = container.getAttribute('data-description');

         // Update the content area
         contentTitle.textContent = title;
         contentDescription.textContent = description;
     });
 });



