// https://www.youtube.com/watch?v=PB5RQk5gAdQ&t=1184s
import * as contentful from "contentful";

export const client = contentful.createClient({
  space: process.env.REACT_APP_SPACE_ID,
  accessToken: process.env.REACT_APP_ACCESS_TOKEN,
});
