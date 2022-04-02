import React from 'react'

const Login = () => {
  return (
    <div className='mt-6'>
        <h3 className='text-center'>Acceso o registro</h3>
        <hr />
        <div className="row justify-content-center">
            <div className="col-12 col-sm-8 col-md-6 col-xl-4"></div>
            <form >
                <input 
                    type="email" 
                    className='form-control mb-2'
                    placeholder='Ingrese un email'
                />
                <input 
                    type="password" 
                    className='form-control mb-2'
                    placeholder='Ingrese un password'
                />
                <button className="btn btn-dark btn-lg btn-block">
                    Registrarse
                </button>
            </form>
        </div>

    </div>
  )
}

export default Login