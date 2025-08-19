import { v4 as uuidv4 } from "uuid";
import { DocumentClient } from "aws-sdk/clients/dynamodb";
import { client } from "../utils/dynamoClient";

const TABLE_NAME = process.env.TABLE_NAME || "";

export const handler = async (event: any) => {
  const id = uuidv4();
  const item = { id, ...event.arguments.item };

  await client.put({ TableName: TABLE_NAME, Item: item }).promise();
  return item;
};
