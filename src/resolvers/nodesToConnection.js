export default (nodes, totalCount) => {
  return {
    totalCount: totalCount,
    edges: nodes.map(node => ({
      cursor: Buffer.from(node._id.toString()).toString('base64'),
      node: node
    })),
    pageInfo: {
      endCursor: nodes.length === 0 ? null : Buffer.from(nodes[nodes.length - 1]._id.toString()).toString('base64'),
      hasNextPage: true,
      hasPreviousPage: false,
      startCursor: nodes.length === 0 ? null : Buffer.from(nodes[0]._id.toString()).toString('base64')
    }
  };
};