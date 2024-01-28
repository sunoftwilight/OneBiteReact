// const DiaryItem = ({ diaryItem }) => {
//   return (
//     <div key={diaryItem.id}>
//       <div><b>{diaryItem.author}</b>님이 <b>{diaryItem.created_date}</b>에 작성한 일기입니당♬</div>
//       <div>
//         <div>♡-♡-♡-♡-♡-♡-♡-♡-♡-♡-♡-♡-♡-♡-♡-♡-♡-♡-♡-♡-♡-♡-♡-♡</div>
//         <div>
//           {diaryItem.content}
//         </div>
//         <div>오늘의 감정 점수는 <b>{diaryItem.emotion}점</b>입니당♪</div>
//         <div>♡-♡-♡-♡-♡-♡-♡-♡-♡-♡-♡-♡-♡-♡-♡-♡-♡-♡-♡-♡-♡-♡-♡-♡</div>
//         <br/>
//       </div>
//     </div>
//   )
// }
// 위에는 내가 작성한거 (이렇게도 잘 돌아감)

const DiaryItem = ({ id, author, content, emotion, created_date, onDelete }) => {
  return (
    <div className="DiaryItem">
      <div className="info">
        <div><b>{author}</b>님이 작성한 일기입니당♬</div>
        <div>감정 점수 <b>{emotion}</b>점 | 작성 일자 <b>{new Date(created_date).toLocaleString()}</b></div>
        <br/>
      </div>

      <div className="content">
        <br/><div>{content}</div><br/>
      </div>

      <button 
        onClick={() => {
          console.log(id)
          if (window.confirm(`${id}번째일기를 정말 삭제하시겠습니까?`)){
            onDelete(id);
          }
        }}>
        삭제할랭ㅠ
      </button>
    </div>
  )
}

DiaryItem.defaultProps = {
  dirayItem: [],
};

export default DiaryItem;