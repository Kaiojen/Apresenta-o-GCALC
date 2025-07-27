import React from "react";

export default function LogoBase({ className = "", size = 48 }) {
  return (
    <div
      className={`flex items-center justify-center ${className}`}
      style={{ width: size, height: size }}
    >
      <img
        src="/logo base.png"
        alt="Base Administrativa do Complexo de Saúde/RJ"
        className="w-full h-full object-contain"
      />
    </div>
  );
}
