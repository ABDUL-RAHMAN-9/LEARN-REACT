import Car from './Car'

export default function App()
{
  const CarName = "BMW";
  const CarInfo = { modal: "Mustank", price: "30,000" };

  return (
    <>
      <Car color="Yellow" brand={CarName} carInfo={CarInfo} month={"may"} date={6} />
     
    </>
  )
}

