const storage = () => {
  try {
    const favorite = localStorage.getItem('color'); // trae el item con la clave
    const background = favorite ?? '#E099C8';
    document.body.style.backgroundColor = background;
  
    if (!favorite) {
      localStorage.setItem('color', '#99E0B9') // guarda el item con la clave
    }
  
    // elimina el item con la clave
    // localStorage.removeItem('color')
    // localStorage.clear() // peligroso elimina todo el localstorage del dominio
  } 
  catch ({message}) {
    alert(message);
  }
}

export default storage;