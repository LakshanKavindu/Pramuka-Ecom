
import './App.css'
import { Button } from "flowbite-react";
import { Badge } from "flowbite-react";
function App() {

  return (
    <>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      <div>
        <Button>Click me</Button>
        <Badge size="sm" href="#">
          Default
        </Badge>
      </div>
    </>
  )
}

export default App
