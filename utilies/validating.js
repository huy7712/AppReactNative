export const isValidating =(stringEmail)=>{
    return (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(stringEmail))
    }
// validate password
export const isValidatePass=(stringPass)=>{
    return (stringPass.length>=1)
}
