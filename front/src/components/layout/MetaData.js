<<<<<<< HEAD
import React from "react";
import {Helmet} from "react-helmet"

const MetaData = ({title}) => {
    return(
=======
import React from "react"
import {Helmet} from 'react-helmet'


//inicializamos nuestro doc
const MetaData = ({title}) => {
    return(
        //Alimenta el titulo dependiendo de lo que encuentra en el documento
>>>>>>> 82ead59e64177e7ff1c2ba4fb49253be586e69b3
        <Helmet>
            <title>{`${title} - MapleShop`}</title>
        </Helmet>
    )
}
<<<<<<< HEAD
=======

>>>>>>> 82ead59e64177e7ff1c2ba4fb49253be586e69b3
export default MetaData