const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  schema: [
    {
      "http://localhost:8080/v1/graphql": {
        headers: {
          "x-hasura-admin-secret":
            process.env.REACT_APP_HASURA_GRAPHQL_ADMIN_SECRET,
        },
      },
    },
  ],
  overwrite: true,
  generates: {
    "./src/generated/graphql.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
      ],
      documents: ["./src/**/*.tsx", "./src/**/*.ts"],
      config: {
        scalars: {
          bigint: "number",
          date: "string",
          uuid: "string",
        },
        skipTypename: false,
        withHooks: true,
        withHOC: false,
        withComponent: false,
      },
    },
    "./graphql.schema.json": {
      plugins: ["introspection"],
    },
  },
};
