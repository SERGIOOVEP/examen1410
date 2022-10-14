/*
1. Usando la API de emojis de GitHub muestra todos los emojis (su imagen) que contengan una "y" en su nombre (las claves del JSON de respuesta contienen los nombres de los emojis)
*/



var url = "https://api.github.com/emojis"

    fetch(url) 
        .then(res => res.json()) //LA INFORMACIÓN SE GUARDA EN JASON
        .then(json => {

            //console.log(json);

            var emojis = Object.keys(json)

            var emojisConY= emojis.filter((palabra) => (palabra.includes('y')));
            console.log(emojisConY)//AQUÍ TENEMOS LOS EMOJIS QUE CONTIENEN "Y"

            //NECESITO SACAR SU VALUES PARA PODER APLICARLE EL SETATRRIBUTE Y PINTARLO COMO IMAGEN.
            for (let index = 0; index < emojisConY.length; index++) {
                var imagen = document.createElement("img"); //CREAMOS LA VARIABLE CON EL ELEMENTO QUE QUEREMOS,EN ESTE CASO ES LA IMAGEN.
                imagen.setAttribute("src", json[emojisConY[index]])//TENEMOS QUE DEFINIR A LA VARIABLE CREADA EL ATRIBUTO QUE EN ESTE CASO ES SRC PARA QUE PUEDA CAPTURAR LA URL POR QUE SI NO SALDRIA EN FORMATO TEXTO(URL)
                document.body.appendChild(imagen)
                
            }
            


        })


/*      
2. Usando flexbox coloca los 3 primeros emojis de manera que queden pegados al margen derecho y de arriba a abajo (3, 2 y 1). Debes traer esos tres emojis de la API.




        var url = "https://api.github.com/emojis"

        fetch(url) 
            .then(res => res.json()) 
            .then(json => {
                console.log(json);
    
                
                var imagen = document.createElement("img"); //CREAMOS LA VARIABLE CON EL ELEMENTO QUE QUEREMOS,EN ESTE CASO ES LA IMAGEN.
                imagen.setAttribute("src", json[100])//TENEMOS QUE DEFINIR A LA VARIABLE CREADA EL ATRIBUTO QUE EN ESTE CASO ES SRC PARA QUE PUEDA CAPTURAR LA URL POR QUE SI NO SALDRIA EN FORMATO TEXTO(URL)
                document.body.appendChild(imagen)//"PINTAMOS" 

                var imagen2 = document.createElement("img");
                imagen2.setAttribute("src", json["-1"])
                document.body.appendChild(imagen2)

                var imagen2 = document.createElement("img"); 
                imagen2.setAttribute("src", json["+1"])
                document.body.appendChild(imagen2)

    
    
            })

*/