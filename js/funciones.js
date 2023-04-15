const funciones = () => {
  
  function saludo (menssage){
    console.log(menssage)
  }
  
  function name (data){
    return saludo('hola como estas ' + data)
  };

  name('nicolas')

}

export default funciones;