(() => {
	// función para obtener información de una película por Id
	function getMovieById(movieId: string) {
		console.log({ movieId });
	}

	// función para obtener información de los actores de una película - Actors o Cast // id = movieId getMovieCast
	function getMovieCast(id: string) {
		console.log({ id });
	}

	// funcion para obtener el bio del actor por el id
	function getBiografyById(ActorId: string) {
		console.log({ ActorId });
	}

	interface Movie {
		title: string;
		description: string;
		rating: number;
		cast: string[];
	}

	// Crear una película
	function movie({ cast, description, rating, title }: Movie) {
		console.log({ title, description, rating, cast });
	}

	// Crea un nuevo actor
	function createActor(fullName: string, birthdate: Date): boolean {
		// tarea asincrona para verificar nombre
		// ..
		// ..
		if (fullName === 'fernando') return false;

		console.log('Crear actor');
		return true;
	}

	const getPayAmount = ({
		isDead = false,
		isSeparated = true,
		isRetired = false,
	}) => {
		let result;

		if (isDead) {
			result = 1500;
			return;
		}

		if (isSeparated) {
			result = 2500;
			return;
		}

		if (isRetired) {
			result = 3000;
			return;
		}

		result = 4000;

		return result;
	};
})();
