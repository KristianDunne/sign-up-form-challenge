import './App.css';
import SignUpFrom from './components/SignUpForm';

function App() {
  return (
    <div className="flex flex-col items-center h-screen px-5 py-20 lg:justify-center app bg-primary-red ">
      <div
        style={{ maxWidth: 1000 }}
        className="flex flex-col items-center text-center text-white lg:flex-row lg:space-x-10"
      >
        <div className="flex-1 lg:text-left">
          <div className="px-10 text-2xl font-bold lg:p-0">
            Learn to code by watching others
          </div>
          <div className="mt-5 text-sm">
            See how experienced developers solve problems in real-time. Watching
            scripted tutorials is great, but understanding how developers think
            is invaluable.
          </div>
        </div>
        <div className="flex-1">
          <div className="py-3 text-sm leading-loose text-center rounded-lg shadow-xl mt-14 price-alert bg-accent-blue">
            <span className="text-sm font-bold">Try it free 7 days</span> then
            <br />
            $20/mo. thereafter
          </div>
          <SignUpFrom />
        </div>
      </div>
    </div>
  );
}

export default App;
