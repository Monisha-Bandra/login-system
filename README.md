<h1 align="center">Authentication System for user sign up, login and otp verification</h1>


[SendGrid Email Service](https://sendgrid.com)

[Demo App](https://login-system-ipwn.onrender.com/login)


### About :
Authentication feature demonstration using Node JS and React. This relies on MongoDB for user data storage and JWT for secure authentication. The system integrates SendGrid for email services, enabling features like password recovery, OTP verification, and email validation. Keyfeatures  signup, login, logout, and password reset endpoints. Includes both front-end and back-end.

The app also requires setting up environmental variables. Please create .env at root level and ensure these variables are set.

.env
``` 
MONGO_URI="mongodb+srv://<username>:<password>@<cluster-name>.mongodb.net/authUsers?retryWrites=true&w=majority"

PORT=5000
JWT_SECRET="monisha123"

CLIENT_URL= "http://localhost:5000"
```

### Set up the app
```shell
npm install
```

### Build the app
```shell
npm run build
```

### Start the app
```shell
npm start
```

You can check the app on localhost
[http://localhost:5000/]