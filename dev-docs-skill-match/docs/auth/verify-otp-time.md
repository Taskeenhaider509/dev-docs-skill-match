---
sidebar_position: 5
---

# Verify OTP Time
Verfies the OTP sent to email address

***

### [POST]/api/auth/verifyOtpTime/`{email}`

- Summary  
Returns the time of otp

#### Responses

- 200 Returns remaining Otp time

`application/json`

```ts
{
  // The time remaining
  otpTime: number
}
```

- 201 

- 400 OTP expired

***