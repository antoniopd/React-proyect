// import logo from './logo.svg';
import "./App.css";
import FetchExample from "./components/pure/FetchExample";
// import AsyncExamples from "./components/pure/AsyncExamples";
// import ObservableExample from "./components/pure/ObservableExample";
// import Cuadrado from "./components/pure/cuadrado";
// import OptionalRender from "./components/pure/optionalRender";
// import GreetingStyled from './components/pure/greetingStyled';
// import Greeting from './components/pure/greeting';
// import GreetingF from './components/greetingF';
// import TaskListComponent from "./components/container/task_list";
// import LoginFormik from "./components/pure/forms/loginFormik";
// import RegisterFormik from "./components/pure/forms/registerFormik";
// import Father from './components/container/father';
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
      {/* <Father></Father> */}

      {/* //? Ejemplos del Renderizado condicional */}
      {/* <OptionalRender></OptionalRender> */}
      {/* <Cuadrado></Cuadrado> */}

      {/* //? Ejemplos de uso de Formik y Yup */}
      {/* <LoginFormik></LoginFormik> */}
      {/* <RegisterFormik></RegisterFormik> */}

      {/* //? Ejemplo de procesos asíncronos */}
      {/* <AsyncExamples></AsyncExamples> */}
      {/* <ObservableExample></ObservableExample> */}
      <FetchExample></FetchExample>

      {/* //! PROYECTO FINAL */}
      {/* <TaskListComponent></TaskListComponent> */}
    </div>
  );
}

export default App;
