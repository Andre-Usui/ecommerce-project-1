import { useState } from 'react';
import Layout from '../../components/Layout/Layout'
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { userLoginAction } from '../../Redux/actions/userAction';
import { useDispatch, useSelector } from 'react-redux';



export default function Login({ type }) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const { loadingUser, message } = useSelector((state) => state.userData);


  const wrapper = "mx-6 place-items-center w-full"
  function handle(e){
    e.preventDefault();
    if(type==="login"){
      dispatch(userLoginAction({email, password}))
    }else{
      console.log("register")
    }
  }
  return (
    <>
      <Layout>
        <div className="w-full h-svh flex flex-row justify-evenly content-center items-center place-items-center">
          <div className={wrapper}>
            <div className="w-9/12 h-9/12 py-12 px-6 flex flex-col justify-center items-center bg-orange-500 rounded-lg">
              <img className="h-8/12 w-8/12" src="./shop-cart2.svg" />
              <h1 className="text-slate-50 text-center text-3xl">Bem vindo ao</h1>
              <h1 className="text-slate-50 text-center text-5xl">Lojinha Livre</h1>
            </div>
          </div>
          <div className={wrapper}>
            <form 
            className="flex w-9/12 h-9/12 py-8 px-6 flex-col content-stretch items-stretch gap-4 border-2 border-orange-500 rounded-lg"
            onSubmit={handle}
            
            >
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="email1" value="Seu email" />
                </div>
                <TextInput id="email1" type="email" value={email} onChange={(e) => setEmail(e.target.value)}placeholder="name@lojinhalivre.com" required />
              </div>
              <div >
                <div className="mb-2 block">
                  <Label htmlFor="password1" value="Sua senha" />
                </div>
                <TextInput id="password1" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
              </div>
              {type === "register" ?
                <div >
                  <div className="mb-2 block">
                    <Label htmlFor="password2" value="Repita sua senha" />
                  </div>
                  <TextInput id="password2" type="password" required />
                </div> : <></>}
              {type === "login" ?
                <div className="flex items-center gap-2">
                  <Checkbox id="remember" />
                  <Label htmlFor="remember">Lembre de mim</Label>
                </div> : <></>}
              <Button className="bg-orange-500" type="submit">Confirmar</Button>
            </form>
          </div>
        </div>

      </Layout>

    </>
  )
}