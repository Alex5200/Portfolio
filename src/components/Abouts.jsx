
import Contacts from "./Contacts"
export default function About(props){

    return(
        <div class="flex flex-col justify-center p-6 items-center border w-10/12 mx-auto rounded-xl border-4 p-4">
        <h1 className="text-2xl w-3/4">
          Здравствуйте меня зовут  
            <b className="font-bold">
              {" " + "Александр" + " "}
            </b>
          год я занимабсь веб разработкой на React и работал с другими библиотеками. </h1>
        <p className=" text-xl w-3/4 mt-6"> Работал с Mobx, Redux. Использую Styled components.</p>
        <p className=" text-xl w-3/4 mt-6">Мои проекты можно увидеть на главной или в разделе Developed by</p>
        <p className=" text-xl w-3/4 mt-6 text-center"> Мои контакты</p>
        <Contacts/>
        </div>
    )
}

