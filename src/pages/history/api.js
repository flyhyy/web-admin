import { POST, POST_FILES } from "../../http";


/**
 * 记录创建
 * @param {*} params 
 * @returns 
 */
export const createHistory=(params = {date,memo,img_paths})=>POST('history/create',params) 

/**
 * 多文件上传
 */
export const uploadFiles=(files)=>{
    let arr  = []
    if(files.length){
        for(let i of files){
            if(i.hasOwnProperty('raw')){
                arr.push(i.raw)
            }else{
                arr.push(i)
            }
        }
    }
  return  POST_FILES(arr)
}