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
        w-max bg-[#0082E6] hover:bg-[#0082E6]/80 text-white font-semibold py-2.5 px-4 rounded-lg shadow-md transition-colors duration-200 flex items-center gap-2
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
