import styled from 'styled-components'

export const Conteiner = styled.div`
background-color: #333333;
display: flex;
justify-content: space-evenly;
align-items: center;
padding: 20px;
height: 100vh;
flex-direction: column;
`

export const TopBackground = styled.div`
background: linear-gradient(to right, #fe7e5d, #7f3841);
height: 30vh;
width: 80vw;
max-width: 800px;
border-radius: 30px;

display: flex;
align-items: center;
justify-content: center;

img{
      max-width: 100%;
      max-height: 100%;
}
`
export const Form = styled.form`
display: flex;
flex-direction: column;
align-items: center;
gap: 20px;
max-width: 500px;
`
export const Title = styled.h2`
color : #FFFFFF;
background-color : #343433;
text-align: center;
font-size: 38px;
font-style: normal;
font-weight: 600;

`

export const ConteinerInput = styled.div`
gap: 20px;
display: flex;
`
export const Input = styled.input`
border-radius: 10px;
border: 1px solid #ffffff;
padding: 20px 22px;
outline: none;
width: 100%;
font-size: 20px;
`
export const InputLabel = styled.label`
color: #ffffff;
font-size: 20px;
font-weight: 500;

span{
      color: #ef4f45;
      font-weight: bold;
}

`

export const UsersImage = styled.img`
height: 20px;
width: 20px;

`









