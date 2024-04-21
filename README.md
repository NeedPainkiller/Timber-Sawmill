<img src="https://capsule-render.vercel.app/api?type=waving&color=auto&height=300&section=header&text=TIMBER%20SAWMILL&fontSize=90&animation=fadeIn&fontAlignY=38&desc=Log processing backend service for Timber Framework&descAlignY=51&descAlign=62"/>

# TIMBER SAWMILL


<p align="center">
  <a href="https://blog.needpainkiller.xyz/" target="blank"><img src="./img/timber-logo.svg" width="200" alt="Timber Logo" /></a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white"/>
  <img src="https://img.shields.io/badge/nestjs-E0234E?style=flat-square&logo=nestjs&logoColor=white"/>
  <img src="https://img.shields.io/badge/Apache Kafka-231F20?style=flat-square&logo=apachekafka&logoColor=white"/>
  <img src="https://img.shields.io/badge/Sequelize-52B0E7?style=flat-square&logo=sequelize&logoColor=white"/>
  <img src="https://img.shields.io/badge/ReactiveX-B7178C?style=flat-square&logo=ReactiveX&logoColor=white"/>
  <img src="https://img.shields.io/badge/MariaDB-003545?style=flat-square&logo=mariadb&logoColor=white"/>
  <img src="https://img.shields.io/badge/Jest-C21325?style=flat-square&logo=jest&logoColor=white"/>
  <img src="https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white"/>
</p>

> **_NOTE:_**  한국어 설명은 아래에 있습니다.

This project uses NestJS with Typescript and Kafka

If you want to learn more about [Timber](https://github.com/NeedPainkiller/Timber), please visit its Blog: https://blog.needpainkiller.xyz


## Description
Log processing backend service for [Timber](https://github.com/NeedPainkiller/Timber) Framework
## Requirements
-  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white"/>
-  <img src="https://img.shields.io/badge/nestjs-E0234E?style=flat-square&logo=nestjs&logoColor=white"/>
-  <img src="https://img.shields.io/badge/Apache Kafka-231F20?style=flat-square&logo=apachekafka&logoColor=white"/>
-  <img src="https://img.shields.io/badge/Sequelize-52B0E7?style=flat-square&logo=sequelize&logoColor=white"/>
-  <img src="https://img.shields.io/badge/MariaDB-003545?style=flat-square&logo=mariadb&logoColor=white"/>

## Installation
```bash
npm install
```

## Running the app

```bash
# development
npm run start

# watch mode
npm run start:dev

# production mode
npm run start:prod
```

## Test

```bash
# unit tests
npm run test

# e2e tests
npm run test:e2e

# test coverage
npm run test:cov
```

## Build
```Bash
# Build 
npm run build
```
## Docker
```Bash
# create ".env" file

## Database (MariaDB)
DB_DIALECT=mariadb
DB_HOST=x.y.z
DB_PORT=3306
DB_NAME=timber-audit
DB_USERNAME=timber
DB_PASSWORD=passwd

## Message Queue (Kafka)
KAFKA_BROKERS=x.x.x.x:9092,y.y.y.y:2909,z.z.z.z:9092
KAFKA_ID=timber-sawmill
KAFKA_GROUP_ID=timber-sawmill-group
```


```Bash
# Build Dockerfile
docker build . -t timber-sawmill

# Run Dockerfile
docker container run -d -p 3000:3000 -v ./.env:/var/app/.env nest-docker 
```

## Stay in touch
<p>
  <a href="https://home.needpainkiller.xyz/" target="_blank"><img src="https://img.shields.io/badge/Home-EF3346?style=flat-square&logo=googlehome&logoColor=white"/></a>
  <a href="https://blog.needpainkiller.xyz/" target="_blank"><img src="https://img.shields.io/badge/Blog-15171A?style=flat-square&logo=Ghost&logoColor=white"/></a>
  <a href="mailto:kam6512@gmail.com" target="_blank"><img src="https://img.shields.io/badge/kam6512@gmail.com-EA4335?style=flat-square&logo=Gmail&logoColor=white"/></a>
  <a href="mailto:needpainkiller6512@gmail.com" target="_blank"><img src="https://img.shields.io/badge/needpainkiller6512@gmail.com-EA4335?style=flat-square&logo=Gmail&logoColor=white"/></a>
</p>

- Author - [NeedPainkiller](https://home.needpainkiller.xyz/)
- Blog - [https://blog.needpainkiller.xyz](https://blog.needpainkiller.xyz/)
- Github - [@PainKiller](https://github.com/NeedPainkiller)

## License

Timber-Sawmill is [MIT licensed](LICENSE).

# TIMBER SAWMILL


<p align="center">
  <a href="https://blog.needpainkiller.xyz/" target="blank"><img src="./img/timber-logo.svg" width="200" alt="Timber Logo" /></a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white"/>
  <img src="https://img.shields.io/badge/nestjs-E0234E?style=flat-square&logo=nestjs&logoColor=white"/>
  <img src="https://img.shields.io/badge/Apache Kafka-231F20?style=flat-square&logo=apachekafka&logoColor=white"/>
  <img src="https://img.shields.io/badge/Sequelize-52B0E7?style=flat-square&logo=sequelize&logoColor=white"/>
  <img src="https://img.shields.io/badge/ReactiveX-B7178C?style=flat-square&logo=ReactiveX&logoColor=white"/>
  <img src="https://img.shields.io/badge/MariaDB-003545?style=flat-square&logo=mariadb&logoColor=white"/>
  <img src="https://img.shields.io/badge/Jest-C21325?style=flat-square&logo=jest&logoColor=white"/>
  <img src="https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white"/>
</p>

이 프로젝트는 NestJS, Typescript, Kafka 로 구현되었습니다.

[Timber](https://github.com/NeedPainkiller/Timber) 프로젝트에 더 알고 싶다면 [블로그](https://blog.needpainkiller.xyz) 에 방문 해주세요


## Description | 이 프로젝트는....
Timber Sawmill 프로젝트는 [Timber](https://github.com/NeedPainkiller/Timber) 를 위한 API 감사, HTTP 로깅 서비스 입니다.

## Requirements | 요구사항
-  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white"/>
-  <img src="https://img.shields.io/badge/nestjs-E0234E?style=flat-square&logo=nestjs&logoColor=white"/>
-  <img src="https://img.shields.io/badge/Apache Kafka-231F20?style=flat-square&logo=apachekafka&logoColor=white"/>
-  <img src="https://img.shields.io/badge/Sequelize-52B0E7?style=flat-square&logo=sequelize&logoColor=white"/>
-  <img src="https://img.shields.io/badge/MariaDB-003545?style=flat-square&logo=mariadb&logoColor=white"/>

## 사전 설치
```bash
npm install
```

## app 실행

```bash
# development
npm run start

# watch mode
npm run start:dev

# production mode
npm run start:prod
```

## 테스트

```bash
# unit tests
npm run test

# e2e tests
npm run test:e2e

# test coverage
npm run test:cov
```

## Build
```Bash
# Build 
npm run build
```
## Docker
```Bash
# create ".env" file

## Database (MariaDB)
DB_DIALECT=mariadb
DB_HOST=x.y.z
DB_PORT=3306
DB_NAME=timber-audit
DB_USERNAME=timber
DB_PASSWORD=passwd

## Message Queue (Kafka)
KAFKA_BROKERS=x.x.x.x:9092,y.y.y.y:2909,z.z.z.z:9092
KAFKA_ID=timber-sawmill
KAFKA_GROUP_ID=timber-sawmill-group
```


```Bash
# Build Dockerfile
docker build . -t timber-sawmill

# Run Dockerfile
docker container run -d -p 3000:3000 -v ./.env:/var/app/.env nest-docker 
```

## Stay in touch
<p>
  <a href="https://home.needpainkiller.xyz/" target="_blank"><img src="https://img.shields.io/badge/Home-EF3346?style=flat-square&logo=googlehome&logoColor=white"/></a>
  <a href="https://blog.needpainkiller.xyz/" target="_blank"><img src="https://img.shields.io/badge/Blog-15171A?style=flat-square&logo=Ghost&logoColor=white"/></a>
  <a href="mailto:kam6512@gmail.com" target="_blank"><img src="https://img.shields.io/badge/kam6512@gmail.com-EA4335?style=flat-square&logo=Gmail&logoColor=white"/></a>
  <a href="mailto:needpainkiller6512@gmail.com" target="_blank"><img src="https://img.shields.io/badge/needpainkiller6512@gmail.com-EA4335?style=flat-square&logo=Gmail&logoColor=white"/></a>
</p>

- Author - [NeedPainkiller](https://home.needpainkiller.xyz/)
- Blog - [https://blog.needpainkiller.xyz](https://blog.needpainkiller.xyz/)
- Github - [@PainKiller](https://github.com/NeedPainkiller)

## License

Timber-Sawmill is [MIT licensed](LICENSE).
