import ItemsCard from "./ItemsCard.jsx";

export default function ItemsList() {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <ItemsCard />
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <ItemsCard />
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <ItemsCard />
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <ItemsCard />
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <ItemsCard />
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <ItemsCard />
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <ItemsCard />
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <ItemsCard />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}