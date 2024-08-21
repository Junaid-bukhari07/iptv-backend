import { UserModel } from "../models/index.js";

export const UserService = {
	getAll: async () => {
		return UserModel.find();
	},

	add: async (body) => {
		return UserModel.create(body);
	},
	update:async (id,body)=>{
		return UserModel.findByIdAndUpdate(id,body,{new:true})
	},
	delete:async (id)=>{
		return UserModel.findByIdAndDelete(id)
	},
	findOne: async (filter) => {
        return await UserModel.findOne(filter);
    },
};
