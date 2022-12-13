
import { POST } from "../../http"

const LoginParams = {
    account:'',
    passwrod:''
}

export const login = (data = LoginParams) => POST('/login/index',data) 