import React, { useState } from "react";

import "./GenderPage.scss";
import { Female, Male } from "../../assets/images/iconPack";
import TileItem from "../../components/tileSelector/TileItem";
import GoBack from "../../components/goBack/GoBack";
import { useHistory } from "react-router-dom";
import { DateOfBirth, localStorageItems } from "../../utils/constants";
import { pushToLocalStorage } from "../../utils/functions";

const GenderPage = () => {
  const history = useHistory();

  const [active, setActive] = useState<"Male" | "Female" | null>(null);

  const changeGender = (data: "Male" | "Female") => {
    setActive(data);
    pushToLocalStorage({ value: data, itemName: localStorageItems.GENDER });
    history.push(DateOfBirth);
  };
  return (
    <div className={"gender"}>
      <GoBack />
      <h1 className={"gender__title"}>What’s your gender?</h1>
      <div className={"gender__container"}>
        <TileItem
          onClick={() => {
            changeGender("Male");
          }}
          active={active === "Male"}
          title={"Male"}
          Icon={() => <Male />}
        />
        <TileItem
          onClick={() => {
            changeGender("Female");
          }}
          active={active === "Female"}
          title={"Female"}
          Icon={() => <Female />}
        />
      </div>
    </div>
  );
};

export default GenderPage;
