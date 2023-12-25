import React from "react";
import { Label, Select, TextInput, Datepicker } from "flowbite-react";
import { hours_count_array } from "../constants/data";

interface InputProps {
  placeholder?: string;
  type?: "text" | "email" | "select" | "date" | "hour" | "textarea";
  label?: string;
  name?: string;
  options?: string[] | number[];
  icon?: any;
  onAction?: (...args: any[]) => void;
}

const Input: React.FC<InputProps> = ({
  placeholder,
  type = "text",
  name,
  options,
  label,
  onAction,
  icon,
}) => {
  if (type === "text")
    return (
      <div className="mb-4">
        {label && (
          <label
            className="block text-gray-700 text-sm font-medium mb-2"
            htmlFor="username"
          >
            {label}
          </label>
        )}
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
          id="username"
          type={type}
          name={name}
          onChange={onAction}
          placeholder={placeholder}
        />
      </div>
    );
  else if (type === "select") {
    return (
      <div className="max-w-md  w-full">
        <div className="mb-2 block">
          <Label htmlFor="countries" value={label} />
        </div>
        <Select
          name={name}
          id="countries"
          required
          style={{ width: "100%" }}
          onChange={onAction}
        >
          {options &&
            options.map((option, index) => {
              return <option key={index}>{option}</option>;
            })}
        </Select>
      </div>
    );
  } else if (type === "email") {
    return (
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email1" value={label} />
        </div>
        <TextInput
          name={name}
          onChange={onAction}
          id="email1"
          type="email"
          placeholder={placeholder ? placeholder : ""}
          required
        />
      </div>
    );
  } else if (type === "date") {
    return (
      <div className="max-w-md">
        <div className="mb-2 block">
          <Label htmlFor="label" value={label} />
        </div>
        <Datepicker name={name} id="label" onSelectedDateChanged={onAction} />
      </div>
    );
  } else if (type === "hour") {
    return (
      <div className="max-w-md">
        <div className="mb-2 block">
          <Label htmlFor="countries" value={label} />
        </div>
        <Select name={name} id="countries" required onChange={onAction}>
          {hours_count_array &&
            hours_count_array.map((option, index) => {
              return <option key={index}>{option}</option>;
            })}
        </Select>
      </div>
    );
  } else if (type === "textarea") {
    return (
      <div className="max-w-md">
        <div className="mb-2 block">
          <Label htmlFor="countries" value={label} />
        </div>
        <textarea
          name={name}
          className="resize-y rounded-md w-full"
          placeholder={placeholder}
          onChange={onAction}
        ></textarea>
      </div>
    );
  } else {
    return <></>;
  }
};

export default Input;
