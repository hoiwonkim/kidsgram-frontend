// ./src/apollo.config.js
module.exports = {
    client: {
      tagName: "gql",
      service: {
        name: "kidsgram-backend",
        url: process.env.API_URL || "http://localhost:4000/graphql",
      },
      includes: ["./src/**/*.{tsx,ts}"],
    },
  };
  