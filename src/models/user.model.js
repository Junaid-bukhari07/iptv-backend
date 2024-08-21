import mongoose from "mongoose";
const schema = mongoose.Schema(
	{
		name: { type: String, required: true, maxlength: 50 },
		email: { type: String, required: true, unique: true },
		password: { type: String, required: true },
	},
	{ timestamps: true }
);
export const UserModel = mongoose.model("User", schema);
