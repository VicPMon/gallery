/*Name this external file gallery.js*/

function upDate(previewPic){
    /* In this function you should 
       1) change the url for the background image of the div with the id = "image" 
       to the source file of the preview image*/
    var x ="url(" + previewPic.src + ")"; 
    document.getElementById("message").style.backgroundImage = (x);
       
       /*2) Change the text  of the div with the id = "image" 
       to the alt text of the preview image 
       */
    var y = previewPic.alt;
    document.getElementById("message").innerHTML = y;
    document.getElementById("message").style.color = "white";
    }
   
function unDo(){
        /* In this function you should 
       1) Update the url for the background image of the div with the id = "image" 
       back to the orginal-image.  You can use the css code to see what that original URL was*/
    message.style.backgroundImage = "none";    
   
       /*2) Change the text  of the div with the id = "image" 
       back to the original text.  You can use the html code to see what that original text was
       */
    message.innerHTML = "Hover over an image";
    message.style.color = "black";
           
    }