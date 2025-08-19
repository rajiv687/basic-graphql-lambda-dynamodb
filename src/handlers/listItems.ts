import { client } from "../utils/dynamoClient";

const TABLE_NAME = process.env.TABLE_NAME || "";

export const handler = async () => {
  const result = await client.scan({ TableName: TABLE_NAME }).promise();
  return result.Items;
};
