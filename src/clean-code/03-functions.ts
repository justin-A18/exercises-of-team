(() => {
  // función para obtener información de una película por Id
  function getMovieId(id: string) {
    console.log({ id });
  }

  // función para obtener información de los actores de una película - Actors o Cast // id = movieId getMovieCast
  function getInfoActor(id: string) {
    console.log({ id });
  }

  // funcion para obtener el bio del actor por el id
  function getBioActor(id: string) {
    console.log({ id });
  }

  // Crear una película
  function createMovie(
    title: string,
    description: string,
    rating: number,
    cast: string[]
  ) {
    console.log({ title, description, rating, cast });
  }

  // Crea un nuevo actor
  function createActor(fullName: string, birthdate: Date): boolean {
    // tarea asincrona para verificar nombre
    // ..
    // ..
    if (fullName === "fernando") return false;

    console.log("Crear actor");
    return true;
  }

  const getPayAmount = ({
    isDead = false,
    isSeparated = true,
    isRetired = false,
  }) => {
    if (isDead) return 1500; 
    if (isSeparated) return 2500; 

    if (isRetired) {
      return 3000;
    } else { return 4000; }
  };
})();
