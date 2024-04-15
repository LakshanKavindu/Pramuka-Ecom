import { Label, TextInput } from "flowbite-react";

const TextInputCom = ({
  value,
  setValue,
  id,
  lable,
  icon,
  type,
  placeholder,
  inputErr,
  helperText,
}) => {
  const regex = /^[0-9+]+$/;
  const handleValue = (e) => {
    if (type === "number" && e !== "") {
      if (!regex.test(e)) return;
    }
    setValue(e);
  };

  return (
    <div className="max-w-md mt-3">
      <div className="mb-2 block">
        <Label htmlFor={id} value={lable} />
      </div>
      <div className="relative">
        <TextInput
          id={id}
          sizing={"sm"}
          type="text"
          icon={icon}
          color={inputErr ? "failure" : ""}
          value={value}
          placeholder={placeholder}
          onChange={(e) => handleValue(e.target.value)}
          helperText={helperText ? helperText : ""}
          required
        />
      </div>
    </div>
  );
};

export default TextInputCom;
