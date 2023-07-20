(() => {
	// función para obtener información de una película por Id
	function getMovieById(id: string) {
		console.log({ id });
	}

	// función para obtener información de los actores de una película - Actors o Cast // id = movieId getMovieCast
	function getMovieCastById(id: string) {
		console.log({ id });
	}

	// funcion para obtener el bio del actor por el id
	function getActorBioById(id: string) {
		console.log({ id });
	}

	interface NewMovie {
		title: string;
		description: string;
		rating: number;
		cast: Array<string>;
	}

	// Crear una película
	function createMovie({ title, description, rating, cast }: NewMovie) {
		console.log({ title, description, rating, cast });
	}

	interface NewActor {
		fullName: string;
		birthdate: Date;
	}

	// Crea un nuevo actor
	function createActor({ fullName, birthdate }: NewActor): boolean {
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
	}): number => {
		if (isDead) return 1500;
		if (isSeparated) return 2500;
		if (isRetired) return 3000;
		return 4000;
	};
})();
