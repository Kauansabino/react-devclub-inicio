import {Background} from "./styles";
import UsersImage from "../../assets/users.png";

function TopBackgroundComponent() {
  return (
    <Background>
      <img src={UsersImage} alt="usuarios-imagem" />
    </Background>
  );
}

export default TopBackgroundComponent;
