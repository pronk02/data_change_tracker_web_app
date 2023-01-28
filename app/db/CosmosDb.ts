import { CosmosClient, FeedResponse } from "@azure/cosmos";
import { getServerSafeEnvVariable } from "~/utils";
import dotenv from "dotenv"
dotenv.config()

console.log("Start...");

const COSMOS_DB_ENDPOINT = process.env.COSMODB_ENDPOINT! // getServerSafeEnvVariable("COSMODB_ENDPOINT");
console.log("Endpoint: ", COSMOS_DB_ENDPOINT);
const COSMOS_DB_ACCESS_KEY = process.env.COSMOSDB_ACCOUNT_KEY! // getServerSafeEnvVariable("COSMOSDB_ACCOUNT_KEY");
console.log("Key: ", COSMOS_DB_ACCESS_KEY);


const client = new CosmosClient({
    endpoint: COSMOS_DB_ENDPOINT,
    key: COSMOS_DB_ACCESS_KEY
})

const databaseName = "netsuite";
const containerName = "systemnote"

const results = async(): Promise<void> => {
    //const res = await client.database(databaseName).container(containerName).items.query("select TOP 100 * from c").fetchAll()
    const res = await client.database(databaseName).containers.readAll().fetchAll()
    console.log(res.resources.map((value) => value.id))
}

results()