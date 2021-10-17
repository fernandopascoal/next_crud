import { useState } from "react";
import Input from "./Input";
import Client from "../core/Client";
import Button from "./Button";

interface FormProps {
  client: Client;
  cancel?: () => void;
  clientChange?: (client: Client) => void;
}

export default function Form(props: FormProps) {
  const id = props.client?.id;
  const [name, setName] = useState(props.client?.name ?? "");
  const [age, setAge] = useState(props.client?.age ?? 0);
  return (
    <div className="bg-blue-100 p-8 rounded-md">
      {id ? (
        <Input text="Código" value={id} readOnly={true} className="mb-4" />
      ) : (
        false
      )}

      <Input text="Nome" value={name} onChange={setName} className="mb-4" />
      <Input text="Idade" type="number" value={age} onChange={setAge} />
      <div className="mt-5 flex justify-end">
        <Button
          color="blue"
          className="mr-2"
          onClick={() => props.clientChange?.(new Client(name, +age, id))}
        >
          {id ? "Alterar" : "Salvar"}
        </Button>
        <Button onClick={props.cancel}>Cancelar</Button>
      </div>
    </div>
  );
}
