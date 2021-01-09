import './App.css';

function App() {
  return (
    <div className="flex flex-col h-screen px-5 py-20 text-center text-white app bg-primary-red">
      <div className="px-10 text-2xl font-bold">
        Learn to code by watching others
      </div>
      <div className="mt-5 text-sm">
        See how experienced developers solve problems in real-time. Watching
        scripted tutorials is great, but understanding how developers think is
        invaluable.
      </div>
      <div className="py-3 text-sm leading-loose text-center rounded-lg shadow-xl mt-14 price-alert bg-accent-blue">
        <span className="text-sm font-bold">Try it free 7 days</span> then
        <br />
        $20/mo. thereafter
      </div>
    </div>
  );
}

export default App;
