
import { useRef } from "react";
import api from "../../services/api"

import {
  Title,
  Conteiner,
  Input,
  TopBackground,
  Form,
  ConteinerInput,
  InputLabel
} from "./styles";

import Button from '../../components/Button'
import UsersImage from "../../assets/users.png";

function Home() {

const inputName = useRef()
const inputAge = useRef()
const inputEmail = useRef()

async function RegisterNewUser(){
   await api.post('/users', {
    email: inputEmail.current.value,
    age: parseInt(inputAge.current.value),
    name: inputName.current.value
  })

}

  return (
    <Conteiner>
      <TopBackground>
        <img src={UsersImage} alt="usuarios-imagem"/>
      </TopBackground>

      <Form>
        <Title>Cadastrar Usuarios</Title>
        <ConteinerInput>
          
            <div>
              <InputLabel>
                Nome <span> *</span>
                <Input type="text" placeholder="Nome do usuario" ref={inputName}/>
              </InputLabel>
            </div>

            <div>
              <InputLabel>
                Idade <span> *</span>
                <Input type="number" placeholder="idade do usuario" ref={inputAge}/>
              </InputLabel>
            </div>

          </ConteinerInput>

            <div style={{width:'100%'}}>
              <InputLabel>
                Email <span> *</span>
                <Input type="email" placeholder="Email do Usuario" ref={inputEmail}/>
              </InputLabel>
            </div>
         
        

        <Button type="button" onClick={RegisterNewUser}>Cadastrar Usuário</Button>
      </Form>
    </Conteiner>
  );
}

export default Home;