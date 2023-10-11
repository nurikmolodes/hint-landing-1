import {axiosInstance as axios} from "../api";
import {localStorageItems} from "../../utils/constants";

export const fetchCompability = async () => {
  const local = localStorage.getItem('userInfo');
  if (local) {
    const storageData = JSON.parse(local);
    const body = {
      yourGender: storageData[localStorageItems.GENDER],
      yourInfo: {
        dateOfBirth: storageData[localStorageItems.DATE_OF_BIRTH],
        timeOfBirth: storageData[localStorageItems.TIME_OF_BIRTH],
      },
      partnerInfo: {
        dateOfBirth: storageData[localStorageItems.PARTNER_DATE_OF_BIRTH],
        timeOfBirth: storageData[localStorageItems.PARTNER_TIME_OF_BIRTH],
      }
    };

    try {
      const data = await axios.post('api/astro/compatibility', JSON.stringify(body))
      console.log(data);
    } catch (e) {
      console.error(e);
    }
  }
}
