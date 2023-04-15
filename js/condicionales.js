const idRol = 10

const condicionales = () => {

  // function validate() {
  //   let bandera = null
  //   if (idRol === 10) {
  //     bandera = true
  //   } else {
  //     bandera = false
  //   }
  //   return bandera
  // }

  // function validate() {
  //   let bandera
  //   (idRol === 10)
  //     ? bandera = true
  //     : bandera = false
  //   return bandera
  // }
  
  // function validate() {
  //   return idRol === 10
  // }

  const validate = () =>  idRol === 10;

  const admin = validate();

  console.log("🚀 ~ file: condicionales.js:16 ~ condicionales ~ admin:", admin)

}

export default condicionales;