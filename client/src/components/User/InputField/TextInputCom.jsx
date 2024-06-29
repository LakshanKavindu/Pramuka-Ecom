import { Label, TextInput } from "flowbite-react";

const TextInputCom = ({
  value,
  setValue,
  id,
  lable,
  icon,
  type,
  disabled,
  inputType,
  placeholder,
  inputErr,
  helperText,
  size,
}) => {
  const regex = /^[0-9+]+$/;
  const handleValue = (e) => {
    if (inputType === "tel" && e !== "") {
      if (!regex.test(e)) return;
    }
    setValue(e);
  };

  return (
    <div className="w-full mt-3">
      <div className="mb-2 block">
        <Label htmlFor={id} value={lable} />
      </div>
      <div className="relative">
        <TextInput
          id={id}
          disabled={disabled ? true : false}
          sizing={size ? size : "md"}
          type={type ? type : "text"}
          icon={icon ? icon : null}
          color={inputErr ? "failure" : "primary"}
          value={value}
          placeholder={placeholder}
          onChange={(e) => handleValue(e.target.value)}
          helperText={helperText ? helperText : ""}
          required
          className="w-full"
        />
      </div>
    </div>
  );
};

export default TextInputCom;
