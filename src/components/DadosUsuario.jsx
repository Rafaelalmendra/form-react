import { useContext, useState } from "react";
import { ValidacoesCadastro } from "../contexts/ValidacoesCadastro";
import { useErros } from "../hooks/useErros";

import { TextField, Button } from "@material-ui/core";

export function DadosUsuario({aoEnviar}) {
  const [ email, setEmail ] = useState('')
  const [ senha, setSenha ] = useState('')
  const validacoes = useContext(ValidacoesCadastro)
  const [erros, validarCampos] = useErros(validacoes)
  
  function possoEnviar() {
    for(let campo in erros) {
      if(!erros[campo].valido)
      {
        return false
      }
    }
    return true
  }

  return(
    <form onSubmit={(event) => {
      event.preventDefault()
      if(possoEnviar()) {
        aoEnviar({email, senha})
      }
    }}>
      <TextField 
        value={email}
        onChange = { (event) => {
          setEmail(event.target.value)
        }}
        name='email'
        id='email'
        label='email' 
        type='email' 
        variant="outlined" 
        margin='normal'
        fullWidth
        required
      />

      <TextField
        value={senha}
        onChange = { (event) => {
          setSenha(event.target.value)
        }}
        onBlur={validarCampos}
        error={!erros.senha.valido}
        helperText={erros.senha.texto}
        name='senha'
        id='senha' 
        label='senha' 
        type='password' 
        variant="outlined" 
        margin='normal'
        fullWidth
        required
      />

      <Button
        type='submit'
        color='primary'
        variant="contained"
        fullWidth
      >
        Próximo
      </Button>
      
    </form>
  )
}