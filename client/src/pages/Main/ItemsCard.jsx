export default function ItemsCard(props) {
  return (
    <>
      <div key={props.id}className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <div className="mt-6 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          <div className="group relative">
            <img src={props.image} alt={props.name} className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80" />
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm text-gray-700">
                  <a href="#">
                    <span aria-hidden="true" className="absolute inset-0"></span>
                    {props.name}
                  </a>
                </h3>
                <p className="mt-1 text-sm text-gray-500">Black</p>
              </div>
              <p className="text-sm font-medium text-gray-900">{props.price}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}