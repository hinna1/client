import axios from "axios";

export const localhost = "https://svnsite.ovh:5000/";

/*
export const adminLogin = localhost + "/admin/login";
export const adminGetUsers = localhost + "/admin/getUsers";
export const adminCreateUser = localhost + "/admin/createUser";
export const adminDeleteUser = localhost + "/admin/deleteUser";
export const userRegister = localhost + "/user/register";
*/

export const baseAxios = axios.create({
    timeout: 5000
})


export const userLogin = localhost + "/user/login";
export const userCheckAuth = localhost + "/user/checkAuth";
export const adminCheckAuth = localhost + "/admin/checkAuth";
export const userInfo = localhost + "/user/getInfo";