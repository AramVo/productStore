# Product Store

## Run application

To run application you need Postgresql. You can run it via docker:
```
docker run --name postgres -e POSTGRES_PASSWORD=test -e POSTGRES_USER=test -e POSTGRES_DB=productStore -p 8080:5432 -v psqlData:/var/lib/postgresql/data -d postgres
```

Then you need to create `.env` file and copy/pust `.env.example`'s content into `.env` and set appropriate values.

After that run app by npm command:
```
npm start
```

## Postman

You can import `postman_collection.json` file into postman which contains requests emplates.


# What is missing

Because of the lack of time, some features are missing.

1. Image uploading for products
2. Products update/delete
3. Buyer queries