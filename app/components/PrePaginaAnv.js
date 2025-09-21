"use client";
import CoracoesFlutuantes from '../components/CoracoesFlutuantes';
import "../css/Aniversario.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container">
      <CoracoesFlutuantes />
      <h1>Hoje é um dia especial... 💖</h1>
      <p>O dia em que o mundo ficou mais bonito porque você nasceu.</p>
      <Link href="/aniversario">
        <button>Clique para ver seu presente</button>
      </Link>
    </div>
  );
}
