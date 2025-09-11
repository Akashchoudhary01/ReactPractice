export const getMoviesData= async()=>{
    try {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon`);
      const data = res.json();
      return data;
    
  } catch (error) {
    console.log(error);
    
    
  }
}

