import Client from "../core/Client";
import { Delete, Edit } from "./Icons";

interface TableProps {
  clients: Client[];
  clientSelect?: (client: Client) => void;
  clientDeleted?: (client: Client) => void;
}

export default function Table(props: TableProps) {
  const showActions = props.clientSelect || props.clientSelect;

  function renderHeader() {
    return (
      <tr>
        <th className="text-left p-4">Código</th>
        <th className="text-left p-4">Nome</th>
        <th className="text-left p-4">Idade</th>
        {showActions ? <th className="p-4">Ações</th> : false}
      </tr>
    );
  }

  function renderData() {
    return props.clients?.map((client, i) => {
      return (
        <tr
          key={client.id}
          className={`${i % 2 === 0 ? "bg-purple-300" : "bg-purple-100"}`}
        >
          <td className="text-left p-4">{client.id}</td>
          <td className="text-left p-4">{client.name}</td>
          <td className="text-left p-4">{client.age}</td>
          {showActions ? renderActions(client) : false}
        </tr>
      );
    });
  }

  function renderActions(client: Client) {
    return (
      <td className="flex justify-center">
        {props.clientSelect ? (
          <button
            onClick={() => props.clientSelect?.(client)}
            className={`
          flex justify-center items-center text-green-600
          rounded-full hover:bg-purple-100
          p-2 m-1
          `}
          >
            {Edit}
          </button>
        ) : (
          false
        )}

        {props.clientDeleted ? (
          <button
            onClick={() => props.clientDeleted?.(client)}
            className={`
          flex justify-center items-center text-red-400
          rounded-full hover:bg-purple-100
          p-2 m-1
          `}
          >
            {Delete}
          </button>
        ) : (
          false
        )}
      </td>
    );
  }

  return (
    <table className="w-full rounded-xl overflow-hidden">
      <thead
        className={`
      bg-gradient-to-r from-purple-400 to-purple-800 text-red-50
      
      `}
      >
        {renderHeader()}
      </thead>
      <tbody>{renderData()}</tbody>
    </table>
  );
}
