import Banner from "../components/Banner";
import Card from "../components/Card";

const Home: React.FC = () => {
  return (
    <>
      <Banner />
      <div className="container mx-auto p-6">
        <h1 className="text-3xl text-center font-bold mb-8">Bad UI Battle</h1>
        <Card />
      </div>
    </>
  );
};

export default Home;
