function variables() {
  var persona = { name: { p: 'nicolas', ap: null }, color: 'green' }  //! procurar no usar
  let marca = 'toyota'
  const numeros = [1, 2, 3, 4, 5]  //* siempre que se pueda

  // ejemplo sirve para identificar el scope de las variables
  function validate(persona) {
    let data = false
    if (persona.name.p === 'nicolas') {
      data = true
    }
    return data;
  }

  // para acceder a la data si es diferente a null, undefined o false, si no devuelve undefined
  console.log(428, persona.name.ap?.first)
  console.log(500, persona.name?.p)

  persona = 1; // mutacion
  marca = 2; // mutacion
  numeros.push(10) //! no se puede mutar

  console.log("🚀 ~ file: main.js:4 ~ marca:", marca)
  console.log("🚀 ~ file: main.js:4 ~ persona:", persona)
  console.log("🚀 ~ file: main.js:7 ~ numeros:", numeros)


  const data = [
    {
      pokemon: 'pikachu',
      movimientos: {
        tipo: 'rata',
        especiales: 'electricidad'
      }
    },
    {
      pokemon: 'charizardo',
      movimientos: {
        tipo: null,
        especiales: 'fuego'
      }
    },
    {  
      pokemon: 'nidoran',
      movimientos: null
    }
  ]

  data.forEach(poke => {
    console.log(40, poke.movimientos?.especiales) // si hay data continua si no  return undefined
    console.log(40, poke.movimientos ? poke.movimientos.especiales : 'no tiene movimientos') // ternario
    if(poke.movimientos){
      // si el valor es vacio, asgine uno por defecto
      console.log(400, poke.movimientos.tipo ?? 'sin tipo' ) 
      console.log(400, poke.movimientos.tipo || 'sin tipo' )
    }
  });

}

export default variables;
