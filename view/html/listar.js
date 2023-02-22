function addrecord(listRecord){
    let bodyTable = document.getElementById('body_tablePerson');
    bodyTable.innerText = '';
    listRecord.forEach(element => {        
        let fila = document.createElement('tr');

        let firstName = document.createElement('td');
        firstName.innerText = element.idPersona;
        fila.appendChild(idPersona);

        let firstLastname = document.createElement('td');
        firstLastname.innerText = element.nombre1;
        fila.appendChild(nombre1);

        let typeDocument = document.createElement('td');
        typeDocument.innerText = element.tipoDocumento;
        fila.appendChild(tipoDocumento);

        let numDocument = document.createElement('td');
        numDocument.innerText = element.numDocumento;
        fila.appendChild(numDocumento); 
        
        let dateBirth = document.createElement('td');
        dateBirth.innerText = element.fechaNacimiento;
        fila.appendChild(fechaNacimiento);

        let email = document.createElement('td');
        email.innerText = element.email;
        fila.appendChild(email);
        

        let acctions = document.createElement('td');
        acctions.appendChild(addacctions(element));
        fila.appendChild(acctions);

        bodyTable.appendChild(fila);        
    });
}


function addacctions(element) {
    let div = document.createElement('div');
    div.setAttribute('class', 'actions');

    let button1 = document.createElement('button');
    button1.setAttribute('class', 'eye');
    let icon1 = document.createElement('i');
    icon1.setAttribute('class', 'fa-solid fa-eye');

    button1.appendChild(icon1);

    let button2 = document.createElement('button');
    button2.setAttribute('class', 'edit');
    let icon2 = document.createElement('i');
    icon2.setAttribute('class', 'fa-solid fa-pen-to-square');
    
    button2.appendChild(icon2);

    let button3 = document.createElement('button');
    button3.setAttribute('class', 'delete');
    let icon3 = document.createElement('i');
    icon3.setAttribute('class', 'fa-solid fa-trash');
    
    button3.appendChild(icon3);
    button3.setAttribute('onClick', "eliminarPersona('"+ element.idPersona +"')")

    div.appendChild(button1);
    div.appendChild(button2);
    div.appendChild(button3);
    return div;
}