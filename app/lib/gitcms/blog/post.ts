import path from "path";
import { nanoid } from "nanoid";
import GitFile from "../gitstore/gitfile";
import { GITSTOR_CONFIG, now, postnameToTitle, titleToPostname } from "./post-utils";

interface IPost {
  id: string;
  title: string;
  author: string;
  metadescription?: string;
  category?: string;
  content: string;
  createdAt: string;
  updatedAt: string;
}

class Post implements IPost {
  private _id: string;
  private _title: string;
  private _author: string;
  private _metadescription?: string;
  private _category?: string;
  private _content: string;
  private _createdAt: string;
  private _updatedAt: string;
  private gfile: GitFile;

  constructor(title: string, author: string, content: string, metadescription?: string, category?: string) {
    this._id = nanoid();
    this._title = title
    this._author = author
    this._metadescription = metadescription;
    this._category = category;
    this._content = content
    this._createdAt = now();
    this._updatedAt = this._createdAt;

    this.gfile = new GitFile(GITSTOR_CONFIG);
  }

  get id(): string {
    return this._id;
  }

  get title(): string {
    return this._title;
  }

  get author(): string {
    return this._author;
  }

  get metadescription(): string | undefined {
    return this._metadescription;
  }

  get category(): string | undefined {
    return this._category;
  }

  get content(): string {
    return this._content;
  }

  get createdAt(): string {
    return this._createdAt;
  }

  get updatedAt(): string {
    return this._updatedAt;
  }

  static async read(postpath: string): Promise<IPost> {
    const gfile = new GitFile(GITSTOR_CONFIG)
    const { content } = await gfile.read(postpath);

    return JSON.parse(content);
  }

  static async delete(title: string) {
    const postname = titleToPostname(title)
    const postpath = path.join(process.env.PUBLIC_POSTS_DIRECTORY || "", `${postname}.md`);
    const gfile = new GitFile(GITSTOR_CONFIG)

    console.log('PPATH', postpath)

    await gfile.delete(postpath);
  }

  public async save() {
    const postname = titleToPostname(this.title);
    const postpath = path.join(process.env.PUBLIC_POSTS_DIRECTORY || "", `${postname}.md`);
    this._updatedAt = now();

    const post = {
      id: this.id,
      title: this.title,
      author: this.author,
      metadescription: this.metadescription,
      category: this.category,
      content: this.content,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };

    const fileContent = JSON.stringify(post);
    await this.gfile.createOrUpdate(postpath, fileContent);
  }
}

export default Post;
