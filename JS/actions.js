    
    function add(){
        let desc= document.getElementById('descript')
        let val= document.getElementById('value')
        let date= document.getElementById('date')
        let tabela = document.getElementById('data-table')       
        let linha = document.createElement('tr')
       
        var trans = [desc.value,val.value,date.value,`<img src="./assets/minus.svg" alt="Remover lançamento">`]  
        
        for(var i=0;i<4;i++){
            let cell = document.createElement('td')
            cell.innerHTML= trans[i]
            
            switch(i){
               case 0:
                   cell.setAttribute("class","description")
                   cell.innerHTML= trans[i]
               break
               case 1:
                   if(trans[i]<0){
                    cell.setAttribute("class","expense")
                    cell.innerHTML= `- R$ ${Number(trans[i]*-1).toFixed(2).replace('.',',')}`
                   }else{
                    cell.setAttribute("class","income")
                    cell.innerHTML= `R$ ${Number(trans[i]).toFixed(2).replace('.',',')}`
                   }               
               break
               case 2:
                    cell.setAttribute("class","date")
                    cell.innerHTML= trans[i]
                break
                default:
                    cell.innerHTML= trans[i]
                break

            }
        
            linha.appendChild(cell)
        }
        tabela.appendChild(linha)
        clear()
        closeModel()
    }
          
   
   
   function openModel(){
        let modal =document.querySelector('.modal-overlay')
        modal.classList.add('active')
    }
    function closeModel(){
        let modal =document.querySelector('.modal-overlay')
        modal.classList.remove('active')
        
    }
    function clear(){
        document.getElementById('descript').value=''
        document.getElementById('value').value=''
        document.getElementById('date').value=''
    }
