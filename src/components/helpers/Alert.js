import React from 'react'

export default function Alert(props) {

    const {message, type} = props;

    return (
       props.message && <div class={`alert alert-${type} alert-dismissible fade show mb-0`} role="alert">
        <strong>{message}</strong> 
      </div>
    )
}
