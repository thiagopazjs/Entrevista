import React, { memo } from 'react'

import ErrorMessage from '../../containers/notification-message/notification-message'

function NotFound ({ history }) {
  function handleRedirect () {
    history.push('/')
  }
  return (
    <ErrorMessage
      handleRedirect={handleRedirect}
      showRedirect
    >
      Something went wrong. Please try again.
    </ErrorMessage>
  )
}

export default memo(NotFound)

// Caso não encontre o perfil, Obs: costumo comentar meus códigos em inglês xD 

//testeai algumas alterações 
