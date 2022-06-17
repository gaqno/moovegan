## Welcome to MooVegan! 🐄
<b> PI - Faculdade das Americas </b>
## Stack

This api is made using nodejs with typescript and the [NestJS](https://github.com/nestjs/nest) framework.
[Prisma](http://prisma.io) is used for persistence on a [Mysql](https://www.mysql.com/) database

## Installation

Please use yarn to install

```bash
$ yarn install
```
## Running the app

For a development environment, you can use docker-compose

```bash
# docker-compose up
```

or run directly. you will need to install mysql and add it to your /etc/hosts on 'database' alias

```bash
# development
# $ cp env.dist .env #don't forget to edit the .env file to your needs
$ yarn run start

# watch mode
$ yarn run start:dev

# incremental rebuild (webpack)
$ yarn run webpack
$ yarn run start:hmr

# production mode
$ yarn run start:prod
```