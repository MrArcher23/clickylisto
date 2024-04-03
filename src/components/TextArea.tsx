import { Textarea } from "@/components/ui/textarea";

interface Props {
  texto: string;
  placeholder: string;
  handleChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export const TextArea: React.FC<Props> = ({ texto, placeholder, handleChange }) => {
  return <Textarea value={texto} placeholder={placeholder} onChange={handleChange} rows={6} />;
};
