import { CountryProps } from "@/types";
import Image from "next/image";
import React from "react";

const CountryListItems = ({ item }: CountryProps) => {
  return (
    <div>
      <Image
        src={item.flags.svg}
        alt={item.name.common}
        width={100}
        height={100}
      />
      <p>나라이름 : {item.name.common}</p>
      <p>수도 : {item.capital}</p>
      <p>{item.timezones}</p>
    </div>
  );
};

export default CountryListItems;
