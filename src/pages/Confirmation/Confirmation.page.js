import React from 'react'
import { connect } from 'react-redux'

import Confirmation from './Confirmation'

export const ConfirmationContainer = (props) => {
    return <Confirmation />
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmationContainer)
