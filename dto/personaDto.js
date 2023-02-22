class personaDto{

    constructor(idPersona, nombre1, nombre2, apellido1, apellido2, tipoDocumento, numDocumento,
        sexo, email, numTelefono, profesion, estadoCivil, fechaNacimiento, salario){

    }
    setIdPersona(idPersona){
        this.IdPersona = idPersona;

    }
    getIdPersona(){
        return this.idPersona;
    }
    setNombre1(nombre1){
        this.Nombre1 = nombre1;

    }
    getNombre1(){
        return this.nombre1;
    }
    setNombre2(nombre2){
        this.Nombre2 = nombre2;

    }
    getNombre2(){
        return this.nombre2;
    }
    setApellido1(apellido1){
        this.Apellido1 = apellido1;

    }
    getApellido1(){
        return this.apellido1;
    }
    setApellido2(apellido2){
        this.Apellido2 = apellido2;

    }
    getApellido2(){
        return this.apellido2;
    }
    setTipoDocumento(tipoDocumento){
        this.TipoDocumento = tipoDocumento;

    }
    getTipoDocumento(){
        return this.tipoDocumento;
    }
    setNumDocumento(numDocumento){
        this.NumDocumento = numDocumento;

    }
    getNumDocumento(){
        return this.numDocumento;
    }
    setSexo(sexo){
        this.Sexo = sexo;

    }
    getSexo(){
        return this.sexo;
    }
    setEmail(email){
        this.Email = email;

    }
    getEmail(){
        return this.email;
    }
    setNumTelefono(numTelefono){
        this.NumTelefono = numTelefono;
    }
    getNumTelefono(numTelefono){
        return this.NumTelefono;
    }
    
    setEstadoCivil(estadoCivil){
        this.EstadoCivil = estadoCivil;
    }
    getEstadoCivil(estadoCivil){
        return this.estadoCivil;
    }
    setProfesion(profesion){
        this.Profesion = profesion;
    }
    getProfesion(profesion){
        return profesion;
    }
    
    setFechaNacimiento(fechaNacimiento){
        this.FechaNacimiento = fechaNacimiento;
    }
    getFechaNacimiento(fechaNacimiento){
        return fechaNacimiento;
    }
   

}