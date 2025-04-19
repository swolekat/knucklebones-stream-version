import { useState } from 'react'
import './App.css'
import {Button, Grid} from "@mantine/core";

function App() {
  const [count, setCount] = useState(0)

  return (
      <div className='app'>
          <Grid columns={4}>
              <Grid.Col span={1}>
                  Player 1
              </Grid.Col>
              <Grid.Col span={2}>
                  Games go here
              </Grid.Col>
              <Grid.Col span={1}>
                  Player 2
              </Grid.Col>
          </Grid>
      </div>
  )
}

export default App
