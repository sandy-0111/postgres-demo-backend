import generalResponse from "../helper/generate-response.helper.js";
import UserProvider from "../provider/UserProvider.js";

class UserController {

    getUsers = async (req, res) => {
        try {
            const userData = await UserProvider.getAllusers();
            return generalResponse(res, userData)
        } catch (error) {
            return generalResponse(
                res,
                error,
                "Something went wrong!!",
                "error",
                false,
                200
            )
        }
    }
    getUserById = async (req, res) => {
        try {
            const where = { user_id: req.params.id }
            const userDetail = await UserProvider.getUserById(where);
            if (userDetail) {
                return generalResponse(res, userDetail);
            } else {
                return generalResponse(res, null, "user not found", "error", true, 200);
            }
        } catch (e) {
            return generalResponse(
                res,
                e,
                "Something went wrong!!",
                "error",
                false,
                200
            );
        }
    }

    createUser = async (req, res) => {
        try {
            const payload = req.body;
            const user = await UserProvider.createUser(payload);
            return generalResponse(res, user, "User created successfully");
        } catch (e) {
            return generalResponse(
                res,
                e,
                "Something went wrong!!",
                "error",
                false,
                200
            );
        }
    }

    deleteUser = async (req, res) => {
        try {
            const where = { user_id: req.params.id }
            await UserProvider.removeUser(where);
            return generalResponse(
                res,
                null,
                "user deleted successfully",
                "success",
                true
            );
        } catch (e) {
            return generalResponse(
                res,
                e,
                "Something went wrong!!",
                "error",
                false,
                200
            );
        }


    }

    updateUser = async (req, res) => {
        try {
            const payload = req.body;
            const where = { user_id: req.params.id }
            await UserProvider.updateUser(payload, where);
            return generalResponse(res, null, "user updated successfully");

        } catch (e) {
            return generalResponse(
                res,
                e,
                "Something went wrong!!",
                "error",
                false,
                200
            );
        }
    }
}

export default new UserController()

