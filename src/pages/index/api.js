import { POST, POST_FILE } from "../../http";


const submitParams = {
    user_id: '',
    doc_text: '',
    title: '',
    memo: '',
    img_id: ''
}
/**
 * 提交首页文档
 * @param {*} params 
 * @returns 
 */
export const submit = (params = submitParams) => POST('doc/index/create', params)

/**
 * 附件上传
 * @param {File} file 
 * @returns 
 */
export const  uploadFile=(file)=> POST_FILE('upload/file',{file})