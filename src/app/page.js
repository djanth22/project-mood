import PosMood from "@/components/PosMood";
import NegMood from "@/components/NegMood";
import NeuMood from "@/components/NeuMood";
import MoodSelect from "@/components/MoodSelect";
import CurrentMood from "@/components/CurrentMood";

export default function Home() {
  return (
    <div>
      <div className="text-center text-3xl bg-blue-400 m-5 p-3 rounded-4xl">
        <h1>Project mood</h1>
      </div>
      <div className="main">
        <p className="text-center m-3 mb-8">select your mood</p>

        <div className="main-content">
          <div className="options-container">
            <details>
              <summary className="cursor-pointer font-semibold mb-2 bg-blue-950 rounded-4xl p-2 text-center">
                mood categories
              </summary>

              <MoodSelect />
              <NeuMood />
              <PosMood />
              <NegMood />
            </details>
          </div>
        </div>
      </div>
      <p className="text-center bg-blue-500 p-4 m-5 rounded-4xl">your mood</p>
      <div className="bg-blue-950 text-center  m-3 p-3 YourMood rounded-4xl">
        <CurrentMood />
      </div>
    </div>
  );
}
