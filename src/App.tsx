import Router from './router/Router';
import { BrowserRouter } from 'react-router-dom';
import TaskProvider from './providers/TaskProvider'

import './assets/styles/main.scss'

function App() {
  return (
		<TaskProvider>
			<BrowserRouter>
			<Router/>
		</BrowserRouter>
		</TaskProvider>
	  );
}

export default App;
