// @ts-ignore
import XMLParser from "react-xml-parser";

// we have to retrieve it in xml and format to json as it contains duplicate keys
const endPoint =
  "https://www.vizgr.org/historical-events/search.php?format=xml&begin_date=-%203000000&end_date=20151231&lang=en&limit=10";

const toJson = (data: any) => {
  const xml = new XMLParser().parseFromString(data);
  const events = xml.getElementsByTagName("event");
  const results: any[] = [];

  console.log(events);

  events.forEach((event: any) => {
    event.children = event.children.map((child: any) => {
      return {
        [child.name]: child.value,
      };
    });
  });

  events.forEach((event: any) => {
    const test: any = {};
    event.children.forEach((child: any) => {
      const key = Object.keys(child)[0];
      const value = Object.values(child)[0];
      test[key] = value;
    });
    results.push(test);
  });

  return results;
};

export const fetchEvents = async () => {
  return fetch(endPoint)
    .then((response) => response.text())
    .then((str) => toJson(str));
};
