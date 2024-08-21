import { UserService } from "../services/index.js";
import { httpResponse } from "../utils/index.js";
import jwt from "jsonwebtoken";
import bcrypt from 'bcrypt';

export const UserController = {

 
    register: async (req, res) => {
        try {
            const { email, password } = req.body;
            
            const existingUser = await UserService.findOne({ email });
            if (existingUser) {
                return httpResponse.BAD_REQUEST(res, 'User already exists');
            }
            
            const hashedPassword = await bcrypt.hash(password, 10);
            const newUser = await UserService.add({ ...req.body, password: hashedPassword });
            return httpResponse.CREATED(res, newUser);
        } catch (error) {
            return httpResponse.INTERNAL_SERVER_ERROR(res, error.message);
        }
    },

    login: async (req, res) => {
        try {
            const { email, password } = req.body;

            const user = await UserService.findOne({ email });
			
            if (!user) {
                return httpResponse.BAD_REQUEST(res, 'Invalid email or password');
            }

            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                return httpResponse.BAD_REQUEST(res, 'Invalid email or password');
            }

            const token = jwt.sign({ id: user._id }, 'your_jwt_secret', { expiresIn: '1h' });
            return httpResponse.SUCCESS(res, { token, user });
        } catch (error) {
            return httpResponse.INTERNAL_SERVER_ERROR(res, error.message);
        }
    },

    getAll: async (req, res) => {
        try {
            const data = await UserService.getAll();
            return httpResponse.SUCCESS(res, data);
        } catch (error) {
            return httpResponse.INTERNAL_SERVER_ERROR(res, error.message);
        }
    },
 
    add: async (req, res) => {
        try {
            const data = await UserService.add(req.body);
            return httpResponse.CREATED(res, data);
        } catch (error) {
            return httpResponse.INTERNAL_SERVER_ERROR(res, error.message);
        }
    },
  
    update: async (req, res) => {
        try {
            const data = await UserService.update(req.params.id, req.body);
            return httpResponse.SUCCESS(res, data);
        } catch (error) {
            return httpResponse.INTERNAL_SERVER_ERROR(res, error.message);
        }
    },
   
    delete: async (req, res) => {
        try {
            const data = await UserService.delete(req.params.id);
            return httpResponse.SUCCESS(res, data);
        } catch (error) {
            return httpResponse.INTERNAL_SERVER_ERROR(res, error.message);
        }
    }
};
