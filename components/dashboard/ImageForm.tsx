import React from "react";

function ImageForm({ options, defaultValue, onChange }: any) {
  return (
    <div className="radio-toggler shadow ">
      {options.map(
        (
          option: {
            name: string | number | readonly string[] | undefined;
            icon: React.ReactNode;
            label: React.ReactNode;
          },
          index: number
        ) => (
          <label
            key={index}
            className="flex items-center gap-2  p-2 px-4 shadow"
          >
            <input
              type="radio"
              name="bgType"
              value={option.name}
              defaultChecked={defaultValue === option.name}
              //@ts-ignore
              onClick={(e) => onChange(e.target.value)}
            />
            <div className="flex items-center gap-2">
              {option.icon}
              {option.label}
            </div>
          </label>
        )
      )}
    </div>
  );
}

export default ImageForm;
