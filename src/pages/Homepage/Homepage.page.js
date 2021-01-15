import React from 'react'
import { connect } from 'react-redux'
import Homepage from './Homepage'

export const HomepageContainer = (props) => {
    return <Homepage />
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(HomepageContainer)
