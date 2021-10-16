import Head from "next/head";
import Image from "next/image";
import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";
import Table from "../components/Table";
import Client from "../core/Client";

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
  return (
    <div
      className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-500 to-blue-900
      text-white
      `}
    >
      <Layout title="Cadastro Simples">
        <Table
          clients={clients}
          clientSelect={clientSelect}
          clientDeleted={clientDeleted}
        ></Table>
      </Layout>
    </div>
  );
}
