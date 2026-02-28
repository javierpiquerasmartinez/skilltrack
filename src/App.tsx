import FirstGoalHero from './components/FirstGoalHero.tsx'
import Header from './components/Header.tsx'
import { GoalsList } from './components/GoalsList.tsx'
import './App.css'

function App() {

  return (
    <>
      <Header></Header>
      <main>
        <FirstGoalHero></FirstGoalHero>
        <GoalsList></GoalsList>
      </main>
    </>
  )
}

export default App
