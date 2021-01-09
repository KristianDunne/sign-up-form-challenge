export default function SignUpForm() {
  return (
    <form
      action="#"
      className="flex flex-col p-0 p-5 mt-5 space-y-4 bg-white rounded-lg shadow-xl"
    >
      <input
        className="p-4 font-semibold placeholder-gray-500 border rounded-lg"
        placeholder="First Name"
        type="text"
      />
      <input
        className="p-4 font-semibold placeholder-gray-500 border rounded-lg"
        placeholder="Last Name"
        type="text"
      />
      <input
        className="p-4 font-semibold placeholder-gray-500 border rounded-lg"
        placeholder="Email Address"
        type="email"
      />
      <input
        className="p-4 font-semibold placeholder-gray-500 border rounded-lg"
        placeholder="Password"
        type="Password"
      />
      <button
        type="submit"
        className="py-4 text-sm tracking-wide text-gray-100 uppercase rounded-lg shadow-xl bg-primary-green hover:bg-opacity-75"
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
