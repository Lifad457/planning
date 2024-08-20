import { Route, Routes } from 'react-router-dom';
import { GlobalStyle } from './Global.css.ts';
import Planning from './pages/Planning/Planning.tsx';

function App() {
	
	return (
		<>
			<GlobalStyle />
			<Routes>
				<Route path='/'>
					<Route index element={<Planning />} />
				</Route>
			</Routes>
		</>
	);
}
export default App;
