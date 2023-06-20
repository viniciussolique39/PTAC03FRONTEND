"use client"

import Link from 'next/link';
import './globals.css'

export default async function Home() {

  const req = await fetch("http://localhost:3003/produtos", {
    cache: "no-cache"
  });
  const produtos = await req.json();

  return (
      
    <main> <Link href="/cadastro"> CADASTRAR </Link>

      {produtos.map(produtos => (
        <div key={produtos.codigo}>
          <p>{produtos.titulo}</p>
          <p>{produtos.data_cadastro}</p>
          <p>{produtos.preco}</p>
          <p>{produtos.descricao}</p>
          <p>{produtos.imagem}</p>
          <p>{produtos.codigo}</p>
          <Link href={`/produto/${produtos.codigo}`}>Deletar</Link>
        </div>
      ))}
    </main>
  )
}