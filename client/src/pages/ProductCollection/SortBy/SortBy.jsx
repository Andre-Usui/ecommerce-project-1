import CustomSelect from "./CustomSelect";
import { useSelector } from 'react-redux';



export default function SortBy() {

  const {
    totalDocuments
  } = useSelector((state) => state.filter);

  return (
    <>
      <div className="h-max w-full lg:pb-5 pr-2 lg:pr-0 col-start-2 col-span-2 flex flex-col lg:flex-row justify-end lg:justify-between items-end lg:items-baseline border-b-4 border-b-slate-500/25">
        <p className="mb-4 lg:ml-12 text-xl">
          {`${totalDocuments} produtos encontrados`}
        </p>
        <div className="max-h-fit max-w-full mb-4 flex flex-row justify-stretch lg:justify-around items-baseline">
          <p className="w-max">Ordene por </p>
          <CustomSelect />
        </div>
      </div>
    </>
  )
}