import React from "react";
import Navbar from "./Navbar";

export default function Header({ onOpenModal }) {
  return (
    <header>
      <Navbar onOpenModal={onOpenModal} />
    </header>
  );
}
