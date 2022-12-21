export default function Header({}) {
  return (
    <div className="bg-blue-200 w-full p-4 flex flex-wrap items-center justify-between gap-4">
      {" "}
      <h1 className="font-bold flex flex-col">
        Simple Universal Language{" "}
        <span className="sul text-[2em]">usuy-kimem</span>
      </h1>
      <div className="flex gap-4">
        <a href="/learn/">
          <div>
            Learn
            <div className="sul text-[1.6em]">tek</div>
          </div>
        </a>
        <a href="/dictionary/">
          <div>
            Dictionary
            <div className="sul text-[1.6em]">amoyot</div>
          </div>
        </a>
        <a href="/">
          {" "}
          <div>
            Home
            <div className="sul text-[1.6em]">oye</div>
          </div>
        </a>
      </div>
    </div>
  );
}
