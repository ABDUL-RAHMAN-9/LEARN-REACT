import Car from './Car'

export default function App()
{
  const CarName = "BMW";
  const CarInfo = { modal: "Mustank", price: "30000" };

  return (
    <>
      <Car color="Yellow" brand={CarName} carInfo={CarInfo} />
    </>
  )
}

