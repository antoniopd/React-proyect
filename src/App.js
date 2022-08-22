// import logo from './logo.svg';
import './App.css';
// import GreetingStyled from './components/pure/greetingStyled';
// import Greeting from './components/pure/greeting';
// import GreetingF from './components/greetingF';
// import TaskListComponent from './components/container/task_list';
import Father from './components/container/father';
// import Ejemplo from './hooks/Ejemplo';
// import Ejemplo2 from './hooks/Ejemplo2';
// import MiComponenteConContexto from './hooks/Ejemplo3';
// import Ejemplo4 from './hooks/Ejemplo4';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* //? Componente propio Greeteing.jsx */}
        {/* <Greeting name="Antonio"></Greeting>?<br/> */}
        {/* <GreetingF name={'Antonio'}></GreetingF> */}
        {/* //? Componente de Listado de Tareas */}
        {/* <TaskListComponent></TaskListComponent> */}
        {/* //? Ejemplos de uso de HOOKS */}
        {/* <Ejemplo></Ejemplo> */}
        {/* <Ejemplo2></Ejemplo2> */}
        {/* <MiComponenteConContexto></MiComponenteConContexto> */}
        {/* <Ejemplo4 nombre= 'Antonio'>
        //Todo lo que hay aquím ese tratado como props.children
          <h3>
            Contenido del props.children
          </h3>
        </Ejemplo4> */}
        {/* <GreetingStyled name="Antonio"></GreetingStyled> */}
      {/* </header> */}
        {/* Gestión de eventos */}
        <Father></Father>
    </div>
  );
}

export default App;
