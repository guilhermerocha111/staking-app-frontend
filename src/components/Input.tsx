import { FiChevronUp, FiChevronDown } from "react-icons/fi";
import useCommon from '../hooks/useCommon';

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
  const { addCommasToNumber } = useCommon();

  return (
    <div className={`counter ${props.className ? props.className : ''}`}>
      <input
        pattern="[0-9.]+"
        type="text"
        placeholder={props.placeholder}
        value={String(addCommasToNumber(Number(props.value), 1))}
        onChange={(e) => {
          props.setValue(e.target.value.replace('-', '').replaceAll(',', '').replace(/[^\d]+/g,''))
        }}
        onBlur={(e) =>
          {
            let targetValue = (props.max && Number(e.target.value.replaceAll(',', '').replace(/[^\d]+/g,'')) > props.max) ? String(props.max) : e.target.value.replaceAll(',', '').replace(/[^\d]+/g,'')
            console.log(targetValue)
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
          onClick={() => {
              if (parseFloat(props.value) + props.step > (props.max || 9999999999)) {
                props.setValue(
                  `${(parseFloat(props.value)).toFixed(
                    props.decimalpoints
                  )}`
                )
              } else {
                props.setValue(
                  `${(parseFloat(props.value) + props.step).toFixed(
                    props.decimalpoints
                  )}`
                )
              }
              
            }
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
              if (parseFloat(props.value) - props.step < (props.min || 1)) {
                props.setValue(
                  `${(parseFloat(props.value)).toFixed(
                    props.decimalpoints
                  )}`
                )
              } else {
                props.setValue(
                  `${(parseFloat(props.value) - props.step).toFixed(
                    props.decimalpoints
                  )}`
                )
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
