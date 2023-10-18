document.addEventListener('DOMContentLoaded', function() {
    // Your JavaScript code here
  
    // const element = document.getElementsByClassName("text-flick");
    const element = ['Front-end Developer', 'Python Developer', 'Web Designer'];
    
    for(let i=0;i<element.length;i++){
        setInterval(() => {
            document.getElementById("text").innerHTML = element[i];
        }, 4000);
    }


});
