import mongoose, { Schema } from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt"

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
            index: true
        },

        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
        },
        fullname: {
            type: String,
            required: true,
            trim: true,
        },
        avatar: {
            type: String,//Couldinary url
            required: true,

        },
        coverImage: {
            type: String,
        },
        watchHistory:
            [{
                type: Schema.Types.ObjectId,
                ref: "Video"

            }],
        password: {
            type: String,
            required: [true, 'Password is required'],
        },
        refreshToken: {
            type: String,
        }


    }, { timestamps: true })


userSchema.pre("save", async function (next) {
    
})

export const User = mongoose.model("User", userSchema)





