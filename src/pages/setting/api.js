import { POST, POST_FILE } from "../../http";

/**
 * 设置历史查看密码
 * @param {*} params 
 * @returns 
 */
export const setPassword= (params = {password:''})=>POST('setting/historyPassword',params)