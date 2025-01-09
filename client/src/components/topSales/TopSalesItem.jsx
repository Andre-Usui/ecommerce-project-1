import { CLIENT_URL } from "../../Redux/constants/BASE_URL";


export default function TopSalesItem({ _id, name, image, price, rating, impulse }) {


  return (
    <>
      <a href={`${CLIENT_URL}/detail/${_id}`}>

        <div className="
        flex
        flex-col
        w-32
        lg:w-40
        h-auto
        px-4
        py-2
        justify-between
        bg-white
        rounded-md
        relative
        ">
          {impulse === true && <img src="./badge-logo.svg"
            className="absolute z-10 h-8 w-8 left-6 top-5 bg-white rounded-full
        "/>}
          <img src={image} alt={`An image of ${name}`}
            className="
          object-cover
          h-32
          lg:h-40
          w-32
          lg:w-40
          rounded-sm
          truncate ...
          "
          />
          <h3 className="
          text-center
          truncate ...
          "
          >{name}</h3>
          <div className="flex flex-col-reverse lg:flex-row justify-between">
            <p className="text-sm text-right">{`⭐${rating}`}</p>
            <p className="text-sm text-right">{`$${price}`}</p>
          </div>
        </div>

      </a>
    </>
  )
}