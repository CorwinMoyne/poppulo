// @ts-ignore
import XMLParser from "react-xml-parser";
import { ByFilter } from "../enums/byFilter";

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

export const fetchEvents = async (query: string) => {
  const endPoint = `https://www.vizgr.org/historical-events/search.php?format=xml&begin_date=-3000000&end_date=20151231&query=${query}&lang=en`;
  return fetch(endPoint)
    .then((response) => response.text())
    .then((str) => toJson(str));
};

export const fetchCategoriesFromJson = async () => {
  const response = require("../../events.json");

  const placeCategories: string[] = [];
  const topicCategories: string[] = [];

  response.result.events.forEach((event: any) => {
    if (event.category1 === ByFilter.ByPlace) {
      const placeCategory = event.category2
        ?.replace(/[/=]/g, "")
        .replace(/[\s]/, "");
      if (placeCategory && !placeCategories.includes(placeCategory)) {
        placeCategories.push(placeCategory);
      }
    } else if (event.category1 === ByFilter.ByTopic) {
      const topicCategory = event.category2
        ?.replace(/[\=]/g, "")
        .replace(/[\s]/, "");
      if (topicCategory && !topicCategories.includes(topicCategory)) {
        topicCategories.push(topicCategory);
      }
    }
  });

  return {
    placeCategories: placeCategories.sort(),
    topicCategories: topicCategories.sort(),
  };
};
