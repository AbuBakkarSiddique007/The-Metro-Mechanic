"use server";
import bcrypt from "bcrypt";
import dbConnect, { collectionNameObject } from "@/lib/dbConnect";

export const registerUser = async (userData) => {
    try {
        const { name, email, password } = userData || {};

        if (!name || !email || !password) {
            return { success: false, message: "All fields are required" };
        }

        if (!/^\S+@\S+\.\S+$/.test(email)) {
            return { success: false, message: "Invalid email" };
        }

        const collectionName = (collectionNameObject && collectionNameObject.userCollection) || "users";
        const userCollection = await dbConnect(collectionName);

        const existingUser = await userCollection.findOne({ email });

        if (existingUser) {
            return {
                success: false,
                message: "User already exists with this email"
            };
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser =
        {
            name,
            email,
            password: hashedPassword,
            createdAt: new Date()
        };

        const result = await userCollection.insertOne(newUser);

        if (result && result.acknowledged) {
            return { success: true, message: "User registered successfully" };
        }

        return { success: false, message: "Failed to register user" };
    } catch (err) {
        console.error("registerUser error:", err);
        return { success: false, message: "Server error" };
    }
};