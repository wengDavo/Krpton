import { useState } from "react";
import boxes from "../../assets/images/boxes.jpg";
import { Link } from "react-router-dom";

function Login() {
  let [render, setRender] = useState(0);
  function handleSubmit(e) {
    e.preventDefault();
    let form = new FormData(e.currentTaregt);
    let user = Object.fromEntries(form);
    console.log(user);

    setRender(render++);
    e.target.reset();
  }
  return (
    <section className="md:grid md:grid-cols-2 md:gap-2">
      <figure className="hidden md:block md:order-2">
        <img src={boxes} alt="" className="h-full" />
      </figure>
      <article class="bg-white-97 border border-white-95 p-5 flex flex-col gap-4 dark:bg-abs-dark dark:border-neutral-900">
        <div className="text-center">
          <p class="text-3xl mb-4">Login</p>
          <p class="text-sm ">
            Welcome back! Please log in to access your account.
          </p>
        </div>
        <form
          action=""
          className="signup--form flex flex-col gap-4"
          onSubmit={handleSubmit}
        >
          <p className="flex flex-col gap-2 relative">
            <label htmlFor="email" className="text-sm leading-6">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your Email"
              // required
              className="p-2 border border-white-95 placeholder:leading-6 placeholder:text-sm dark:bg-neutral-900 dark:border-abs-black outline-none"
            />
          </p>
          <p className="flex flex-col gap-2 relative">
            <label htmlFor="password" className="text-sm leading-6">
              Password
            </label>
            <input
              name="password"
              id="password"
              placeholder="Enter your Password"
              // required
              className="p-2 border border-white-95 placeholder:leading-6 placeholder:text-sm  dark:bg-neutral-900 dark:border-abs-black outline-none"
            />
          </p>
          <button
            type="submit"
            className="p-2 rounded-regular bg-primary-100 dark:bg-neutral-800"
          >
            Login
          </button>
        </form>
        <div class="flex w-full justify-between items-center my-4 text-neutral-500 gap-1 text-sm">
          <p className="w-full h-[1px] bg-white-90"></p>
          <p>OR</p>
          <p className="w-full h-[1px] bg-white-90"></p>
        </div>
        <div className="text-sm leading-6 flex gap-2 items-center justify-center">
          <p>Create an account? </p>
          <Link to="/register" className="underline">
            Sign Up
          </Link>
        </div>
      </article>
    </section>
  );
}

export default Login;
