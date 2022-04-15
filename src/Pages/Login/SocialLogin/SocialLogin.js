import React from 'react';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { BsGoogle, BsGithub, BsFacebook } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const SocialLogin = () => {

    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
    const [signInWithGithub, githubUser, githubLoading, githubError] = useSignInWithGithub(auth);
    const navigate = useNavigate()

    let errorElement
    let loadingElement
    if (googleError || githubError) {

          errorElement = <div>
          <p className='text-danger'>Error: {googleError?.message} {githubError?.message} </p>
        </div>

    }

    if (googleLoading || githubLoading) {
        loadingElement = <p className='text-primary'>Loading...</p>
    }

    if (googleUser || githubUser) {
        navigate('/home')
    }

    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{height: '1px'}} className='bg-primary w-50' ></div>
                <p className='mt-2 mx-2'>or</p>
                <div style={{height: '1px'}} className='bg-primary w-50' ></div>
            </div>
                {errorElement}
                {loadingElement}
            <div>

                {/* ---------------------google sing in button------------------ */}
                <button onClick={ () => signInWithGoogle() } className='btn btn-info w-50 d-block mx-auto mb-2'>
                    <BsGoogle style={{fontSize: '30px', color: 'orangered'}}/>
                    <span className='px-2'>Google Sign In</span>
                </button>


                <button className='btn btn-info w-50 d-block mx-auto mb-2'>
                    <BsFacebook style={{fontSize: '30px', color: 'blue'}}/>
                    <span className='px-2'>Facebook Sign In</span>
                </button>


                <button onClick={ () => signInWithGithub() } className='btn btn-info w-50 d-block mx-auto mb-2'>
                    <BsGithub style={{fontSize: '30px',}}/>
                    <span className='px-2'>GitHub Sign In</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;