import React, { useEffect } from "react";
import { useCustomDispatch, useCustomSelector } from "../../hooks/store.ts";
import { selectCurrentWeatherData } from "../../store/selectors.ts";
import { fetchCurrentWeather } from "../../store/thunks/fetchCurrentWeather.ts";
import { Days } from "./Components/Days/Days.tsx";
import { ThisDay } from "./Components/ThisDay/ThisDay.tsx";
import { ThisDayInfo } from "./Components/ThisDayInfo/ThisDayInfo.tsx";
import { useNavigate } from "react-router-dom";
import s from "./Home.module.scss";

interface Props {}

export const Home = (props: Props) => {
  const dispatch = useCustomDispatch();
  const { weather } = useCustomSelector(selectCurrentWeatherData);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchCurrentWeather("paris"));
  }, []);

  const handleNavigate = () => {
    navigate("/details-page");
  };

  return (
    <div className={s.home}>
      <div className={s.wrapper} onClick={handleNavigate}>
        <ThisDay weather={weather} />
        <ThisDayInfo />
      </div>
      <Days />
    </div>
  );
};
