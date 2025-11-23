import { Monitor } from "react95";
import avatar from "@assets/md4.png";

const Avatar = () => (
  <Monitor
    backgroundStyles={{
      background: `url(${avatar})`,
      backgroundPosition: "50% 35%",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    }}
  />
);

export default Avatar;
