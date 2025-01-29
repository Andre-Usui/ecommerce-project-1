import { useSelector } from 'react-redux';
import { Fragment } from 'react';
import { Button } from "flowbite-react";
import PageButton from './PageButton';



export default function Pages() {

  const { currentPage, totalPages } = useSelector((state) => state.filter)

  const numPagesArray = [];

  for (let i = 1; i <= totalPages; i++) {
    numPagesArray.push(i.toString());
  }

  return (

    <>
      <div className='w-full h-full'>
        <Button.Group 
        className="w-full flex flex-row flex-wrap gap-4 justify-center">
          {numPagesArray.map((page) =>
            <Fragment key={page}>
              <PageButton
                number={page}
              />
            </Fragment>
          )}
        </Button.Group>
      </div>
    </>
  )
}