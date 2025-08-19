import { client } from "../utils/dynamoClient";

const TABLE_NAME = process.env.TABLE_NAME || "";

export const handler = async (event: any) => {
  const params = {
    TableName: TABLE_NAME,
    Key: { id: event.arguments.id },
  };

  const result = await client.get(params).promise();
  return result.Item;
};
