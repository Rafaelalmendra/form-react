import { FomularioDeCadastro } from "./components/FormularioDeCadastro";

import { Container, Typography } from '@material-ui/core';

function aoEnviarForm(dados) {
  console.log(dados)
}

function validarCPF(cpf) {
  if(cpf.length !== 11) {
    return {valido: false, texto: "CPF deve ter 11 dígitos"}
  } else {
    return {valido: true, texto: ""}
  }
}

function App() {
  return (
    <Container maxWidth='sm' align='center'>
      <Typography align='center' variant='h3'>Formulário de cadastro</Typography>
      <FomularioDeCadastro aoEnviar={aoEnviarForm} validarCPF={validarCPF}/>
    </Container>
  );
}

export default App;