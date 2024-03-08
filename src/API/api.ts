import { IBook } from "../interfaces/IBook";

interface Props {
  searchText: string;
  sortingBy?: string;
  category?: string;
}

async function getBooks({
  searchText,
  sortingBy = "relevance",
  category = "",
}: Props): Promise<IBook[]> {
  let data = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=${searchText}&orderBy=${sortingBy}${
      category ? `&subject=${category}` : ""
    }&startIndex=0&maxResults=30&key=AIzaSyCu2Kd8qGqIU6-qZw0XNUxDIjJkhr4v2tA`
  ).then((res) => res.json());

  let info = data.items;

  let result: IBook[] = [];

  for (let i = 0; i < info.length; i++) {
    result.push({
      title: info[i].volumeInfo.title,
      categories: info[i].volumeInfo.categories,
      authors: info[i].volumeInfo.authors,
      smallimage: info[i].volumeInfo?.imageLinks?.smallThumbnail,
      bigimage: info[i].volumeInfo?.imageLinks?.thumbnail,
    });
  }
  return result;
}

export { getBooks };
