function solve(arr) {
  arr
    .reduce((acc, curr) => {
      if (curr.startsWith("addMovie")) {
        const [movieName] = curr.split("addMovie ").filter(Boolean);
        acc.push({
          name: movieName,
        });
      } else if (curr.includes("directedBy")) {
        const [movieName, director] = curr
          .split(" directedBy ")
          .filter(Boolean);
        const movie = acc.find((x) => x.name === movieName);

        if (movie?.name) {
          movie.director = director;
        }
      } else if (curr.includes("onDate")) {
        const [movieName, date] = curr.split(" onDate ").filter(Boolean);
        const movie = acc.find((x) => x.name === movieName);

        if (movie?.name) {
          movie.date = date;
        }
      }

      return acc;
    }, [])
    .filter((x) => x.name && x.director && x.date)
    .forEach((movie) => {
      console.log(JSON.stringify(movie));
    });
}
