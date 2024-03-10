export interface IBook {
    smallimage?: string;
    bigimage?: string;
    categories: string[];
    title: string;
    authors: string[];
    id: string;
    description?: string;
}

export interface IBooks {
    books: IBook[];
    quantity_items: number | undefined;
    isLoaded: boolean | undefined;
}
