import DiaryItem from "./DiaryItem";

const DiaryList = ({ diaryList, onDelete }) => {
  return (
    <div className="DiaryList">
      <h2>일기 리스트</h2>
      <h4>{diaryList.length}개의 일기가 작성되었습니당!</h4>
      <div>
        {diaryList.map((diaryItem) => (
          // <DiaryItem key={diaryItem.key} diaryItem={diaryItem} />  //아래처럼 알려줌(강의) 내가 적은거도 돌아감
          <DiaryItem key={diaryItem.key} {...diaryItem} onDelete={onDelete} />
        ))}
      </div>
    </div>
  );
};

DiaryList.defaultProps = {
  diaryList: [],
};

export default DiaryList;