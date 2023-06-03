import { Panel } from './components/Panel.tsx';

function App() {
  function doSomething() {
    window.alert('here!')
  }
  return (
    <>
      <Panel
        title="one"
        icon="⭐️"
        onIconClick={doSomething}
      >
        lorem ipsum
      </Panel>

      <Panel
        title="one"
        icon="⭐️"
        onIconClick={doSomething}
        open={false}
      >
        lorem ipsum
      </Panel>
      <br/>
      <Panel
        title="one"
        icon="⭐️"
        onIconClick={doSomething}
        open={true}
      >
        lorem ipsum
      </Panel>
    </>
  )
}

export default App
