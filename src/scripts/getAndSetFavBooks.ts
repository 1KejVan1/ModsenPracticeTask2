import { IBook } from "../interfaces/IBook";

export function setFavBooks(favbooks: IBook[]) {
  debugger;
  let str: string[][] = new Array(favbooks.length);
  let result: string = "";
  for (let i = 0; i < favbooks.length; i++) {
    for (const item in Object.values(favbooks[i])) {
      str[i].push(item);
    }
  }

  for (let i = 0; i < str.length; i++) {
    if (i + 1 === str.length) {
      result += str.join(";") + ".";
    } else {
      result += str.join(";");
    }
  }

  //   favbooks.map((item, index) => {
  //     if (index + 1 === favbooks.length) {
  //       result += `${item.authors.map((ath, index) => {
  //         if (index + 1 === item.authors.length) {
  //           return `${ath}`;
  //         } else {
  //           return `${ath},`;
  //         }
  //       })};${item.bigimage};${item.categories.map((cat, index) => {
  //         if (index + 1 === item.categories.length) {
  //           return `${cat}`;
  //         } else {
  //           return `${cat},`;
  //         }
  //       })};${item.description};${item.id};${item.smallimage};${item.title}`;
  //     } else {
  //       result += `${item.authors.map((ath, index) => {
  //         if (index + 1 === item.authors.length) {
  //           return `${ath}`;
  //         } else {
  //           return `${ath},`;
  //         }
  //       })};${item.bigimage};${item.categories.map((cat, index) => {
  //         if (index + 1 === item.categories.length) {
  //           return `${cat}`;
  //         } else {
  //           return `${cat},`;
  //         }
  //       })};${item.description};${item.id};${item.smallimage};${item.title}.`;
  //     }
  //   });

  localStorage.setItem("favBooks", result);
  console.log(localStorage.getItem("favBooks"));
}

export function getFavBooks(): IBook[] {
  const parcedBooks = localStorage.getItem("favBooks")?.split(".");

  if (parcedBooks) {
    let books: IBook[] = [];
    for (let i = 0; i < parcedBooks.length; i++) {
      const str: string[] = parcedBooks[i].split(";");
      const authors = str[0].split(",");
      const categories = str[2].split(",");
      books.push({
        authors: authors.length === 0 ? [str[0]] : authors,
        bigimage: str[1],
        categories: categories.length === 0 ? [str[2]] : categories,
        description: str[3],
        id: str[4],
        smallimage: str[5],
        title: str[6],
      });
    }

    return books;
  }

  return [];
}
