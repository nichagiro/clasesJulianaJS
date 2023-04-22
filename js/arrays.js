const personas = [
  { nombre: "Juan", edad: 25, ciudad: "Madrid" },
  { nombre: "María", edad: 30, ciudad: "Barcelona" },
  { nombre: "Pedro", edad: 35, ciudad: "Valencia" },
  { nombre: "Lucía", edad: 40, ciudad: "Sevilla" },
  { nombre: "Carlos", edad: 50, ciudad: "Bilbao" },
  { nombre: "Ana", edad: 50, ciudad: "Málaga" },
  { nombre: "Luis", edad: 55, ciudad: "Zaragoza" },
  { nombre: "Eva", edad: 60, ciudad: "Murcia" },
  { nombre: "Javier", edad: 65, ciudad: "Palma de Mallorca" },
  { nombre: "Sofía", edad: 70, ciudad: "Las Palmas de Gran Canaria" },
  { nombre: "Sofía", edad: 70, ciudad: "Las Palmas de Gran Canaria" }
];

const arrays = () => {
  // ordena el array
  const order = personas.sort((a , b) => a.edad > b.edad ? -1 : 1);
  console.log("🚀 ~ file: arrays.js:84 ~ arrays ~ order:", order)

  // crea un nuevo array a partir de una condicion
  const filter = personas.filter(({ edad }) => {
    return edad === 50
  });
  console.log("🚀 ~ file: arrays.js:19 ~ filter ~ filter:", filter)

  // crea un nuevo objeto a partir de una condicion (el primero que encuentre)
  const find = personas.find(item => item.edad === 50)
  console.log("🚀 ~ file: arrays.js:23 ~ find ~ find:", find)

  // retorna el valor de la posicion del objeto segun la condicion
  const findIndex = personas.findIndex(item => item.nombre === 'Sofía');
  console.log("🚀 ~ file: arrays.js:29 ~ arrays ~ findIndex:", findIndex)

  // combinar este tipo de funciones de array (saca los repetidos)
  const byeRepeat = personas.filter((item, index) => {
    return personas.findIndex(find => item.nombre === find.nombre) === index;
  });
  console.log("🚀 ~ file: arrays.js:35 ~ byeRepeat ~ byeRepeat:", byeRepeat)

  byeRepeat.push({
    nombre: "Nicolas",
    edad: 28,
    ciudad: "CAlI"
  })
  console.log("🚀 ~ file: arrays.js:42 ~ arrays ~ PUSH:", byeRepeat)

  const data = [
    ...byeRepeat,
    {
      nombre: "Nicolas",
      edad: 28,
      ciudad: "CAlI"
    }
  ]

  let validate = false;

  // devuelve un booleano si se cumple la condicion pero con todos
  const every = personas.every(({ edad }) => edad === 50);
  console.log("🚀 ~ file: arrays.js:57 ~ arrays ~ every:", every)

  // devuelve un booleano si se cumple la condicion solo con uno
  const some = personas.some(({ edad }) => edad === 50);
  console.log("🚀 ~ file: arrays.js:60 ~ arrays ~ some:", some)

  personas.forEach(item => {
    if (item.edad === 50) {
      return validate = true
    }
  });

  // elimina un elemento pero este es el ultimo y lo devuelve en objeto
  const pop = personas.pop()
  console.log("🚀 ~ file: arrays.js:70 ~ arrays ~ pop:", pop)

  // crear un nuevo array a partir del return que se indique
  const edades = personas.map(item => item.edad);

  // suma los valores del array, y los acumula, se puede iniciar el acumulador (100)
  const reduce = edades.reduce((previus, next) => previus + next, 1000)
  console.log("🚀 ~ file: arrays.js:73 ~ arrays ~ reduce:", reduce)

  // elimina en la poscion (0) la cantidad a la derecha que necesites
  const splice = personas.splice(0, 9)
  console.log("🚀 ~ file: arrays.js:80 ~ arrays ~ splice:", splice)

}

export default arrays;