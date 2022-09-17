import './App.css';
import {AddFile} from "./component/AddFile/AddFile";

const namesOfChooseFile = ['Заключение кредитного эксперта (скан)', 'Решение КК (скан)', 'Все заключенные договоры, перечень и сканы']

function App() {
  return (
    <div className="App">
        <div className='content'>
            <h1>Кредитный комитет</h1>
            {
                namesOfChooseFile.map(el =>
                    <>
                        <AddFile name={el}/>
                    </>
                )
            }
        </div>
    </div>
  );
}

export default App;
