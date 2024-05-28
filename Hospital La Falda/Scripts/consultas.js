var bool = new Boolean(true);
function Desplegable() 
{
    if (bool == true){
        document.getElementById("aa").innerHTML += 
        `
        <div class="a">
            <p>Para sacar un turno deves ir a la seccion de turnos 
                que aparese en la parte superior de la pajina
            </p>
            <br>
            <img src="img/header.png" alt="headerIMG" width="800px">
            <br>
            <p>Luego deves rellenar la informacion</p>
            <br>
            <img src="img/Datos.png" alt="DatosIMG" width="800px">
            <br>
            <p>Y  por ultimo enviar</p>
            <br>
            <img src="img/Enviar.png" alt="enviarIMG" width="800px">
        </div>
        `
        bool = new Boolean(false);
    }else{
        document.getElementById("aa").innerHTML -= 
        `
        <div class="a">
            <p>Para sacar un turno deves ir a la seccion de turnos 
                que aparese en la parte superior de la pajina
            </p>
            <br>
            <img src="img/header.png" alt="headerIMG" width="800px">
            <br>
            <p>Luego deves rellenar la informacion</p>
            <br>
            <img src="img/Datos.png" alt="DatosIMG" width="800px">
            <br>
            <p>Y  por ultimo enviar</p>
            <br>
            <img src="img/Enviar.png" alt="enviarIMG" width="800px">
        </div>
        `
        bool = new Boolean(true);
    }
   
    
}