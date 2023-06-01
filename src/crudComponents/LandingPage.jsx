import React from 'react';
import { Link} from 'react-router-dom';
function LandingPage() {
    return ( <>
    <div className='big-box'>
<div className='container-fluid' id='landing_page'>
    <div className='row h-75 background'>
        <div className='col-11 my-auto main'>
            <h1 className='register1'>Please Click here! </h1>
            <div className='btn-group'>
        
            <Link  to='/register1' className='btn btn-success register'>
                Register
            </Link>
           
            
            <Link  to='/login1' className='btn btn-info register'>
                Login
            </Link>
         
            </div>
           
        </div>
    </div>
</div>
</div>
  
    </> );
}

export default LandingPage;