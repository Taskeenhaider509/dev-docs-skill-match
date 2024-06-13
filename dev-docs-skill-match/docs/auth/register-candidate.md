---
sidebar_position: 1
---

# Register Candidate
Register the CANDIDATE and creates its Document

***

### [POST]/api/auth/register-candidate

- Summary  
Register the CANDIDATE and creates its Document

#### RequestBody

- application/json

```ts
{
  // The name of the candidate
  name: string
  // The email of the candidate
  email: string
  // The phone number of the candidate
  phone: string
  // The gender of the candidate
  gender: string
  // The password of the candidate
  password: string
  // isSocialLogin or not
  isSocialLogin?: boolean
}
```

#### Responses

- 201 Candidate registered successfully

`application/json`

```ts
{
  // The name of the candidate
  name: string
  // The email of the candidate
  email: string
  // The phone number of the candidate
  phone: string
  // The gender of the candidate
  gender: string
  // The password of the candidate
  password: string
  // isSocialLogin or not
  isSocialLogin?: boolean
}
```

- 400 Candidate already registered and verified

`application/json`

```ts
{
}
```

- 409 Candidate registration not completed.

`application/json`

```ts
{
}
```

***