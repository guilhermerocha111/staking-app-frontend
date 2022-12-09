import { FiChevronUp, FiChevronDown } from "react-icons/fi";
import useCommon from '../hooks/useCommon';

interface InputProps {
  type: "text" | "number" | "email" | "password";
  placeholder?: string;
  defaultValue?: string;
  value: any;
  min?: number | string;
  max?: number | string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  className?: string;
}

interface NumberInputProps {
  placeholder?: string;
  value: any;
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

  function commafy( num:string ) {
    var str = num.split('.');
    if (str[0].length >= 4) {
        str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, '$1,');
    }
    if (str[1] && str[1].length >= 4) {
        str[1] = str[1].replace(/(\d{3})/g, '$1');
    }
    return str.join('.');
}

  const formatValue = (value:string) => {
    const regex = (props.decimalpoints && props.decimalpoints > 0) ? /[^\d(.)]+/g : /[^\d]+/g
    return commafy(value.replace('-', '').replaceAll(')','').replaceAll('(', '').replaceAll(',', '').replace(regex,''))
  }

  return (
    <div className={`counter ${props.className ? props.className : ''}`}>
      <input
        type="text"
        placeholder={props.placeholder}
        value={formatValue(props.value)}
        onChange={(e) => {
          props.setValue(e.target.value)
        }}
        onBlur={(e) =>
          {
            const regex = (props.decimalpoints) ? /[^\d(.)]+/igm : /[^\d]+/g
            let targetValue = (props.max && Number(e.target.value.replaceAll(',', '').replace(regex,'')) > props.max) ? String(props.max) : e.target.value.replaceAll(',', '').replace(regex,'')
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
