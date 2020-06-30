# graphQL

Simple Blogging App ultilizing graphQL technology.

## Queries
1. All users:
{
  users {
    id,
    name,
    email
  }
}

2. Specfic user given userId:
{
  user(id: "5efaa22e2d4be1034fbc12d6") {
    name,
    email
  }
}

3. All posts:
{
  posts {
    title,
    author {
      name
    }
  }
}

4. Specific post given postId:
{
  post(id: "5efaa3ed29414103af6925d6") {
    title,
    author {
      name,
      email
    }
  }
}

## Mutations
1 Create new user:
mutation {
  newUser(name: "MutatedBot", email:"mutatedBot@test.com", password:"Password123!") {
    id,
    name,
    email,
  }
}

## Common Errors
1. Creating a circular dependency (two different files reference one another)
  - Problem: querying between users and posts bidrectionally
  - Fix: using ES6 syntax and wrap field within a fat arrow function to create a thunk. Import dependency directly within thunk.