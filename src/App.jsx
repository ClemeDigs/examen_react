import "./App.css";
import Examen from "./components/Examen";

function App() {
  return (
    <>
      <header className="bg-cyan-400 flex flex-col md:flex-row p-3">
        <h1 className="font-bold text-4xl">Examen Final</h1>
      </header>

      <main className="flex flex-col md:flex-row items-center md:items-start justify-center p-8 gap-20">
        <Examen />
      </main>

      <footer className="bg-cyan-400 flex flex-col md:flex-row justify-between p-3 text-lg">
        <p>Clémentine Digout</p>
        <p>Examen Final</p>
        <p>16 Décembre 2024</p>
      </footer>
    </>
  );
}

export default App;
