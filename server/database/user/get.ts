import { client } from "../connection";

async function getUserById(id: string) {
    //return await UserModel.findById(id).exec()
}

async function getUserByProviderId(providerId: string) {
    client.query(
        "SELECT * FROM users WHERE username=$1",
        [providerId],
        (err: any, result: any) => {
            console.log("error", err);
            console.log("result", result);
        }
    );
}

export { getUserById, getUserByProviderId };
