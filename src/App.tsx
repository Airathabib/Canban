import Router from './router/Router';
import TaskProvider from './providers/TaskProvider'

import './assets/styles/main.scss'

function App() {
  return (
		<TaskProvider>
			<Router/>
		</TaskProvider>
	  );
}

export default App;
