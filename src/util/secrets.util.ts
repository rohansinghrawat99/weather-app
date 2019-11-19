import dotenv from "dotenv";

dotenv.config({path: ".env"});

export const ENVIRONMENT = process.env.APP_ENV;
const prod = ENVIRONMENT === "production"; // Anything else is treated as "dev"

export const APP_IDENTIFIER = process.env.APP_IDENTIFIER;
export const ENV_APP_PORT_REST = process.env.APP_PORT_REST;

export const ENV = process.env.APP_ENV;

export const ENV_BASE_URL = process.env.BASE_URL;
export const ENV_DASHBOARD_URL = process.env.DASHBOARD_URL;

export const ENV_API_KEY = process.env.API_KEY;
export const ENV_DOMAIN = process.env.DOMAIN;
export const ENV_FROM_WHO = process.env.FROM_WHO;

export const ENV_MYSQL_HOSTNAME = process.env.MYSQL_HOSTNAME;
export const ENV_MYSQL_USER = process.env.MYSQL_USER;
export const ENV_MYSQL_PASSWORD = process.env.MYSQL_PASSWORD;
export const ENV_MYSQL_DB = process.env.MYSQL_DB;

export const ENV_S3_KEY = process.env.S3_KEY;
export const ENV_S3_SECRET = process.env.S3_SECRET;
export const ENV_S3_BUCKET = process.env.S3_BUCKET;
export const ENV_S3_REGION = process.env.S3_REGION;
export const ENV_S3_BUCKET_AUDIO = process.env.S3_BUCKET_AUDIO;

export const ENV_JWT_SECRET = process.env.JWT_SECRET;

export const ENV_ERROR_WEBHOOK = process.env.ERROR_WEBHOOK;

export const ENV_CRYPT_KEY = process.env.CRYPT_KEY;
export const ENV_CRYPT_IV = process.env.CRYPT_IV;

export const ENV_AWS_ACCESS_TOKEN = process.env.AWS_ACCESS_TOKEN;


