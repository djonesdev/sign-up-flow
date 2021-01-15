import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'

import Confirmation from './Confirmation'

export const ConfirmationContainer = (props) => {
    const history = useHistory()

    useEffect(() => {
        console.log(props.state, 'redux state')
    })

    const onPressContinue = () => {
        console.log(props.state, "state")
        history.push('/Homepage')
    }

    return <Confirmation onPressContinue={onPressContinue} />
}

const mapStateToProps = (state) => ({
    state
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmationContainer)
