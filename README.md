# Fastify Contract

Этот проект содержит два мини-веб сервера, которые общаются между собой с гарантированным контрактом.

## Установка и запуск

1. Склонируйте репозиторий:

```
git clone https://github.com/lumymx/wbprod-task.git
```

2. Установите зависимости:

```
cd fastify-contract
npm install
```

3. Запустите серверы в отдельных терминалах:

```
cd server1
npm run start
```

```
cd server2
npm run start
```

4. Отправьте GET запрос на первый сервер:

```
curl http://localhost:3000
```
