    
    function add(){
        var trs = document.querySelectorAll("input")
        
        var tabela = document.getElementById('data-table');
        var numeroLinhas = 1;
        var linha = tabela.insertRow(numeroLinhas);
        var celula1 = linha.insertCell(0);
        var celula2 = linha.insertCell(1);   
        var celula3 = linha.insertCell(2);
        var celula4 = linha.insertCell(3);

        celula1.innerHTML = trs[0].value;
        celula1.classList.add("description") 
        if(trs[1].value<0){
            celula2.innerHTML = `- R$ ${Number(trs[1].value).toFixed(2).replace(".",",")*-1}`;
            celula2.classList.add('expense')
        }else{
            celula2.innerHTML = `R$ ${Number(trs[1].value).toFixed(2).replace(".",",")}`;
            celula2.classList.add('income')
        }
          let data = trs[2].value.split("-")     
        celula3.innerHTML = `${data[2]}/${data[1]}/${data[0]}`;
        celula3.classList.add("date") 
        celula4.innerHTML =  `<img src="./assets/minus.svg" alt="Remover lançamento">`; 
        
        trs[0].value=''
        trs[1].value=''
        trs[2].value=''
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
