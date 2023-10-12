import { axiosInstance as axios } from "../api";
import { localStorageItems } from "../../utils/constants";

export const fetchCompability = async () => {
  const local = localStorage.getItem("userInfo");
  if (local) {
    const storageData = JSON.parse(local);
    const body = {
      name: storageData[localStorageItems.NAME],
      email: storageData[localStorageItems.EMAIL],
      gender: storageData[localStorageItems.GENDER],
      dateOfBirth: storageData[localStorageItems.DATE_OF_BIRTH],
      lat: "-12.000",
      lon: "22.0",
    };

    try {
      const data = await axios.post("api/users/registration", body, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });
      window.location.replace("https://astrology-one.vercel.app");
      console.log(data);
    } catch (e) {
      console.error(e);
    }
  }
};
