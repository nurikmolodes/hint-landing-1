import React, { useState } from "react";
import GoBack from "../../components/goBack/GoBack";
import Button from "../../components/Button/Button";
import { useHistory } from "react-router-dom";
import "../cityOfBirth/CityOfBirthPage.scss";
import CustomInput from "../../components/input/CustomInput";
import { Gender, localStorageItems } from "../../utils/constants";
import { pushToLocalStorage } from "../../utils/functions";

const Name = () => {
  const [city, setCity] = useState("");
  const [cities, setCities] = useState([]);

  const history = useHistory();

  const changeCity = (value: string) => {
    setCity(value);
  };

  const click = () => {
    pushToLocalStorage({ value: city, itemName: localStorageItems.NAME });
    history.push(Gender);
  };

  const disabledButton = !city;
  return (
    <div className={"city-of-birth"}>
      <GoBack />
      <h1 className={"city-of-birth__title"}>What is your name?</h1>
      <h4 className={"city-of-birth__desc"}>
        Just type your name
      </h4>
      <div className={"city-of-birth__input-container"}>
        <CustomInput data={city} setData={changeCity} placeholder={"Name"} />
        <div
          className={`city-of-birth__popup ${cities.length ? "city-of-birth__popup_active" : ""}`}>
          {cities.map((item: { value: string }) => {
            return (
              <div
                onClick={() => {
                  setCity(item.value);
                  setCities([]);
                }}
                className={"city-of-birth__popup-item"}>
                {item?.value}
              </div>
            );
          })}
        </div>
      </div>
      <Button disabled={disabledButton} title={"Continue"} onClick={click} />
    </div>
  );
};

export default Name;
