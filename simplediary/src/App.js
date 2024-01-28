import { useState, useRef } from 'react';
import './App.css'
import DiaryEditor from "./DiaryEditor";
import DiaryList from './DiaryList';

function App() {
  const [data, setData] = useState([]);

  const dataId = useRef(0);

  const onCreate = (author, content, emotion) => {
    const created_date = new Date().getTime();
    const newItem = {
      author,
      content,
      emotion,
      created_date,
      id: dataId.current,
    }
    dataId.current += 1
    setData([newItem, ...data])  // 기존 배열에 newItem을 맨 앞에 append한 것
  };

  const onDelete = (targetId) => {
    console.log(`${targetId}가 삭제되었습니당 ㅠ`)
    const newDiaryList = data.filter((it) => it.id !== targetId)
    console.log(newDiaryList)
    setData(newDiaryList)
  }

  return (
    <div className="App">
      <DiaryEditor onCreate={onCreate} />
      <DiaryList onDelete={onDelete} diaryList={data} />
    </div>
  );
}

export default App;
