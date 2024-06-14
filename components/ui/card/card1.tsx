import Image from "next/image";

import Imge1 from "../../../assets/icons/GroupCard1.svg";
import Imge2 from "../../../assets/icons/GroupCard2.svg";

function Card() {
  return (
    <>
      <div className="flex flex-col gap-[15px] min-w-[400px]">
        <Image
          src={Imge1}
          width={397}
          height={237}
          alt="Carusel img"
          className=" rounded-lg"
        />
        <Image
          src={Imge2}
          width={397}
          height={237}
          alt="Carusel img"
          className=" rounded-lg"
        />
      </div>
    </>
  );
}

export default Card;
