import InputField from "@/components/InputField";
import Button from "@/components/Button";

export default function Login() {
  return (
    <main className="my-5 flex flex-col gap-2">
      <form className="max-w-sm w-full mx-auto flex flex-col gap-3 border border-gray-300 px-14 py-5 rounded">
        <div className="flex items-center justify-center">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/225px-Instagram_logo.svg.png" alt="instagram" className="w-44" />
        </div>
        <div className="flex flex-col gap-1">
          <InputField placeholder="Phone number, username or email"/>
          <InputField type="password" placeholder="Password"/>
        </div>
        <Button type='submit' text='Log In' />
        <div className="flex gap-2 items-center">
          <div className="w-full bg-gray-300 leading-none h-px"></div>
          <span className="text-xs text-gray-600 font-semibold">OR</span>
          <div className="w-full bg-gray-300 leading-none h-px"></div>
        </div>
        <div className="text-center">
          <a className="text-xs text-gray-600 hover:text-black" href="#">Forgot Password ?</a>
        </div>
      </form>
      <div className="max-w-sm w-full mx-auto flex flex-col gap-3 border border-gray-300 px-14 py-5 rounded">
        <p className="text-xs text-center">
          Don{`'`}t have an Account? <a href="#" className="text-blue-500 font-semibold">Sign Up</a>
        </p>
      </div>
    </main>
  );
}