import Day from "./components/Day";
const week = [
  "Domingo",
  "Segunda-feira",
  "Terça-feira",
  "Quarta-feira",
  "Quinta-feira",
  "Sexta-feira",
  "Sábado",
];
function App() {
  return (
    <main>
      <h1>Planejamento Semanal</h1>
      <div className="days">
        {week.map((day) => (
          <Day key={day} day={day} />
        ))}
      </div>
    </main>
  );
}

export default App;
