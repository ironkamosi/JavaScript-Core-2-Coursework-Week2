function highlightWords(paragraph, colours) {
  let content = document.getElementById("content")
  let paragraphEl = document.createElement("p");
  let selectEl = document.createElement("select");
  // Write your code here...

  colours.forEach((element) => {
    let optionEl = document.createElement("option");
    optionEl.innerHTML = element; // creates a new option element 
    selectEl.appendChild(optionEl);
  });
  content.appendChild(selectEl);
  
  let paragraphArr = paragraph.split(" "); // turns paragraph
  paragraphArr.forEach(element => {
    let spanEl = document.createElement("span");
    spanEl.innerHTML = element + " ";
    
     spanEl.addEventListener("click", function () {
       console.log(spanEl);
       console.log(selectEl.value)
       //spanEl.style.backgroundColor = selectEl.value 
    
       if (selectEl.value === "none") { 
         spanEl.style.backgroundColor = " "; 
       } else {
        spanEl.style.backgroundColor = selectEl.value
       }

             //   spanEl.style.backgroundColor = selectEl.value; 

//           spanEl.style.backgroundColour = colour.value;
//             console.log(colour);
//             console.log(colour.value);


       //console.log(selectEl.options[selectEl.selectedIndex])
      
      //  for (const colour of selectEl) {
         
               
      //    }
      //  }
        
       
       })
    paragraphEl.appendChild(spanEl);

     });
  
  content.appendChild(paragraphEl);
  //console.log(content)
}

const paragraph =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur convallis massa ut sem finibus ultrices. Phasellus hendrerit placerat libero non facilisis. Etiam tincidunt ut elit id elementum. Etiam accumsan semper ipsum, ac porttitor ex tempus non. Donec vitae massa condimentum, faucibus magna non, sagittis libero. Phasellus ullamcorper malesuada tellus at egestas. Duis volutpat turpis velit, ut bibendum tellus ornare ac. Nullam feugiat nisi fringilla eleifend scelerisque. Phasellus elit nulla, sodales eget consectetur sed, tincidunt vitae velit. Fusce eget tempus magna, vitae ultrices purus. Proin ac purus tellus. Curabitur rhoncus est quis libero egestas ultrices. Proin viverra a ex sed convallis. Fusce ut orci consectetur, placerat ipsum non, commodo neque. Nulla at dui velit. In ut accumsan libero. Duis ac lacus consectetur, posuere eros nec, aliquet nisl. Quisque sodales fringilla lacinia. Donec hendrerit ornare lectus, nec iaculis justo tincidunt et. Cras a varius libero, ac bibendum est. Aliquam molestie, leo non aliquam lobortis, nulla tortor hendrerit turpis, et ullamcorper magna diam quis elit. Maecenas elit libero, tincidunt sit amet lacinia sit amet, venenatis nec est.";

const colours = ["yellow", "green", "blue", "none"];

highlightWords(paragraph, colours);
