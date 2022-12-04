import React from 'react'; 

const Modal = props => {
    if (!props.show) {
        return null
    }

    return (
        <div className='modal' onClick={props.onClose}>
            <div className='contentModal' onClick={e => e.stopPropagation()}>
                <div className='headerModal'>
                    <h2 className='titleH2'>Informações</h2>
                    <button onClick={props.onClose} className='button'>X</button>
                </div>
                <div className='bodyModal'>
                    <p className='titleH2'>Incluirei as informações futuramente aqui</p>
                </div>
            </div>
        </div>
        
    )
}

export {Modal}