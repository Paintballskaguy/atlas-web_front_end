// user object // 
const user = {
    hobby: "Calligraphy",
    favoriteSport: "Hockey",
    astrologicalSign: "Aries",
    firstName: "Guillaume",
    lastName: "Johns",
    location: "Netherlands",
    occupation: "Engineer"
};

function logWelcomeUser(welcomeString) {
    console.log(`${welcomeString}, ${this.firstName}. Your occupation is: ${this.occupation}`);
  }

  const bindLogWelcomeUser = logWelcomeUser.bind(user);

  //testing the binder //
  bindLogWelcomeUser('Welcome'); // should put Welcome in front of the placeholders for the object. //
  bindLogWelcomeUser('Hello');
  