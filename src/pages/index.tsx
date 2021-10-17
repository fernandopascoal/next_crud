import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";
import Table from "../components/Table";
import Client from "../core/Client";
import Button from "../components/Button";
import Form from "../components/Form";
import { useState } from "react";
const clients = [
  new Client("Ana", 34, "1"),
  new Client("Maria", 25, "2"),
  new Client("Jose", 56, "3"),
  new Client("Pedro", 15, "4"),
];

function clientSelect(client: Client) {
  console.log(client.name);
}

function clientDeleted(client: Client) {
  console.log(client.age);
}

export default function Home() {
  const [show, setShow] = useState<"table" | "form">("table");

  function saveClient(client: Client) {
    console.log(client);
    setShow('table')
  }
  return (
    <div
      className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-500 to-blue-900
      text-white
      `}
    >
      <Layout title="Cadastro Simples">
        {show === "table" ? (
          <>
            <div className="flex justify-end">
              <Button
                onClick={() => setShow("form")}
                className="mb-4"
                color="blue"
              >
                Novo Cliente
              </Button>
            </div>
            <Table
              clients={clients}
              clientSelect={clientSelect}
              clientDeleted={clientDeleted}
            />
          </>
        ) : (
          <Form
            client={clients[0]}
            clientChange={saveClient}
            cancel={() => setShow("table")}
          />
        )}
      </Layout>
    </div>
  );
}
