import Link from 'next/link';
import { Clock, Calendar, User, PenTool } from 'lucide-react';
import { getSortedBlogs } from '@/lib/data/blogs';
import styles from './blogs.module.css';

export default function Blogs() {
  const blogs = getSortedBlogs();

  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>
          <span>DELVE INTO THE WORLD</span>
          <span className={styles.highlightText}>OF CYBER MAGIC</span>
        </h1>
        <div className={styles.subtitle}>
          <span>Deepen your understanding of the cyber world</span>
          <span>with specially curated Hacklogs</span>
        </div>
        <div style={{ marginTop: '2rem' }}>
          <Link href="/blogs/writer" className={styles.studioBtn}>
            <PenTool size={16} /> Open Hacklog Studio
          </Link>
        </div>
      </header>

      <div className={styles.feed}>
        {blogs.map((blog) => (
          <Link href={`/blogs/${blog.slug}`} key={blog.slug} className={styles.card}>
            <div className={styles.cardHeader}>
              <div className={styles.metaInfo}>
                <span className={styles.metaItem}>
                  <Calendar size={14} />
                  {new Date(blog.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                </span>
                <span className={styles.metaItem}>
                  <Clock size={14} />
                  {blog.readingTime}
                </span>
              </div>
            </div>

            <h2 className={styles.cardTitle}>{blog.title}</h2>
            <p className={styles.cardSummary}>{blog.summary}</p>
            
            <div className={styles.metaItem} style={{ marginTop: '0.5rem', opacity: 0.9 }}>
              <User size={14} />
              <span style={{ fontWeight: 600 }}>{blog.author}</span>
            </div>

            <div className={styles.tags}>
              {blog.tags.map(tag => (
                <span key={tag} className={styles.tag}>{tag}</span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
