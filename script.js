//your JS code here. If required.
  document.addEventListener("DOMContentLoaded" , function (){
            let container = document.querySelector(".container");
            
            for(let i=0  ; i<800 ; i++)
            {
                let pixel= document.createElement("div");
                pixel.classList.add("box");
                container.appendChild(pixel);

                pixel.addEventListener("mouseover" , ()=>{
                pixel.style.background="red";
            });
            pixel.addEventListener("mouseout" , ()=>{

                setTimeout(()=>{
                    pixel.style.background="grey";
                },1000);
                
            });
            }
           
        });
        