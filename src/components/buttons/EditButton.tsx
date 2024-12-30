import { useState } from "react";
import { Pencil, Check } from "lucide-react";

export const EditButton = () => {
  const [isEditing, setIsEditing] = useState(false);

  const toggleEdit = () => {
    setIsEditing((prev) => {
      if (!prev) {
        document.designMode = "on";
      } else {
        document.designMode = "off";
      }
      return !prev;
    });
  };

  return (
    <div className="relative inline-block">
      <button
        onClick={toggleEdit}
        className={`
        w-max border ease-in-out flex items-center justify-center gap-2
      bg-[#0082E6] hover:bg-[#0082E6]/80 text-white font-semibold py-2.5 px-3 rounded-lg shadow-md transition-colors duration-200
        `}
      >
        {isEditing ? (
          <Check className="w-5 h-5" />
        ) : (
          <Pencil className="w-5 h-5" />
        )}
      </button>
    </div>
  );
};
