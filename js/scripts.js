function Gerar(){
  	
	  	//Receber o número de campos a serem gerados
	  	camp = document.getElementById('TxtCampos').value;
	  		
		//Validar se o valor inserido é do tipo numérico.
		if (!isNaN(camp)) {

				//Loop de Repetição para gerar os campos dinamicamente
				for (var i = 1; i <= camp; i++) {
						
						//Gerar novo campo com id padrão "IdNull"	
					    document.write('<div class=""><h4 class="Center">Insira o valor:</h4></br><input type="text" id="IdNull" class="css-input inputCampos"></div>');
											    
					    //Redefinir o id do campo anterior para TxtSoma + numero dinamico com base na quantidade de Campso gerados
					    document.getElementById("IdNull").id="TxtSoma" + i;
					    
				};

			//Gerar o Botão "Soma" após os campos:
			document.write('</br><div class="Center"><a href="#" onclick="Somar()" id=BtnGerarCampos class="myButton Center">Somar</a><link href="css/style.css" rel="stylesheet">');
				
		}

		else{

				window.alert("Gentileza informar um valor numérico.");

		}

 }

function Somar(){

 		//variavel que recebe o valor total da soma.
  		SomaTotal = 0;

 		//Loop de repetição para coletar os valores dos campos e somar à variavel SomaTotal.
   		for (var i = 1; i <= camp; i++) {
    			
    			//if para validar se os dados inseridos nos campos são invalidos
    			if (isNaN(document.getElementById("TxtSoma"+i).value) || document.getElementById("TxtSoma"+i).value == ""){
			    		
			    		//caso dados sejam inálidos.	
		    			SomaTotal = NaN;
		    			break;
			    }
			    
			    //else (caso os dados sejam válidos)
			    else{

		    	 		//somar o valor do campo tratado ao valor da variavel SomaTotal
		    			SomaTotal = SomaTotal + parseInt(document.getElementById("TxtSoma"+ i).value);    			    						    			

			    }

   		}

   		if (!isNaN(SomaTotal)) {
				
				window.alert("A soma dos " + camp + " campos é: " + SomaTotal + ".");
				SomaTotal = 0;
				
   		 } 

   		 else{
	   		 	window.alert("Não foi possivel realizar a operação, \nDados inválidos (não numérico ou vazio) no  " + i + "° campo.");
	   		 	SomaTotal = 0;
   		 }

 }

