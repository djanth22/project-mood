import { db } from "@/utils/dbconnection";

export default async function MoodSelect() {
  const choices = await db.query("SELECT * FROM moods;");
  const cIw = choices.rows;

  return (
    <>
      <form>
        {cIw.map((item) => {
          return (
            <>
              <div className="flex" key={item.id}>
                <p>{item.name}</p>
                <button className="ml-3" type="submit">
                  {item.id}
                </button>
              </div>
            </>
          );
        })}
      </form>
    </>
  );
}
