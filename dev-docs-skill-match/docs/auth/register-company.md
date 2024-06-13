---
sidebar_position: 2
---

# Register Company
Register the COMPANY and creates its Document

***

### [POST]/api/auth/register-company

- Summary  
Register the COMPANY and creates its Document

#### RequestBody

- application/json

```ts
{
  // Company name
  name: string
  // Company Email
  email: string
  // Industry name in which your company falls
  industry: string
  // Company phone
  phone: string
  // Company Website
  website: string
  // Password for the company
  password?: string
}
```

#### Responses

- 201 Company registered successfully

`application/json`

```ts
{
  // Company name
  name: string
  // Company Email
  email: string
  // Industry name in which your company falls
  industry: string
  // Company phone
  phone: string
  // Company Website
  website: string
  // Password for the company
  password?: string
}
```

- 400 Company already registered and verified

`application/json`

```ts
{
}
```

- 409 Company registration not completed.

`application/json`

```ts
{
}
```

***