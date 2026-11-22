import { Link } from "react-router";



function DropdownLoggedin() {
  return (
    <>
        <style>{`
            .login-dropdown{
                border: 1px solid #fff;
                top: 100%;
                right: 0;
                z-index: 9999;
                min-width: 150px;
                max-width: 100%;                
            }
            
            .login-dropdown > *{
                display: block;                
                text-decoration: none;
                color: #fff;
                padding-top: 0.3rem;
                padding-bottom: 0.3rem;
                transition: 0.2s ease-in-out;
                border-bottom: 1px solid #414141;
            }

            .login-dropdown > *:hover{
                transform: translateY(-3px);
                transition: 0.2s ease-in-out;
            }
        `}</style>

        <div className="login-dropdown bg-dark p-2 position-absolute rounded-2">
            <Link to="/">My Profile</Link>

            <Link to="/">Change Password</Link>
            
            <Link to="/">Logout</Link>
        </div>    
    </>
  )
}

export default DropdownLoggedin