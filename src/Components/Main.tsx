import Description from "./Description";
import Images from "./Images";

const Main: React.FC = () => {
  return (
    <main className="w-screen h-screen bg-gray-100 flex flex-col lg:flex-row items-center justify-center p-4">
      {/* Images */}
      <Images />
      {/* Description */}
      <Description />
    </main>
  );
};

export default Main;
