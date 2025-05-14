export default function Home() {
  return (
    <div>
      <div className="text-center text-3xl bg-blue-400 m-5 p-3">
        <h1>Project mood</h1>
      </div>
      <div className="bg-purple-900 m-5 p-2 outline-blue-100 outline-2 rounded-2xl">
        <p className="text-center">
          mock-up for how the mood choice list will look like, may change
          slightly
        </p>
        {/* thesse divs will likely be replaced by a form later for the mood selection  */}
        <div className="flex justify-between m-20">
          <div className="moodButton">
            <p>1</p>
          </div>
          <div className="moodButton">
            <p>2</p>
          </div>
          <div className="moodButton">
            <p>3</p>
          </div>
          <div className="moodButton">
            <p>4</p>
          </div>
        </div>
        <p className="text-center bg-blue-500 p-4 m-5">your mood</p>
        <p className="text-center m-5 p-5">your choice appears here</p>
      </div>
    </div>
  );
}
