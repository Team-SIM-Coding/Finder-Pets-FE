import { Flex } from "@design-system/react-components-layout";

import Image from "next/image";

interface Props {
  url: string;
}

const MapImage = ({ url }: Props) => {
  return (
    <Flex justify="center" align="center">
      <Image src={url} width={300} height={300} alt="지도 이미지" />
    </Flex>
  );
};

export default MapImage;
