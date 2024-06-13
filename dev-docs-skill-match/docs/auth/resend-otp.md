---
sidebar_position: 11
---

# Resend OTP
Resend the OTP again

***

### [POST]/api/resend-otp

- Summary  
Resend OTP AGAIN

#### RequestBody

- application/json

```ts
{
  // The Email Address
  email: string
}
```

#### Responses

- 200 Please Check your email for OTP

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

- 400 Error sending OTP

- 404 User not found

***