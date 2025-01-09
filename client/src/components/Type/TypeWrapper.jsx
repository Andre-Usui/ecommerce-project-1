import { Button } from 'flowbite-react';
import TypeItem from './TypeItem'; 

export default function TypeWrapper() {
  /*
  types:
    - Eletronics
    - Books
    - Clothes
    - Sports
    - Home
    - Other
  
  */


  return (
    <div className="mx-auto my-3 lg:my-6 w-full lg:w-11/12 bg-orange-500">
      <h1 className="
    text-center
    px-5
    py-3
    text-lg
    lg:text-2xl
    antialiased
    text-slate-50
    
    ">CATEGORIAS</h1>
      <Button.Group
        className="
      grid
      grid-cols-3
      md:grid-cols-6
      mx-auto 
      w-full
      justify-between">
        <TypeItem 
        left={true}
        name="Eletrônicos"
        />
        <TypeItem
        name="Livros"
        />
        <TypeItem
        name="Roupas"
        />
        <TypeItem
        name="Esportes"
        />
        <TypeItem
        name="Casa e Lar"
        />
        <TypeItem
        right={true}
        name="Outros"
        />
      </Button.Group>
    </div>
  )
}