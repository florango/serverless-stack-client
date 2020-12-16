const config = {
  s3: {
    REGION: "us-east-1",
    BUCKET: "4235-notes-app-upload",
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://xuw9qhlaf3.execute-api.us-east-1.amazonaws.com/prod",
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_V0ftIFn8a",
    APP_CLIENT_ID: "6jne64683bkbguf4sr2nbjfe9p",
    IDENTITY_POOL_ID: "us-east-1:b25f2b85-b2e4-4eb4-abb1-daa227b3fe3c",
  },
};

export default config;