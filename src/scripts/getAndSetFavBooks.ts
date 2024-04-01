import { IBook } from "@interfaces/IBook";

export function setFavBooks(favbooks: IBook[]) {
  let str: string[][] = new Array(favbooks.length);

  for (let i = 0; i < str.length; i++) {
    str[i] = [];
  }
  let result: string = "";
  for (let i = 0; i < favbooks.length; i++) {
    let x = Object.values(favbooks[i]);

    for (let j = 0; j < x.length; j++) {
      if (favbooks[i].authors === x[j]) {
        str[i].push((x[j] as string[]).join(";"));
      } else if (favbooks[i].categories === x[j]) {
        str[i].push((x[j] as string[]).join(";"));
      } else {
        str[i].push(`${x[j]}`);
      }
    }
  }
  for (let i = 0; i < str.length; i++) {
    if (i + 1 === str.length) {
      result += str[i].join("|");
    } else {
      result += str[i].join("|") + "|";
    }
  }

  localStorage.setItem("favBooks", result);
}

export function getFavBooks(): IBook[] {
  const parcedBooks = localStorage.getItem("favBooks")?.split("|");

  if (parcedBooks && parcedBooks[0] !== "") {
    let books: IBook[] = [];
    for (let i = 0; i < parcedBooks.length; i += 6) {
      let temp = parcedBooks.slice(i, i + 6);
      let title: string = "";
      let authors: string[] = [];
      let smallImage: string = "";
      let categories: string[] = [];
      let id: string = "";
      let description: string = "";

      for (let i = 0; i < temp.length; i++) {
        if (i === 0) title = temp[i];
        else if (i === 1) authors = temp[i].split(";");
        else if (i === 2) smallImage = temp[i];
        if (i === 3) categories = temp[i].split(";");
        else if (i === 4) id = temp[i];
        if (i === 5) description = temp[i];
      }

      books.push({
        title: title,
        authors: authors,
        smallimage: smallImage,
        categories: categories,
        id: id,
        description: description,
      });
    }

    return books;
  }

  return [];
}
