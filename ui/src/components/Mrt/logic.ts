import stations from "./wikipedia-mrt.json";

export interface Line {
  code: string | string[];
  name: string;
  stations: Station[];
}

const lines: Line[] = [
  {
    code: "EW",
    name: "East West Line",
    stations: [],
  },
  {
    code: "CG",
    name: "East West Line (Changi Extension)",
    stations: [],
  },
  {
    code: "NS",
    name: "North South Line",
    stations: [],
  },
  {
    code: "NE",
    name: "North East Line",
    stations: [],
  },
  {
    code: "CC",
    name: "Circle Line",
    stations: [],
  },
  {
    code: "CE",
    name: "Circle Line Extension",
    stations: [],
  },
  {
    code: "DT",
    name: "Downtown Line",
    stations: [],
  },
  {
    code: "TE",
    name: "Thomson-East Coast Line",
    stations: [],
  },
  {
    code: "BP",
    name: "Bukit Panjang LRT",
    stations: [],
  },
  {
    code: ["SW", "STC"],
    name: "Sengkang LRT (West)",
    stations: [],
  },
  {
    code: ["SE", "STC"],
    name: "Sengkang LRT (East)",
    stations: [],
  },
  {
    code: ["PW", "PTC"],
    name: "Punggol LRT (West)",
    stations: [],
  },
  {
    code: ["PE", "PTC"],
    name: "Punggol LRT (East)",
    stations: [],
  },
];

export interface Station {
  code: string;
  name: string;
  name_zh_Hans: string;
  name_ta: string;
  title: string;
  url: string;
  neighbours: string[];
}

export const getSplitStations = () => {
  for (const station of stations) {
    for (const code of station.codes) {
      console.log(code)
      const stationData: Station = {
        code: code,
        name: station.name,
        name_zh_Hans: station.name_zh_Hans,
        name_ta: station.name_ta,
        title: station.title,
        url: station.url,
        neighbours: station.codes.filter((x) => x !== code),
      };
      for (const line of lines) {
        if (typeof line.code === "string") {
          if (stationData.code.includes(line.code)) {
            line.stations.push(stationData);
          }
        } else if (Array.isArray(line.code)) {
          if (line.code.some(x => stationData.code.includes(x))) {
            line.stations.push(stationData);
          }
        }
      }
    }
  }
  for (const line of lines) {
    line.stations.sort((a, b) => parseInt(a.code.replace(/\D/g, "")) - parseInt(b.code.replace(/\D/g, "")));
  }
  return lines
};
