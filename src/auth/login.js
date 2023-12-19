import React from 'react';
import BackLog from '../assets/back_log.avif'
import { Link } from 'react-router-dom';
import FadeIn from '../components/animations/Fadein';



const Login = () => {

    /*
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Tạo một tài khoản người dùng mới
      const { user } = await appwrite.account.createSession(email, password);

      console.log('Logged in:', user);
      <Link to ="/home"></Link>
      // Xử lý sau khi đăng nhập thành công, ví dụ: điều hướng đến trang chính
    } catch (error) {
      console.error('Login failed:', error);
      // Xử lý lỗi đăng nhập
    }
  };

*/
    return (
        <FadeIn delay={0.2} direction="left">
            <div className='bg-gray-100 h-screen flex items-center justify-center'>
            <div className="max-w-[980px] w-full bg-white p-8 rounded-md shadow-md flex">
                <div className="w-1/4">
                    <img src={BackLog} alt="" />
                </div>

            <div className="w-3/4 px-8 flex flex-col">
                <h3 className="text-2xl font-semibold mb-4 self-start text-[#69432B]">Chocobrat</h3>
                <p className='mt-5 ml-16'>Welcome back, <p className='flex'>Let's go to <p className='text-[#69432B] font-bold ml-1'> Chocobrat</p></p> </p>
                <form action="#" method="post">
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="mt-5 ml-16 p-2 border border-solid border-#69432B rounded-md text-[#69432B] placeholder-[#69432B] w-full md:w-1/2 focus:outline-none focus:border-orange-950 focus:bg-orange-50"
                        placeholder="Email"
                    />
                    <div className="mb-6">
              
                    <input
                        type="password"
                        id="password"
                        name="password"
                        className="mt-5 ml-16 p-2 border border-solid border-#69432B rounded-md text-[#69432B] placeholder-[#69432B] w-full md:w-1/2 focus:outline-none focus:bg-orange-50 focus:border-orange-950"
                        placeholder="Password"
                        
                    />
                    </div>
                    <Link to={'/home'}>
                        <button
                            type="submit"
                            className="bg-[#69432B] text-white py-2 px-4 ml-16 mt-1 rounded-md hover:bg-orange-950 focus:outline-none focus:ring focus:border-blue-300 md:w-1/2"
                        >
                            Login
                        </button>
                    </Link> 
                    
                 
                   

                    <p className="mt-4 ml-16 flex">
                        If you don't have an account, <Link to={'/sign-up'}><p className='text-[#69432B] font-bold ml-1'>register</p></Link>
                    </p>
                </form>
        </div>
      </div>
        </div>
        </FadeIn>
        
    );
};

export default Login;