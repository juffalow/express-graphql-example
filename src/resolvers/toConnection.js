export default (edges, totalCount) => {
  return {
    totalCount: totalCount,
    edges: edges,
    pageInfo: {
      endCursor: edges.length === 0 ? null : edges[edges.length - 1].cursor,
      hasNextPage: true,
      hasPreviousPage: false,
      startCursor: edges.length === 0 ? null : edges[0].cursor,
    }
  };
};
