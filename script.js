const apiUrl = "https://viacep.com.br/ws/";
const container = document.querySelector(".container");
const warning = document.querySelector(".warning");
const btn = document.querySelector("#search");

btn.addEventListener("click", () => {

    const Ncep = document.querySelector("#Ncep").value;
    fetch(apiUrl + Ncep + "/json").then((response) => {
        return response.json();
    }).then((data) => {

        container.style.display = "block";
       

        warning.style.display = "None"; 
        if(data["error"]){
             "error";
        }
        container.querySelector(".title").innerHTML = data["Ncep"];
        
        const table = `<table>
            <tr>    
               <th>Cep</th>
               <th>Lagradouro</th>
               <th>Complemento</th>
               <th>Bairro</th>
               <th>Localidade</th>
            </tr>
            <tr>
                     <td>${data["cep"]}</td>
                     <td>${data["logradouro"]}</td>
                     <td>${data["complemento"]}</td>
                     <td>${data["bairro"]}</td>
                     <td>${data["localidade"]}</td>
            </tr>
             </table>`

             container.querySelector(".Ncep").innerHTML = table;

            
            })
            .catch((error) =>{
                document.querySelector(".container").style.display = "none"
                document.querySelector(".warning").style.display = "block"
        //container.style.display = "None";
        //warning.style.display = "block";
    })
});