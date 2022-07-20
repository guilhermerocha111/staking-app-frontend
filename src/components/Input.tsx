import { FiChevronUp, FiChevronDown } from "react-icons/fi";

interface InputProps {
  type: "text" | "number" | "email" | "password";
  placeholder?: string;
  defaultValue?: string;
  value: string;
  min?: number | string;
  max?: number | string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  className?: string;
}

interface NumberInputProps {
  placeholder?: string;
  value: string;
  setValue: (value: string) => void;
  min?: number;
  max?: number;
  step: number;
  decimalpoints?: number;
  required?: boolean;
  className?: string;
  roundTo?: number;
}

export default function Input({ ...props }: InputProps) {
  return <input {...props} />;
}

export function NumberInput({ ...props }: NumberInputProps) {
  return (
    <div className={`counter ${props.className}`}>
      <input
        type="number"
        placeholder={props.placeholder}
        value={props.value}
        onChange={(e) => {
          props.setValue(e.target.value.replace('-', ''))
        }}
        onBlur={(e) =>
          {
            let targetValue = (props.max && Number(e.target.value) > props.max) ? String(props.max) : e.target.value
            if (props.roundTo) {
              let parsedValue = String(Math.trunc(Number(targetValue)/props.roundTo) * props.roundTo)
              props.setValue(
                parseFloat(parsedValue).toFixed(props.decimalpoints || 0)
              )
            } else {
              props.setValue(
                parseFloat(targetValue).toFixed(props.decimalpoints || 0)
              )
            }
            
          }
        }
        min={props.min}
        max={props.max}
        required={props.required}
      />
      <div>
        <button
          type="button"
          onClick={() =>
            props.setValue(
              `${(parseFloat(props.value) + props.step).toFixed(
                props.decimalpoints
              )}`
            )
          }
        >
          <FiChevronUp />
        </button>
        <button
          type="button"
          onClick={() =>
            {
              if (Number(props.value.split('.')[0]) === 0) {
                return
              }
              props.setValue(
                `${(parseFloat(props.value) - props.step).toFixed(
                  props.decimalpoints
                )}`
              )
            }
          }
        >
          <FiChevronDown />
        </button>
      </div>
    </div>
  );
}
