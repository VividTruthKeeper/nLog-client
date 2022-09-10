// Modules
import { useState, useEffect } from "react";

// Types
import { SignInputType } from "../../types/sign";

// Validators
import { validateEmail } from "../../validators/validators";
import { validateName } from "../../validators/validators";
import { validatePassword } from "../../validators/validators";

const SignInput = ({
  required,
  defaultValue,
  type,
  placeholder,
  errorMsg,
  dispatchMethod,
}: SignInputType) => {
  // Inline Types
  interface inputType {
    value: string;
    valid: boolean;
    showError: boolean;
  }

  const [input, setInput] = useState<inputType>({
    value: "",
    valid: false,
    showError: false,
  });

  useEffect(() => {
    if (type === "name") {
      setInput({ ...input, valid: validateName(input.value) });
    } else if (type === "email") {
      setInput({ ...input, valid: validateEmail(input.value) });
    } else if (type === "password") {
      setInput({ ...input, valid: validatePassword(input.value) });
    }
  }, [
    type,
    input.value,
    input.valid,
    validateEmail,
    validateName,
    validatePassword,
  ]);
  return (
    <div className="sign-input-block">
      <div className="sign-input-wrapper">
        <input
          autoComplete="true"
          type={type}
          placeholder={placeholder}
          required={required}
          value={input.value}
          defaultValue={defaultValue}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setInput({ ...input, value: e.target.value, showError: true });
            if (!dispatchMethod) {
              return;
            }
            dispatchMethod(e.target.value);
          }}
        />
      </div>
      <span
        className={
          input.showError && !input.valid
            ? "sign-warning active"
            : "sign-warning"
        }
      >
        {errorMsg}
      </span>
    </div>
  );
};

export default SignInput;
