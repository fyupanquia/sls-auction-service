const schema = {
  type: "object",
  properties: {
    queryStringParameters: {
      type: "object",
      properties: {
        status: {
          type: "string",
          //emun: ["OPEN", "CLOSED"],
          default: "OPEN",
        },
      },
    },
  },
  required: ["queryStringParameters"],
};

export default schema;
