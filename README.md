## What's this?

This is a serverless API example for [NestJS](https://github.com/nestjs/nest) and [Dynamoose](https://dynamoosejs.com/getting_started/Introduction).

- AWS API Gateway
- AWS Lambda with NestJS
- DynamoDB (dynamoose)

## How to debug local

### Pre-Process

1. Remove comment out。

*src/app.module.ts*
```ts
...

DynamooseModule.forRoot({
  aws: {
    region: 'ap-northeast-1',
}),

...
```

2. Up docker-compose.

```sh
docker-compose up -d
```

### NestJS Layer

```sh
$ npm run start
```

### AWS Layer

```sh
$ npm run local
```

## How to deploy

```sh
npm run deploy
```

## Open API

```sh
npm run swagger
```

You can refer API document at `http://localhost:3001/api/`.