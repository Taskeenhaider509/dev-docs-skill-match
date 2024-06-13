---
sidebar_position: 6
---

# Login
Login the user

***

### [POST]/api/auth/login

- Summary  
Logins the user

#### RequestBody

- application/json

```ts
{
  // The Email Address
  email: string
  // Password for login
  password: string
}
```

#### Responses

- 200 User logged in successfully

`application/json`

```ts
{
  // The user who logs in
  user: #/components/schemas/userToSend
  // The token for the user
  token: string
}
```

- 201 

`application/json`

```ts
{
}
```

- 401 Invalid credentials or email not verified

`application/json`

```ts
{
}
```

***