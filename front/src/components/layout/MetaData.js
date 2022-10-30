import React from "react"
import {Helmet} from 'react-helmet'


//inicializamos nuestro doc
const MetaData = ({title}) => {
    return(
        //Alimenta el titulo dependiendo de lo que encuentra en el documento

        <Helmet>
            <title>{`${title} - NVShop`}</title>
        </Helmet>
    )
}

export default MetaData