const schema = {
  type: "object",
  properties: {
    queryStringParameters: {
      type: "object",
      properties: {
        status: {
          type: "string",
          emun: ["OPEN", "CLOSED"],
          default: "ENV",
        },
      },
    },
  },
  rerquired: ["queryStringParameters"],
};

export default schema;
