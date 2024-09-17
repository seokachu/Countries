import { ModalProps } from "@/types";
import S from "@/styles/style.module.css";
import Image from "next/image";
import Map from "./Map";
import { useEffect, useRef } from "react";

const CountryDetailModal = ({ country, onClose }: ModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [onClose]);

  return (
    <section className={S.modalWrap}>
      <div className={S.modal} ref={modalRef}>
        <Map lat={country.latlng[0]} lng={country.latlng[1]} />
        <Image
          src={country.flags.svg}
          alt={country.name.common}
          width={250}
          height={150}
        />
        <div className={S.country}>
          <h2>{country.name.common}</h2>
          <h3>수도 : {country.capital}</h3>
          <button onClick={onClose}>닫기</button>
        </div>
      </div>
    </section>
  );
};

export default CountryDetailModal;
