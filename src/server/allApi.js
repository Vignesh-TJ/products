import { commonApi } from "./commonApi"
import {serverUrl} from "./serverUrl"

export const addProductApi=async(reqBody)=>{
    return await commonApi('POST',`${serverUrl}/product`,reqBody)
}
export const getAllProductApi=async()=>{
    return await commonApi('GET',`${serverUrl}/product`,'')
}
export const deleteProductApi= async(id)=>{
    return await commonApi('DELETE',`${serverUrl}/product/${id}`,{})
 }

