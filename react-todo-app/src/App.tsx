import '@mantine/core/styles.css';
import { HeaderSimple } from './UI/Header';
import { InputWithButton } from './UI/Input-bar';
import { MantineProvider } from '@mantine/core';
import { CheckboxCard } from './UI/task-checkbox';
import { useState } from 'react';

type localStorageTaskState = Array<{ data: string }>

const localStorageState = localStorage.getItem("localTaskState")
const getLocalState: localStorageTaskState = localStorageState ? JSON.parse(localStorageState) : []

localStorage.setItem("localTaskState", JSON.stringify(getLocalState))

function App() {

  const[inputValue, setInputValue] = useState<string>('')
  const[currentTasks, setCurrentTasks] = useState<localStorageTaskState>(getLocalState)

  function handleAdd() {
    currentTasks.push({data: inputValue})
    setCurrentTasks(currentTasks)
  
    localStorage.setItem("localTaskState", JSON.stringify(currentTasks))
    setInputValue('')
  }

  function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
    setInputValue(e.target.value)
  }

  function handleRemove(index: number) {
    const updatedTasks = currentTasks.filter((_task: { data: string }, i: number) => index != i )
    setCurrentTasks(updatedTasks)

    localStorage.setItem("localTaskState", JSON.stringify(updatedTasks))
  }

  return <MantineProvider>
      <div>
        <HeaderSimple />
        <h2 style={{ margin: '5px' }}>Your To-Do list</h2>
        <InputWithButton inputValue={inputValue} handleInput={handleInput} handleAdd={handleAdd}/>

        {currentTasks.map((item: { data: string; }, index: number) => 
        <CheckboxCard userInputTask={item.data} key={`tasks-${index}`} handleRemove={handleRemove} index={index} />
        )}

      </div>
    </MantineProvider>
}

export default App
