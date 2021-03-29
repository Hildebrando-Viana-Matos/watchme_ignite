import { SideBar } from './components/SideBar';
import { Content } from './components/Content';
import { MoviesContextProvider } from './MoviesContext';

import './styles/global.scss';

import './styles/sidebar.scss';
import './styles/content.scss';

export function App() {

  return (
    <MoviesContextProvider>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <SideBar />
        <Content />
      </div>
    </MoviesContextProvider>
  )
}