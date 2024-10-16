import { ClipLoader } from "react-spinners";

const LoadingScreen = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "2rem 0",
      }}
    >
      <ClipLoader color="#dddddd" loading={true} size={50} />
    </div>
  );
};

export default LoadingScreen;
