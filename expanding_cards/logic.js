console.log("hey ayush how are you hope so you are fine");
const panels = document.querySelectorAll('.panels');
console.log(panels);
panels.forEach((panel)=>{
    panel.classList.remove('active');
    
})
panels.forEach((panel)=>{
    panel.addEventListener('click',function(){
        removeAcitveClass();
        panel.classList.add('active');
    })

})

function removeAcitveClass(){
    panels.forEach((panel)=>{
        panel.classList.remove('active');
        
    })

}