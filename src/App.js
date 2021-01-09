import './App.css';
import SignUpFrom from './components/SignUpForm';

function App() {
  return (
    <div className="flex flex-col items-center h-screen px-5 py-20 lg:justify-center app bg-primary-red ">
      <div
        style={{ maxWidth: 1200 }}
        className="flex flex-col items-center text-center text-white lg:flex-row lg:space-x-10"
      >
        <div className="flex-1 lg:text-left">
          <div className="px-10 text-2xl font-bold leading-5 lg:p-0 lg:text-5xl lg:leading-tight">
            Learn to code by watching others
          </div>
          <div className="mt-5 text-sm lg:text-base">
            See how experienced developers solve problems in real-time. Watching
            scripted tutorials is great, but understanding how developers think
            is invaluable.
          </div>
        </div>
        <div className="flex-1">
          <div className="px-20 py-3 text-sm leading-loose text-center rounded-lg shadow-xl mt-14 price-alert bg-accent-blue lg:text-base lg:py-6">
            <span className="text-sm font-bold lg:text-base">
              Try it free 7 days
            </span>{' '}
            then $20/mo. thereafter
          </div>
          <SignUpFrom />
        </div>
      </div>
    </div>
  );
}

export default App;
