import axiosInstance from "../axiosInstance";

export const login = async (credentials) =>{

    const res = await axiosInstance.post("users/login", credentials)

    console.log("login data", res.data)
    return res.data


}

export const signup = async (credentials) =>{

    const res = await axiosInstance.post("users/register", credentials)

    console.log("signup", res.data)
    return res.data


}