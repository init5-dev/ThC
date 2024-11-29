import { NextRequest, NextResponse } from "next/server";
import {Post} from "../../lib/gitcms/blog/";
import handleError from "../../lib/gitcms/utils/handle-error";

export const POST = async (request: NextRequest) => {
  try {
    const { path } = await request.json();

    const post = await Post.read(path)

    const response = {
      id: post.id,
      title: post.title,
      author: post.author,
      metadescription: post.metadescription,
      category: post.category,
      content: post.content,
      createdAt: post.createdAt,
      updatedAt: post.updatedAt,
    };

    return NextResponse.json(response);
  } catch (error) {
    return handleError(error);
  }
};

export const PUT = async (req: NextRequest) => {
  try {
    const { title, author, metadescription, category, content } = await req.json();

    const post = new Post(
      title,
      author,
      content,
      metadescription,
      category
    );

    await post.save();

    return NextResponse.json({ message: "Post saved successfully." });
  } catch (error) {
    return handleError(error);
  }
};

export const DELETE = async (request: NextRequest) => {
  try {
    const { postname } = await request.json();

    await Post.delete(postname);

    return NextResponse.json({ message: "Post deleted successfully." });
  } catch (error) {
    return handleError(error);
  }
};
