module.exports = {
  inputs:
  {
    page: {
      type: 'number',
      example: 1
    },
    size: {
      type: 'number',
      example: 1
    },
    count: {
      type: 'number',
      example: 1
    },
    data: {
      type: ['ref'],
      example: [{a: 1}]
    }
  },

  fn: async function (inputs, exits) {
    const result = {
      page: Number(inputs.page),
      total_pages: Math.ceil(Number(inputs.count) / Number(inputs.size)),
      count: inputs.data.length,
      total_items: inputs.count,
      data: inputs.data
    }
    return exits.success(result);
  }
};
