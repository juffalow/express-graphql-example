export default <T>(edges: Edge<T>[], totalCount: number, hasNextPage: boolean, hasPreviousPage: boolean): Connection<T> => {
  return {
    edges,
    pageInfo: {
      endCursor: edges.length === 0 ? null : edges[edges.length - 1].cursor,
      hasNextPage,
      hasPreviousPage,
      startCursor: edges.length === 0 ? null : edges[0].cursor,
    },
    totalCount,
  };
};
