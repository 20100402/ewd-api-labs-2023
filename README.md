# EWD-API-LABS-2023
# Assignment 2 - Movies Web API.

Name: Arbaz Ahmed

## Features.

 + Feature 1 - List of Popular, Top Rated and Upcoming Movies

 + Feature 2 - Authentication and token integrated with API for protected pages like movie in detail pages

 + Feature 3 - Genres and Reviews Implemented

## Installation Requirements
DevContainer config can be accessed via .devcontainer folder

```cmd
git clone https://github.com/20100402/ewd-api-labs-2023
```
followed by installation
```bat
npm install
```

## API Configuration
```bat
NODE_ENV=development
PORT=8080
HOST=localhost
DATABASE_URL=mongodb://localhost:27017/movies_db
JWT_SECRET_KEY=ilikecake
```

## API Design & Features

http://localhost:3000/api-docs


![Screenshot 2023-05-23 at 4 06 44 AM](https://github.com/20100402/ewd-api-labs-2023/assets/113951387/f8efa45d-33c7-4e74-b452-3711a7a0bc43)

## Security and Authentication

/reviews

/movies/getMovie

## Validation

Registration and login forms have proper validations for all the inputs using JOI.

## Testing

Tested via postman


![Screenshot 2023-05-23 at 4 14 28 AM](https://github.com/20100402/ewd-api-labs-2023/assets/113951387/702a5acb-b21a-498d-87b6-1a7d830b1d5f)


## Integrated with React App

Repo: https://github.com/20100402/LABMOVIEAPP-20100402

~~~Javascript
export const getMovie = (args) => {
  const token = localStorage.getItem("token")
  const [, idPart] = args.queryKey;
  const { id } = idPart;
  return fetch(
    `/api/movies/${id}`, {
    headers: {
      'token': `${token}`
    },
    method: 'get'
  }
  ).then((response) => {
    if (!response.ok) {
      throw new Error(response.json().message);
    }
    return response.json();
  })
    .catch((error) => {
      throw error
    });
};

~~~
