import CommBtn from "components/common/commBtn";
import { useHistory } from "react-router-dom";

const NavWrite = (props) => {
  const history = useHistory();
  const writeHandler = () => {
    history.push("/community/write");
  };
  return (
    <div>
      <CommBtn
        btnText="글쓰기"
        btnWidth="100px"
        btnHeight="36px"
        fnClick={writeHandler}
      />
    </div>
  );
};

export default NavWrite;
