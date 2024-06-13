---
sidebar_position: 8
---

# Forget Password
Sends the email otp for password reset procedure

***

### [POST]/api/auth/forgetPassword

- Summary  
Sends the email otp for password reset procedure

#### RequestBody

- application/json

```ts
{
  // The Email Address
  email: string
}
```

#### Responses

- 200 Please check your email for otp

`application/json`

```ts
{
  // Email sent
  message: string
  // The time remaining
  otpTime: number
}
```

- 201 

- 404 Email doesnot exists

`application/json`

```ts
{
}
```

***