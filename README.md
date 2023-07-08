# API Docs

## Endpoint

`localhost:9000`

### Register (Permit All)

- Method: `POST`
- URL: `/register`
- Body Request:

```json
{
  "email": "string",
  "username": "string",
  "password": "string"
}
```

- Response

```json
{
  "status": "success",
  "message": "register ready",
  "data": {
    "id": "3e56d73d-fd03-4aef-a887-bc98d8322451",
    "username": "rizki"
  }
}
```

### Login (Permit All)

- Method: `POST`
- URL: `/login`
- Body Request:

```json
{
  "email": "string",
  "password": "string"
}
```

- Response

```json
{
  "status": "success",
  "message": "login ready",
  "data": {
    "id": "3e56d73d-fd03-4aef-a887-bc98d8322451",
    "dataId": "b1556224-a210-4e3f-b42a-f3d8d3b8660a",
    "auth": "98b516d7ae83e2cbeca970f60bb9d4a95c314c832d446ce9f8158c2eb354cfdb"
  }
}
```

### Dasboard (Authorized)

- Method: `GET`
- URL: `/dashboard/{dataId}`
- Response

```json
{
  "status": "success",
  "data": {
    "userInfo": {
      "username": "user",
      "email": "user@gmail.com"
    },
    "result": {
      "image": "image.png",
      "name": "user 1",
      "link": "[{\"link_1\":\"ini adalah link 1\"},{\"link_2\":\"ini adalah link 2\"},{\"link_3\":\"ini adalah link 3\"}]",
      "bio": "bio singkat"
    }
  }
}
```

- Method: `PUT`
- URL: `/dashboard/{dataId}`
- Request Body

```json
{
  "image": "image.png",
  "name": "user 1",
  "link": [
    { "link_1": "ini adalah link 1" },
    { "link_2": "ini adalah link 2" },
    { "link_3": "ini adalah link 3" }
  ],
  "bio": "b1556224-a210-4e3f-b42a-f3d8d3b8660abio singkab1556224-a210-4e3f-b42a-f3d8d3b8660at"
}
```

### logout (button)

- Method: `DELETE`
- URL: `/dashboard/{dataId}`
- Response Status: `204`

### Link-For Link (Public)

- Method: `GET`
- URL: `/{username}`
- Response

```json
{
  "status": "success",
  "data": {
    "image": "image.png",
    "name": "user 1",
    "link": "[{\"link_1\":\"ini adalah link 1\"},{\"link_2\":\"ini adalah link 2\"},{\"link_3\":\"ini adalah link 3\"}]",
    "bio": "bio singkat"
  }
}
```
