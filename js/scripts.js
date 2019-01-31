function Gerar(){
  	
	  	//Receber o valor de campos a serem gerados
	  	camp = document.getElementById('TxtCampos').value;
	  		
		//validar a execução da Função Gerar()
		//window.alert("Serão gerados " + camp + " Campos");
	  		
		//Loop de Repetição para gerar os campos dinamicamente
		for (var i = 1; i <= camp; i++) {
				
				//Gerar novo campo com id padrão "IdNull"	
			    document.write('<div><input id="IdNull" type="text"> <br></div>');
			    
			    //Redefinir o id do campo anterior para TxtSoma + numero dinamico com base na quantidade de Campso gerados
			    document.getElementById("IdNull").id="TxtSoma" + i;
			    
			    //alert("Rodou " + i + "° vez" );
		};



		//Gerar o Botão "Soma" após os campos:
		document.write('</br><div><input type=button value="Somar" onclick=Somar()></div>');
 }

function Somar(){

 		//valor total da soma 
  		SomaTotal = 0;

 		//Alert de confirmação que a função foi executada
 		//window.alert("Função soma executada");
   		
   		//Loop de repetição para coletar os valore dos campos e somar à variavel SomaTotal
   		for (var x = 1; x <= camp; x++) {
    			
    			//if para validar se os dados inseridos nos campos são invalidos
    			if (isNaN(document.getElementById("TxtSoma"+x).value) || document.getElementById("TxtSoma"+x).value == ""){
			    			
		    			//Retornoar mensagem de erro 
		    			window.alert("Os dados informados no " + x +"° campo são inválidos ou estão em branco. Gentileza itulizar apenas numeros para viabilizar a operação")
		    			SomaTotal = NaN;
		    			break;
			    }
			    
			    //else (caso os dados sejam válidos)
			    else{
			    	 		//somar o valor do campo tratado ao valor da variavel SomaTotal
			    			SomaTotal = SomaTotal + parseInt(document.getElementById("TxtSoma"+ x).value);    			    						    			
			    }

   		}

   		if (!isNaN(SomaTotal)) {
   		 window.alert("O valor total da soma dos " + camp + " campos é: " + SomaTotal);
   		 SomaTotal = 0;
   		 } 

   		 else{
   		 	window.alert("Não foi possivel realizar a operação, reveja os dados informados no " + x + "° campo");
   		 	SomaTotal = 0;
   		 }

 }

