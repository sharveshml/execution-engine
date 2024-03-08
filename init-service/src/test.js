//Access .env file and read S3_BUCKET 

require('dotenv').config({ path: './.env' });

const S3_BUCKET = process.env.S3_BUCKET;
console.log(S3_BUCKET);