export const handler = async (event: any, context: any) => {
  return {
    statusCode: 200,
    body: JSON.stringify({ foo: 'bar' }),
  };
};
