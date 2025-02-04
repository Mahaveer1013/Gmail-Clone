import GoogleButton from "../components/auth/GoogleButton";

const Login = () => {

  return (
    <>
      <section className="w-full h-[80vh] flex justify-center items-center bg-gray-50">
        <div className="bg-white p-8 rounded-lg shadow-md w-[90%] sm:w-[400px]">
          <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">Login</h1>
          {/* Google Login Button */}
          <GoogleButton />
        </div>
      </section>
    </>
  );
};

export default Login;
