"use client";
import useQueryData from "@/hooks/queries/useQueryData";
import { Country } from "@/types";
import Image from "next/image";
import { useState } from "react";

const Main = () => {
  const { data, isLoading } = useQueryData();
  const [country, setCountry] = useState("");

  if (isLoading) {
    <div>로딩중</div>;
  }

  console.log(data);

  // const filteredCountry = data?.filter();

  return (
    <main>
      <ul>
        {data?.map((item: Country) => (
          <li key={item.name.common}>
            <Image
              src={item.flags.svg}
              alt={item.name.common}
              width={100}
              height={100}
            />
            <p>나라이름 : {item.name.common}</p>
            <p>수도 : {item.capital}</p>
            <p>{item.timezones}</p>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Main;
