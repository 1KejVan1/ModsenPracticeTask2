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
  const apiKey: string = "AIzaSyCu2Kd8qGqIU6-qZw0XNUxDIjJkhr4v2tA";
  const data = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=${searchText}&orderBy=${sortingBy}${
      category ? `&subject=${category}` : ""
    }&startIndex=${startIndex}&maxResults=30&key=${apiKey}`,
  ).then((res) => res.json());

  const result: IBooks = {
    quantity_items: data.totalItems,
    books: data.items.map((item: any) => {
      return {
        title: item.volumeInfo.title,
        categories: item.volumeInfo.categories,
        authors: item.volumeInfo.authors,
        smallimage: item.volumeInfo?.imageLinks?.smallThumbnail,
        id: item.id,
        description: item.volumeInfo?.description,
      };
    }),
    isLoaded: undefined,
  };

  return result;
}

export { getBooks };
