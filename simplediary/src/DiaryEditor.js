import { useRef, useState } from 'react'

const DiaryEditor = ({ onCreate }) => {
  const authorInput = useRef();
  const contentInput = useRef();

  // const [author, setAuthor] = useState("");
  // const [content, setContent] = useState("");

  // 위의 두 state를 하나로 합치기
  const [state, setState] = useState({
    author: "",
    content: "",
    emotion: 1,
  });

  const handleChangeDiary = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    if (state.author.length < 1) {
      authorInput.current.focus();
      return;
    }

    if (state.content.length < 5) {
      contentInput.current.focus();
      return ;
    }

    onCreate(state.author, state.content, state.emotion);
    alert("저장 성공");
    // 저장했으니 값은 초기화
    setState({
      author: "",
      content: "",
      emotion: 1,
    })
  };
    
  return (
    <div className="DiaryEditor">
      <h2>오늘의 일기장</h2>

      {/* 작성자 */}
      <div>
        <input 
          ref={authorInput}
          name="author"
          type='text'
          value={state.author}
          onChange={handleChangeDiary}
        />
      </div>

      {/* 본문 */}
      <div>
        <textarea
          ref={contentInput}
          name="content"
          type='text'
          value={state.content}
          onChange={handleChangeDiary}
        />
      </div>

      {/* 감정 점수 */}
      <div>
        <select 
          name='emotion' 
          value={state.emotion}  
          onChange={handleChangeDiary}
        >
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
      </div>

      {/* 저장버튼 */}
      <div>
        <button onClick={handleSubmit}>일기 저장하기</button>
      </div>
    </div>
  )
};

export default DiaryEditor;