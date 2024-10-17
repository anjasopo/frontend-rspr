import Card from "../components/Card";

const Home = () => {
  return (
    <div className="p-8 flex gap-4 justify-center">
      <Card
        title="Card 1"
        description="Deskripsi card pertama."
        image="https://placehold.co/200x150"
      />
      <Card
        title="Card 2"
        description="Deskripsi card kedua."
        image="https://placehold.co/200x150"
      />
      <Card
        title="Card 3"
        description="Deskripsi card ketiga."
        image="https://placehold.co/200x150"
      />
    </div>
  );
};

export default Home;
