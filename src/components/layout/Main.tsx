"use client";
import useQueryData from "@/hooks/queries/useQueryData";
import { Country } from "@/types";
import { useEffect, useState } from "react";
import CountryListItems from "../country/CountryListItems";
import CountryDetailModal from "../country/CountryDetailModal";
import S from "@/styles/style.module.css";
import GoTopButton from "@/utils/GoTopButton";
import Loading from "./Loading";

const Main = () => {
  const { data, isLoading } = useQueryData();
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);
  const [isActive, setIsActive] = useState(false);
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    document.body.classList.toggle(S.active, isActive);
  }, [isActive]);

  const handleClick = (country: Country) => {
    setSelectedCountry(country);
    setIsActive(true);
  };

  const handleCloseModal = () => {
    setSelectedCountry(null);
    setIsActive(false);
  };

  const sortData = (data: Country[] | undefined, order: string) => {
    if (!data) return [];
    return data.sort((a, b) => {
      const nameAsc = a.name.common.toLowerCase();
      const nameDesc = b.name.common.toLowerCase();
      if (order === "asc") {
        return nameAsc.localeCompare(nameDesc);
      } else if (order === "desc") {
        return nameDesc.localeCompare(nameAsc);
      }
      return 0;
    });
  };

  const handleSelectValue = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOrder(e.target.value);
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <main>
      <select value={sortOrder} onChange={handleSelectValue}>
        <option value="asc">오름차순</option>
        <option value="desc">내림차순</option>
      </select>
      <ul>
        {sortData(data, sortOrder).map((item: Country) => (
          <li key={item.name.common} onClick={() => handleClick(item)}>
            <CountryListItems item={item} />
          </li>
        ))}
        {selectedCountry && (
          <CountryDetailModal
            country={selectedCountry}
            onClose={handleCloseModal}
          />
        )}
      </ul>
      <GoTopButton />
    </main>
  );
};

export default Main;
