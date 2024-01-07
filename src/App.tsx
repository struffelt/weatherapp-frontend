import { useState } from 'react';
import styles from './App.module.css';
import Searchbar from './components/Searchbar';
import Weather from './components/Weather';

function App() {
  const [search, setSearch] = useState<string>("");

  return (
    <div className={styles.container}>
      <Searchbar search={search} setSearch={setSearch} />
      <Weather />
    </div>
  );
};

export default App;
