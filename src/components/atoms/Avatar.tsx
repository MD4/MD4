import { Monitor } from "react95";

const Avatar = ({src}: {src: string}) => (
  <Monitor
    backgroundStyles={{
      background: `url(${src})`,
      backgroundPosition: "50% 35%",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    }}
  />
);

export default Avatar;
