// remote - ./src/components/Button.tsx
import React from "react";

interface ButtonProps {
  text: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 hover:cursor-pointer"
    >
      {text}
    </button>
  );
};

export default Button;