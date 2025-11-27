// Type inference in zod
// When using zod, we’re done runtime validation. 
// For example, the following code makes sure that the user is sending the right inputs to update their profile information

import { z } from 'zod';
import express from "express";

const app = express();

// Define the schema for profile update
const userProfileSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  age: z.number().min(18).optional(),
});

// rather than creating whole different name , email , age 
// why not get the reference from an existing scheme which is created by zod
// this is how u do it
export type finalUserScheme = z.infer<typeof userProfileSchema>;

app.put("/user", (req, res) => {
  const { success } = userProfileSchema.safeParse(req.body);
  const updateBody:finalUserScheme = req.body; // how to assign a type to updateBody?

  if (!success) {
    res.status(411).json({});
    return
  }
  // update database here
  res.json({
    message: "User updated"
  })
});

app.listen(3000);