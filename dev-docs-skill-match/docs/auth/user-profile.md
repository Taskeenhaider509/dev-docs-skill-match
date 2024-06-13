---
sidebar_position: 7
---

# User Profile
Get the authenticated user

***

### [GET]/api/auth/me

- Summary  
Get the authenticated user

- Security  
JWT-auth  
bearer  

#### Responses

- 200 Authenticated user details

`application/json`

```ts
{
  user: {
    email?: string
    name?: string
    phone?: string
    _id?: string
    userType?: string
  }
  // subscribed plan of company
  subscriptionPlan: #/components/schemas/CreateSubscriptionPlanDto
  // Verified user or not
  isEmailVerified: boolean
  // Id of user
  userId: string
  // Last Login info
  lastLogin: string
  // User login type
  isSocialLogin: string
}
```

- 401 User not authenticated

- 404 User not found

***