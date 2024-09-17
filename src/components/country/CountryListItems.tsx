import { CountryProps } from "@/types";
import Image from "next/image";
import React from "react";
import S from "@/styles/style.module.css";

const CountryListItems = ({ item, innerRef }: CountryProps) => {
  return (
    <div ref={innerRef} className={S.countryListItem}>
      <Image
        src={item.flags?.svg}
        alt={item.name?.common}
        width={250}
        height={150}
      />
      <h2>{item.name?.common}</h2>
      <h3>수도 : {item.capital}</h3>
    </div>
  );
};

export default CountryListItems;
