import { authenticate } from "./authenticate";

const token = authenticate();

interface searchResult {
  id: string;
  primaryTitle: string;
  secondaryTitle?: string;
  coverImage: string;
  type: string;
}

export const search = async (query: string, selector: string) => {
  const endpoint = `https://api.spotify.com/v1/search?q=${query
    .split(" ")
    .join("+")}&type=${selector}`;

  try {
    const response = await fetch(
      endpoint, {
      headers: { Authorization: 'Bearer ' + token },
    })
    const jsonResponse = await response.json()
    const cleanResponse = jsonResponse[selector+'s'].items.filter((element: any) => element.images.length > 0)
    return cleanResponse.map((element: any) => ({
      id: element.id,
      primary: element.name,
      secondary: element.artists ? element.artists.name : null,
      coverImage: element.images[0].url,
      type: selector
    }))
  } catch (err){
    console.log(err)
  }
  
};
