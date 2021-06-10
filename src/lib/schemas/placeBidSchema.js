const schema = {
  type: "object",
  properties: {
    body: {
      type: "object",
      properties: {
        title: {
          type: "number",
        },
      },
      required: ["amount"],
    },
  },
  rerquired: ["body"],
};

export default schema;
