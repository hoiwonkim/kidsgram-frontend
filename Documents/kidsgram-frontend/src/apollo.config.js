// ./src/apollo.config.js
module.exports = {
  client: {
    tagName: "gql",
    service: {
      name: "kidsgram-backend",
      url: "http://localhost:4000/graphql",
    },
    includes: ["./src/**/*.{tsx,ts}"],
  },
};
