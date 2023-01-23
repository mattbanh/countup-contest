export function EntryVisual({ unavailable }) {
  //   const entryChart = () => {
  //   let unavailable = [504, 531, 578, 582, 548, 587];
  let chartArr = [];
  for (let i = 0; i < 5; i++) {
    chartArr.push([]);
    for (let k = 0; k < 20; k++) {
      chartArr[i].push(501 + i * 20 + k);
    }
  }
  //   return chartArr;
  //   };
  return (
    <section className="md:m-4 mb-10">
      <div className="flex justify-between max-w-[400px] mb-4">
        {chartArr.map((column, j) => (
          <div key={j} className="flex flex-col">
            {chartArr[j].map((entry) => (
              <span
                className={
                  unavailable && unavailable.includes(entry)
                    ? "text-vcdred"
                    : "text-green-500"
                }
                key={entry}
              >
                {entry}
              </span>
            ))}
          </div>
        ))}
      </div>
      <div className="flex gap-6">
        <span className="text-green-500 text-xs"># = available</span>
        <span className="text-vcdred text-xs"># = unavailable</span>
      </div>
    </section>
  );
}
