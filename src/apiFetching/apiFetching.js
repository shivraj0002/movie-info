const API_KEY = process.env.REACT_APP_API_KEY;

const apiSearchMovie = async (searchValue) => {
  const url = `https://www.omdbapi.com/?s=${searchValue}&?type=sereis&apikey=${API_KEY}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Something went wrong");
  }
  const data = await response.json();

  if (data.Response === "True") {
    return { data: [...data.Search], Response: true };
  } else {
    return { data: [], Response: false };
  }
};

export { apiSearchMovie };

const apiMovieGet = async (searchValue) => {
  const url = `https://www.omdbapi.com/?i=${searchValue}&?type=sereis&apikey=${API_KEY}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Something went wrong");
  }
  const data = await response.json();
  // console.log(data);
  return data;
};
export { apiMovieGet };
