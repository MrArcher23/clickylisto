import { Textarea } from "@/components/ui/textarea";

interface Props {
  texto: string;
  placeholder: string;
  className?: string;
  handleChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export const TextArea: React.FC<Props> = ({ texto, placeholder, handleChange, className }) => {
  return (
    <Textarea
      className={className}
      value={texto}
      placeholder={placeholder}
      onChange={handleChange}
      rows={6}
    />
  );
};
