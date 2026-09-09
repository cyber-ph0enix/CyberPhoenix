import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';

const blogsDirectory = path.join(process.cwd(), 'src/content/blogs');

export interface BlogMeta {
  slug: string;
  title: string;
  date: string;
  author: string;
  tags: string[];
  summary: string;
  readingTime: string;
}

export interface BlogPost {
  meta: BlogMeta;
  content: string;
}

export function getSortedBlogs(): BlogMeta[] {
  const fileNames = fs.readdirSync(blogsDirectory);
  const allBlogsData = fileNames
    .filter(fileName => fileName.endsWith('.md') && !fileName.startsWith('_'))
    .map(fileName => {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(blogsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');

      const { data, content } = matter(fileContents);
      const readTime = readingTime(content).text;

      return {
        slug,
        title: data.title,
        date: data.date,
        author: data.author,
        tags: data.tags || [],
        summary: data.summary,
        readingTime: readTime,
      } as BlogMeta;
    });

  return allBlogsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getBlogBySlug(slug: string): BlogPost {
  const fullPath = path.join(blogsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const { data, content } = matter(fileContents);
  const readTime = readingTime(content).text;

  return {
    meta: {
      slug,
      title: data.title,
      date: data.date,
      author: data.author,
      tags: data.tags || [],
      summary: data.summary,
      readingTime: readTime,
    },
    content,
  };
}
