'use client'

import { useRouter } from "next/navigation";

export default async function Produtos({ params }) {
    const router = useRouter();
    const id = params.id

    const req = await fetch("http://localhost:3003/produtos/" + id)
    const produto = await req.json();

    const remover = (id) => {
        const idInt = { id : parseInt(id)}
        const idJson = JSON.stringify(idInt);
        try {
            fetch("http://localhost:3003/produtos", {
                method: "DELETE",
                headers: { 'content-type': 'application/json' },
                body: idJson
            })
            router.push("/");
        } catch (error) {
            alert("Ocorreu um erro" + error)
        }
    }
    return (
        <div>
            <p>{produto[0].titulo}</p>
            <p>{produto[0].data_cadastro}</p>
            <p>{produto[0].preco}</p>
            <p>{produto[0].descricao}</p>
            <p>{produto[0].imagem}</p>

            <button onClick={e => e.preventDefault(remover(produto[0].codigo))}>REMOVER</button>

        </div>

    )
}