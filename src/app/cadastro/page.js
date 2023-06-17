'use client'
import { useState } from 'react'
import styles from '../page.module.css'
import { useRouter } from 'next/navigation'

export default function Cadastro() {
    const route = useRouter();
    const [titulo, setTitulo] = useState();
    const [data_cadastro, setData_cadastro] = useState();
    const [preco, setPreco] = useState();
    const [descricao, setDescricao] = useState();
    const [imagem, setImagem] = useState();

    const cadastrar = (e) => {
        e.preventDefault()
        
        const produtos = {
            titulo: titulo,
            data_cadastro: data_cadastro,
            preco: preco,
            descricao: descricao,
            imagem: imagem
        }
        const produtosJson = JSON.stringify(produtos);
        fetch("http://localhost:3003/produtos", {
            method: "POST",
            headers: { "content-Type": "application/json" },
            body: produtosJson
        }).then(function(){ route.push("/")}).catch(()=> console.log("Não foi possível cadastrar!"))
    }

    return (
        <div className={styles.main}>
            <form  onSubmit={cadastrar} className={styles.form}>
            <h1>Cadastro de Produtos</h1>
                <input className={styles.input}
                    type="text"
                    placeholder='Digite o titulo do produto desejado:'
                    titulo="Digite o produto que deseja procurar..."
                    onChange={e => setTitulo(e.target.value)}
                />
                <br/><br/>
                <input
                    type="date"
                    placeholder='Digite a data do produto desejado:'
                    nome="Data"
                    onChange={e => setData_cadastro(e.target.value)}
                />
                <br/><br/>
                <input className={styles.input}
                    type="Real"
                    placeholder='Digite o preço do produto desejado:'
                    nome="Preco"
                    onChange={e => setPreco(e.target.value)}
                />
                <br/><br/>

                    <input className={styles.input}
                    type="text"
                    placeholder='Digite a discrição do produto desejado:'
                    nome="Descrição"
                    onChange={e => setDescricao(e.target.value)}
                />
                <br/><br/>

                    <input className={styles.input}
                    type="text"
                    placeholder='Digite a URL do produto desejado:'
                    nome="Preco"
                    onChange={e => setImagem(e.target.value)}
                />
                <br/><br/>

                <button type='submit'>Cadastrar Produto</button>
                <div>
                <br/>
                    <a href='../produtos'>Voltar</a>
                </div>
            </form>
        </div>
    );
}