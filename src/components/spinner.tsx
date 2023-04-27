import { Circles } from "react-loader-spinner";

interface Props {
  size?: number;
  color?: string;
}

export const Spinner = ({ size = 120, color = "#2d506a" }: Props) => {
  return (
    <Circles
      height={size}
      width={size}
      color={color}
      ariaLabel="circles-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
  );
};
