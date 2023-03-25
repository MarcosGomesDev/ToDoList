import { useState } from "react"
import AddNewTask from "./components/AddNewTask"
import Card from "./components/card"
import Footer from "./components/footer"
import Header from "./components/header"
import { GlobalStyle } from "./styles/GlobalStyles"
import { Container, Content } from "./styles/styles"

export interface ItemListProps {
  id: number,
  task: string,
  checked: boolean
}

function App() {
  const [task, setTask] = useState<string>("")
  const [tasks, setTasks] = useState<ItemListProps[]>([])

  const addTasks = () => {
    const existTask = tasks.some((item) => item.task === task)

    console.log(existTask)

    if (existTask) {
      return
    }

    const newTask = {
      id: Math.random(),
      task: task,
      checked: false
    }

    setTasks([...tasks, newTask])
    setTask("")
  }

  const removeTask = (id: number) => {
    const newTask = tasks.filter((task) => task.id !== id)

    setTasks(newTask)
  }

  const toggleChecked = (id: number, checked: boolean) => {
    const index = tasks.findIndex((task) => task.id === id)
    const newList = tasks

    newList[index].checked = !checked

    setTasks([...newList])
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
    if (event.key === 'Enter') {
      addTasks()
    }
  }

  return (
    <>
      <GlobalStyle />
      <Header />
      <Container>
        <AddNewTask
          value={task}
          onAddTask={() => addTasks()}
          onHandlerKeyDown={handleKeyDown}
          onChange={(event) => setTask(event.target.value)}
        />
        <Content>
          {tasks.map((item, index) => (
            <Card
              key={index}
              data={item}
              onCheckedTask={toggleChecked}
              onRemoveTask={removeTask}
            />
          ))}
        </Content>
      </Container>
      <Footer />
    </>
  )
}

export default App
