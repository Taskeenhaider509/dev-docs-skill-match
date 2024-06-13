---
sidebar_position: 9
---

# Check Token
Check if the token is valid

***

### [GET]/api/checkToken

- Summary  
Check if the token is valid

#### Headers

```ts
authorization: string
```

#### Responses

- 200 Token is valid

`application/json`

```ts
{
  // Message according to success
  message: string
}
```

- 401 Token not provided or invalid

***