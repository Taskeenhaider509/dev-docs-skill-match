---
sidebar_position: 10
---

# Change Password
Change the Password of user

***

### [POST]/api/change-password

- Summary  
Change password of a user

#### RequestBody

- application/json

```ts
{
  // provide new password
  new_password: string
  // provide Email address
  email: string
}
```

#### Responses

- 201 Password changed successfully

`application/json`

```ts
{
  // Message according to success
  message: string
}
```

- 400 Password change failed

- 404 User not found

`application/json`

```ts
{
}
```

***