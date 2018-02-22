export class Book {
  id?: number;
  title: string;
  author: string;

  constructor(titre: string, author: string) {
    this.title = titre;
    this.author = author;
  }
}
