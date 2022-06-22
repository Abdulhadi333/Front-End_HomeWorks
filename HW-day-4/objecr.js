const movie = {
    name: "Puff the Magic Dragon",
    stars : ["Puff", "Jackie", "LivingSneezes"],
    duration : 30,
    informationmovie : function() {
        return (`${this.name}   lasts for  ${this.duration} minutes stars ${this.stars}`)
      }
  };

  console.log(movie.informationmovie())