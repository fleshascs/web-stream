import { client } from "../connection";

interface ICreateUser {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    providerId: string;
    provider: string;
}

async function createUser({
    firstName,
    lastName,
    email,
    password,
    providerId,
    provider,
}: ICreateUser) {
    //   return new Promise(async (resolve, reject) => {
    //     const user = await UserModel.findOne({ email })
    //     if (user) {
    //       reject('Email is already in use')
    //     }
    //     resolve(
    //       await UserModel.create({
    //         providerId,
    //         provider,
    //         firstName,
    //         lastName,
    //         email,
    //         password
    //       })
    //     )
    //   })
}

export { createUser };
