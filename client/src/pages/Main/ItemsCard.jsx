import { CLIENT_URL } from "../../Redux/constants/BASE_URL";
import { productsActions } from "../../Redux/reducers/productReducer"
import { useDispatch } from "react-redux";

export default function ItemsCard(props) {
  
  const dispatch = useDispatch();
  const aHandler = async () => {
    console.log("link was clicked");
    dispatch(productsActions.loading());
    return
  }
  return (
    <>
      <div className="w-full h-full border-b-4 border-b-slate-500/25">
        <div className="py-3 px-2 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8 bg-white rounded-t-lg">
          <div className="group relative">
            {props.impulse === true && <img src="./badge-logo.svg"
              className="
                absolute z-10 h-10 w-10 left-4 top-4 bg-white rounded-full
            "/>}
            <img src={props.image[0]} alt={props.name} className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-80" />
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm text-gray-700 w-5/6 text-ellipsis ...">
                  <a onClick={aHandler} href={`${CLIENT_URL}/detail/${props.id}`}>
                    <span aria-hidden="true" className="absolute z-20 inset-0"></span>
                    {props.name}
                  </a>
                </h3>
                <h4 className="text-xs text-gray-500">{`${props.numSells} vendido(s)`}</h4>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900 text-end">
                  <span className="text-xs">R$</span>{props.price}
                </p>
                <p className="text-xs font-medium text-gray-500 text-end">
                  {`⭐${props.rating}`}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}