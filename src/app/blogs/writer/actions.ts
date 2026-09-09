'use server';

import fs from 'fs';
import path from 'path';

export async function saveBlogAction(formData: FormData) {
  try {
    const title = formData.get('title') as string;
    const author = formData.get('author') as string;
    const tagsInput = formData.get('tags') as string;
    const summary = formData.get('summary') as string;
    const content = formData.get('content') as string;

    if (!title || !author || !content) {
      return { success: false, message: 'Title, Author, and Content are required.' };
    }

    const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
    const date = new Date().toISOString().split('T')[0];
    const tags = tagsInput.split(',').map(t => `"${t.trim()}"`).filter(t => t !== '""').join(', ');

    const fileData = `---
title: "${title}"
date: "${date}"
author: "${author}"
tags: [${tags}]
summary: "${summary}"
---

${content}
`;

    // In production, this would use GitHub API to commit the file.
    // For now, we save it locally to the content directory.
    const filePath = path.join(process.cwd(), 'src', 'content', 'blogs', `${slug}.md`);
    fs.writeFileSync(filePath, fileData);

    return { success: true, message: `Blog saved successfully as ${slug}.md!` };
  } catch (error: any) {
    return { success: false, message: error.message || 'An error occurred while saving.' };
  }
}
