export default function SignUpForm() {
  return (
    <form
      action="#"
      className="flex flex-col p-0 p-5 mt-5 space-y-4 text-black bg-white rounded-lg shadow-xl lg:p-10 lg:space-y-6"
    >
      <input
        className="p-4 font-semibold placeholder-gray-500 border rounded-lg outline-none lg:px-8 focus:ring-accent-blue focus:ring-1"
        placeholder="First Name"
        type="text"
      />
      <input
        className="p-4 font-semibold placeholder-gray-500 border rounded-lg outline-none lg:px-8 focus:ring-accent-blue focus:ring-1"
        placeholder="Last Name"
        type="text"
      />
      <input
        className="p-4 font-semibold placeholder-gray-500 border rounded-lg outline-none lg:px-8 focus:ring-accent-blue focus:ring-1"
        placeholder="Email Address"
        type="email"
      />
      <input
        className="p-4 font-semibold placeholder-gray-500 border rounded-lg outline-none lg:px-8 focus:ring-accent-blue focus:ring-1"
        placeholder="Password"
        type="Password"
      />
      <button
        type="submit"
        className="py-4 text-sm tracking-wide text-gray-100 uppercase rounded-lg shadow-xl lg:text-base bg-primary-green hover:bg-opacity-75"
      >
        Claim your free trial
      </button>
      <div className="text-xs font-medium text-gray-300 ">
        By clicking the button, you are agreeing to our{' '}
        <span className="text-xs font-medium text-primary-red">
          Terms and Services
        </span>
      </div>
    </form>
  );
}
