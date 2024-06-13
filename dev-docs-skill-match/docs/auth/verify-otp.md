---
sidebar_position: 4
---

# Verify OTP
Verfies the OTP sent to email address

***

### [POST]/api/auth/verifyOtp

- Summary  
Verfies the OTP sent to email address

#### RequestBody

- application/json

```ts
{
  // The Email of the candidate
  email: string
  // OTP received in email
  OTP: string
}
```

#### Responses

- 200 Account Verfication Complete

`application/json`

```ts
{
  // Message according to success
  message: string
}
```

- 201 

- 400 Email not found, OTP expired, or wrong OTP

***