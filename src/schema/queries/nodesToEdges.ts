export default <T>(nodes: T[], after: number): Edge<T>[] => {
  return nodes.map((node, index: number) => ({
    cursor: Buffer.from(`cursor${index + after + 1}`).toString('base64'),
    node,
  }));
};
