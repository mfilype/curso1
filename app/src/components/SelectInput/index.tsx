import { Container } from "./styles";

interface ISelectInputProps {
  options: {
    value: string | number;
    label: string | number;
  }[];
  onChange(event: React.ChangeEvent<HTMLSelectElement>): void;
  defaultValue?: string | number;
}
export function SelectInput({
  options,
  onChange,
  defaultValue,
}: ISelectInputProps) {
  return (
    <Container>
      <select onChange={onChange} defaultValue={defaultValue}>
        {options.map((option) => {
          return (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          );
        })}
      </select>
    </Container>
  );
}
