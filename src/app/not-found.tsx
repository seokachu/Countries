import S from "@/styles/common.module.css";

const NotFoundPage = () => {
  return (
    <div className={S.notFound}>
      <h1>죄송합니다. 잘못된 경로로 접속하셨습니다.</h1>
      <h2>잠시 후 다시 접속해 주세요.</h2>
    </div>
  );
};

export default NotFoundPage;
