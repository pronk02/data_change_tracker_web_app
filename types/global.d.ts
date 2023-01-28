declare namespace NodeJS {
    export interface ProcessEnv {
        NODE_ENV: "production" | "development";
        COSMODB_ENDPOINT: string;
        COSMOSDB_ACCOUNT_KEY: string;
        NETSUITE_API_MANAGEMENT_KEY: string;
        PORT: string;
        SITE_URL: string;
        APIM_ACCESS_KEY: string;
    }
}

interface Window {
    ENV?: {
        SITE_URL: string;
    };
}
