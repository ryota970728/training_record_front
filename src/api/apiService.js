import axios from 'axios';
import { FUNCTIONS_URL } from '@/constant.js'

/**
 * 部位一覧を取得する関数
 * @returns 
 */
export const fetchPart = async () => {
  try {
    const res = await axios.get(FUNCTIONS_URL.GET_PART,{
      headers: {
        Authorization: FUNCTIONS_URL.AUTHORIZATION,
      },
    })
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

/**
 * 
 * @returns 種目一覧を取得する関数
 */
export const fetchMenu = async () => {
  try {
    const res = await axios.get(FUNCTIONS_URL.GET_MENU,{
      headers: {
        Authorization: FUNCTIONS_URL.AUTHORIZATION,
      },
    })
    return res.data;
    } catch (error) {
    console.log(error);
  }
};

/**
 * 記録一覧を取得する関数
 * @returns 
 */
export const fetchRecords = async () => {
  try {
    const res = await axios.get(FUNCTIONS_URL.GET_RECORDS,{
      headers: {
        Authorization: FUNCTIONS_URL.AUTHORIZATION,
      },
    })
    return res.data;
    } catch (error) {
    console.log(error);
  }
};

/**
 * 入力したデータを登録する関数
 * @param {*} formDataList 記録リスト
 * @returns 
 */
export const postRecordData = async (formDataList) => {
  for (const item of formDataList) {
    let formData = new FormData();
    formData.append('record', JSON.stringify(item));
    try{
      await axios.post(FUNCTIONS_URL.POST_RECORD, formData, {
        headers :{
          Authorization: FUNCTIONS_URL.AUTHORIZATION,
          "Content-Type": "application/json",
        }
      });
      return true;
    }catch(error){
      console.log("error:", error);
      return false;
    }
  }
}

export const postMenuData = async (partId, menuName) => {
  let formData = new FormData();
  formData.append('partId', JSON.stringify(partId));
  formData.append('menuName', JSON.stringify(menuName));
  try{
    await axios.post(FUNCTIONS_URL.POST_MENU, formData, {
      headers :{
        Authorization: FUNCTIONS_URL.AUTHORIZATION,
        "Content-Type": "application/json",
      }
    });
    return true;
  }catch(error){
    console.log("error:", error);
    return false;
  }
}
