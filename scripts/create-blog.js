const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const blogsDir = path.join(__dirname, '..', 'src', 'content', 'blogs');

rl.question('Blog Title: ', (title) => {
  rl.question('Author Name: ', (author) => {
    rl.question('Tags (comma separated): ', (tagsInput) => {
      rl.question('Short Summary: ', (summary) => {
        
        const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
        const date = new Date().toISOString().split('T')[0];
        const tags = tagsInput.split(',').map(t => `"${t.trim()}"`).filter(t => t !== '""').join(', ');
        
        const template = `---
title: "${title}"
date: "${date}"
author: "${author}"
tags: [${tags}]
summary: "${summary}"
---

Write your markdown content here...
`;
        
        const filePath = path.join(blogsDir, `${slug}.md`);
        
        fs.writeFileSync(filePath, template);
        console.log(`\nSuccess! Blog created at: src/content/blogs/${slug}.md`);
        rl.close();
      });
    });
  });
});
