import React from 'react'
import { Dimmer, Loader } from 'semantic-ui-react'

const LoaderSpinner = () => (
    <div>
      <Dimmer active inverted>
        <Loader size='large' inverted>Cargando</Loader>
      </Dimmer>
    </div>
  )
  
export default LoaderSpinner
