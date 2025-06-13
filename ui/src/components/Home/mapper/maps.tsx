import {
  ApachePlainWordmark,
  FlaskOriginalWordmark,
  GithubOriginalWordmark,
  GitlabOriginalWordmark,
  GrafanaOriginalWordmark,
  JavaOriginalWordmark,
  JavascriptOriginal,
  JenkinsOriginal,
  KubernetesPlainWordmark,
  MongodbPlainWordmark,
  MysqlPlainWordmark,
  PrometheusOriginalWordmark,
  PythonOriginalWordmark,
  ReactOriginalWordmark,
  ReduxOriginal,
  SpringOriginalWordmark,
  TailwindcssPlain,
  TypescriptOriginal,
} from "devicons-react";

export const mapTechToIcon = new Map<string, JSX.Element>();
mapTechToIcon.set(
  "aip",
  <img src="/aip.png" width={30} height={30} alt={"aip-logo"} />
);
mapTechToIcon.set("apache", <ApachePlainWordmark size={30} />);
mapTechToIcon.set("flask", <FlaskOriginalWordmark size={30} />);
mapTechToIcon.set(
  "foundry",
  <img src="/foundry.png" width={30} height={30} alt={"foundry-logo"} />
);
mapTechToIcon.set("github", <GithubOriginalWordmark size={30} />);
mapTechToIcon.set("gitlab", <GitlabOriginalWordmark size={30} />);
mapTechToIcon.set("grafana", <GrafanaOriginalWordmark size={30} />);
mapTechToIcon.set("java", <JavaOriginalWordmark size={30} />);
mapTechToIcon.set("javascript", <JavascriptOriginal size={30} />);
mapTechToIcon.set("jenkins", <JenkinsOriginal size={30} />);
mapTechToIcon.set("kubernetes", <KubernetesPlainWordmark size={30} />);
mapTechToIcon.set("mongodb", <MongodbPlainWordmark size={30} />);
mapTechToIcon.set("mysql", <MysqlPlainWordmark size={30} />);
mapTechToIcon.set("prometheus", <PrometheusOriginalWordmark size={30} />);
mapTechToIcon.set("python", <PythonOriginalWordmark size={30} />);
mapTechToIcon.set("react", <ReactOriginalWordmark size={30} />);
mapTechToIcon.set("redux", <ReduxOriginal size={30} />);
mapTechToIcon.set("spring", <SpringOriginalWordmark size={30} />);
mapTechToIcon.set("tailwind", <TailwindcssPlain size={30} />);
mapTechToIcon.set("typescript", <TypescriptOriginal size={30} />);
