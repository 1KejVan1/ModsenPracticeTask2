import { IBooks } from "../interfaces/IBook";
interface Props {
  searchText: string;
  sortingBy?: string;
  category?: string;
  startIndex?: number;
}

async function getBooks({
  searchText,
  sortingBy = "relevance",
  category = "all",
  startIndex = 0,
}: Props): Promise<IBooks> {
  // const apiKey: string = process.env.REACT_APP_API_KEY as string;
  const apiKey: string = "AIzaSyCu2Kd8qGqIU6-qZw0XNUxDIjJkhr4v2tA";
  let data = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=${searchText}&orderBy=${sortingBy}${
      category ? `&subject=${category}` : ""
    }&startIndex=${startIndex}&maxResults=30&key=${apiKey}`
  ).then((res) => res.json());

  let info = data.items;
  let quantity: number = data.totalItems;
  let result: IBooks = {
    quantity_items: quantity,
    books: [],
    isLoaded: undefined,
  };

  for (let i = 0; i < info.length; i++) {
    result.books.push({
      title: info[i].volumeInfo.title,
      categories: info[i].volumeInfo.categories,
      authors: info[i].volumeInfo.authors,
      smallimage: info[i].volumeInfo?.imageLinks?.smallThumbnail,
      bigimage: info[i].volumeInfo?.imageLinks?.thumbnail,
      id: info[i].id,
      description: info[i].volumeInfo?.description,
    });
  }
  return result;
}

export { getBooks };
