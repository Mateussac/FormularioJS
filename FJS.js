function salvar() {
            var nome = document.getElementById("id_nome");
            var data = document.getElementById("id_data");
        
            alert( nome.value + ", com a data de nacimento: " + data.value);

            console.log("Candidato: " + nome.value + ", com a data de nacimento: " + data.value);
            
}