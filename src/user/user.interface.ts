// user.interface.ts

export interface User {
    id?: string;
    email: string;
    password: string;
    // Add other properties as needed
  }
  
  export interface QueryResponse {
    Items: User[]; // Assuming each item represents a user
    // Add other properties as needed (e.g., LastEvaluatedKey)
  }
  