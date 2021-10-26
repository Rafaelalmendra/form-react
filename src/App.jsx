import { FormularioDeCadastro } from "./components/FormularioDeCadastro";
import { validarCPF, validarSenha } from "./models/Cadastro";
import { ValidacoesCadastro } from "./contexts/ValidacoesCadastro";

import { Container, Typography } from '@material-ui/core';

function aoEnviarForm(dados) {
  console.log(dados)
}

function App() {
  return (
    <Container maxWidth='sm'>
      <Typography align='center' variant='h3'>Formulário de cadastro</Typography>
      <ValidacoesCadastro.Provider value={{cpf: validarCPF, senha: validarSenha}}>
        <FormularioDeCadastro aoEnviar={aoEnviarForm}/>
      </ValidacoesCadastro.Provider>
    </Container>
  );
}

export default App;