import axios from 'axios';
import { FUNCTIONS_URL } from '@/constant.js'

/**
 * 部位一覧を取得する関数
 * @returns 
 */
export const fetchPart = async () => {
  const cached = sessionStorage.getItem('partList');
  if (cached !== null) {
    return JSON.parse(cached);
  }

  try {
    const res = await axios.get(FUNCTIONS_URL.GET_PART,{
      headers: {
        Authorization: FUNCTIONS_URL.AUTHORIZATION,
      },
    })
    sessionStorage.setItem('partList', JSON.stringify(res.data));
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

/**
 * 
 * @returns 種目一覧を取得する関数
 */
export const fetchMenu = async () => {
  const cached = sessionStorage.getItem('menuList');
  if (cached !== null) {
    return JSON.parse(cached);
  }

  try {
    const res = await axios.get(FUNCTIONS_URL.GET_MENU,{
      headers: {
        Authorization: FUNCTIONS_URL.AUTHORIZATION,
      },
    })
    sessionStorage.setItem('menuList', JSON.stringify(res.data));
    return res.data;
    } catch (err) {
    console.log(err);
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
    sessionStorage.setItem('recordList', JSON.stringify(res.data));
    return res.data;
    } catch (err) {
    console.log(err);
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
      const res = await axios.post(FUNCTIONS_URL.POST_RECORD, formData, {
        headers :{
          Authorization: FUNCTIONS_URL.AUTHORIZATION,
          "Content-Type": "application/json",
        }
      });
      console.log("success:", res.data);
    }catch(err){
      console.log("error:", err);
      return false;
    }
  }
  return true;
}
