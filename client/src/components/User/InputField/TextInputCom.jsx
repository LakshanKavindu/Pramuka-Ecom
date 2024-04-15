import { Label, TextInput} from "flowbite-react";

const TextInputCom = ({ value, setValue, id, lable, icon }) => {
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
            value={value}
            onChange={(e) => setValue(e.target.value)}
            required
          />
        </div>
      </div>
  );
};

export default TextInputCom;
