    let prevEl=document.getElementById("prev-el")
   

     let countEl =document.getElementById("count")
     
     let count= 0

     function increment(){
         count += 1
         countEl.textContent = count
     }
    
     function save(){
        let countstr=count + " - "
         prevEl.textContent += countstr
        countEl.textContent=0
        count=0
        
     }
    

    

