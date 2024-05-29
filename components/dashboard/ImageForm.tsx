import React from "react";

function ImageForm({ options }: any) {
  return (
    <div className="bg-gray-300 h-40 py-10 flex justify-center items-center">
      <div className="radio-toggler shadow">
        {options.map((option: { name: string | number | readonly string[] | undefined; icon: React.ReactNode; label: React.ReactNode }, index: number) => (
          <label key={index} className="flex items-center gap-2 border p-2 px-4 shadow">
            <input type="radio" name="bgType" value={option.name} />
            <div className="flex items-center gap-2">
              {option.icon}
              {option.label}
            </div>
          </label>
        ))}
      </div>
    </div>
  );
}

export default ImageForm;
