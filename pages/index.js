import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  // hook metotları
  const [title, setTitle] = useState("");
  const titleChanged = function (e) {
    setTitle(e.target.value);
  };

  const [todos, setTodos] = useState([
    { title: "Do homework", done: false },
    { title: "Wash the dishes", done: false },
    { title: "Watch Netflix", done: true },
    { title: "Walk in the park", done: true }
  ]);

  // bunu tercih etmeyeceğiz. div üreterek içine koymak
  // const divler = [];
  // for (const todo of todos) {
  //   divler.push(<div>{todo.title}</div>)
  // }

  const handleSubmit = function (e) {
    e.preventDefault();
    setTodos([...todos, { title: title, done: false }]);
    setTitle("");
  };

  const handleCheckChange = function (e, i) {
    const newTodos = [...todos];
    newTodos[i].done = e.target.checked;
    setTodos(newTodos);
  };

  const handleDelete = function (e, i) {
    const newTodos = [...todos];
    newTodos.splice(i, 1);  // iden başla 1 tane sil
    setTodos(newTodos);
  };
  return (
    <>
      <Head>
        <title>To-Do List</title>
        <meta name="description" content="A sample to do list project" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <h1>To-Do List</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <input type="text" placeholder='What are you going to do?' required onChange={titleChanged} />
            <button>Add</button>
            {/* {divler} */}

            {/*// todos dizisini div dizisine çevirdik. */}

            <div className={styles.todos}>
              {todos.map((todo, i) =>
                <div key={i + 1} className={styles.todoItem + " " + (todo.done ? styles.done : styles.undone)}>
                  <input type="checkbox" checked={todo.done} onChange={(e) => handleCheckChange(e, i)} />
                  <span>{todo.title}</span>
                  <button onClick={(e) => handleDelete(e, i)}>&times;</button>
                </div>
              )}
            </div>
          </div>
        </form>
      </main>
    </>
  )
}
