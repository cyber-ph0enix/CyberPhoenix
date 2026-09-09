'use client';

import { useState, useRef } from 'react';
import { saveBlogAction } from './actions';
import styles from './writer.module.css';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import blogStyles from '../[slug]/blog.module.css';
import { 
  Heading1, Heading2, Bold, Italic, 
  List, ListOrdered, Quote, Code, SquareTerminal, Link as LinkIcon, X 
} from 'lucide-react';

export default function BlogWriter() {
  const [status, setStatus] = useState<{ success: boolean; message: string } | null>(null);
  const [loading, setLoading] = useState(false);
  const [content, setContent] = useState('');
  
  // Tabs for mobile
  const [activeTab, setActiveTab] = useState<'write' | 'preview'>('write');
  
  // Tags UI state
  const [tags, setTags] = useState<string[]>([]);
  const [tagInput, setTagInput] = useState('');

  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleTagKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' || e.key === ',') {
      e.preventDefault();
      const newTag = tagInput.trim().replace(/^#/, '');
      if (newTag && !tags.includes(newTag)) {
        setTags([...tags, newTag]);
      }
      setTagInput('');
    }
  };

  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };

  const insertText = (before: string, after: string = '') => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const text = textarea.value;
    const selectedText = text.substring(start, end);
    
    const newText = text.substring(0, start) + before + selectedText + after + text.substring(end);
    setContent(newText);
    
    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(start + before.length, end + before.length);
    }, 0);
  };

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    const formData = new FormData(e.currentTarget);
    formData.set('content', content);
    formData.set('tags', tags.join(',')); // Inject custom tags state

    const result = await saveBlogAction(formData);

    setStatus(result);
    setLoading(false);

    if (result.success) {
      (e.target as HTMLFormElement).reset();
      setContent('');
      setTags([]);
    }
  }

  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>
          <span>HACKLOG</span>
          <span className={styles.highlightText}> STUDIO</span>
        </h1>
        <p style={{ opacity: 0.8, marginTop: '1rem' }}>Live Markdown Editor • Secure by Default</p>
      </header>

      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.metadataGrid}>
          <div className={styles.inputGroup}>
            <label className={styles.label} htmlFor="title">Blog Title</label>
            <input className={styles.input} type="text" id="title" name="title" required placeholder="e.g. Defeating Ransomware in 2026" />
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label} htmlFor="author">Author Name</label>
            <input className={styles.input} type="text" id="author" name="author" required placeholder="e.g. Uday" />
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label} htmlFor="tags">Tags</label>
            <div className={styles.tagInputWrapper}>
              <div className={styles.tagPills}>
                {tags.map(tag => (
                  <span key={tag} className={styles.tagPill}>
                    {tag}
                    <button type="button" onClick={() => removeTag(tag)} className={styles.tagRemoveBtn}>
                      <X size={14} />
                    </button>
                  </span>
                ))}
                <input 
                  type="text" 
                  className={styles.tagInputField}
                  placeholder={tags.length === 0 ? "Type a tag and hit Enter..." : "Add another tag..."}
                  value={tagInput}
                  onChange={(e) => setTagInput(e.target.value)}
                  onKeyDown={handleTagKeyDown}
                />
              </div>
            </div>
          </div>

          <div className={styles.inputGroup}>
            <label className={styles.label} htmlFor="summary">Short Summary</label>
            <input className={styles.input} type="text" id="summary" name="summary" required placeholder="A brief 1-2 sentence overview..." />
          </div>
        </div>

        <div className={styles.inputGroup + ' ' + styles.fullWidth}>
          <label className={styles.label}>Content Editor</label>
          <div className={styles.editorContainer}>
            <div className={styles.toolbar}>
              <button type="button" className={styles.toolbarBtn} onClick={() => insertText('# ', '')} title="Heading 1"><Heading1 size={18} /></button>
              <button type="button" className={styles.toolbarBtn} onClick={() => insertText('## ', '')} title="Heading 2"><Heading2 size={18} /></button>
              <button type="button" className={styles.toolbarBtn} onClick={() => insertText('**', '**')} title="Bold"><Bold size={18} /></button>
              <button type="button" className={styles.toolbarBtn} onClick={() => insertText('*', '*')} title="Italic"><Italic size={18} /></button>
              <button type="button" className={styles.toolbarBtn} onClick={() => insertText('- ', '')} title="Bullet List"><List size={18} /></button>
              <button type="button" className={styles.toolbarBtn} onClick={() => insertText('1. ', '')} title="Numbered List"><ListOrdered size={18} /></button>
              <button type="button" className={styles.toolbarBtn} onClick={() => insertText('> ', '')} title="Quote"><Quote size={18} /></button>
              <button type="button" className={styles.toolbarBtn} onClick={() => insertText('`', '`')} title="Inline Code"><Code size={18} /></button>
              <button type="button" className={styles.toolbarBtn} onClick={() => insertText('```\n', '\n```')} title="Code Block"><SquareTerminal size={18} style={{ color: 'var(--color-1)' }} /></button>
              <button type="button" className={styles.toolbarBtn} onClick={() => insertText('[', '](https://)')} title="Link"><LinkIcon size={18} /></button>
            </div>
            
            <div className={styles.tabs}>
              <button type="button" className={`${styles.tabBtn} ${activeTab === 'write' ? styles.active : ''}`} onClick={() => setActiveTab('write')}>Write</button>
              <button type="button" className={`${styles.tabBtn} ${activeTab === 'preview' ? styles.active : ''}`} onClick={() => setActiveTab('preview')}>Preview</button>
            </div>

            <div className={styles.splitView}>
              <div className={`${styles.pane} ${activeTab === 'write' ? styles.active : ''}`}>
                <textarea 
                  ref={textareaRef}
                  className={styles.textarea} 
                  id="content" 
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  required 
                  placeholder="Write your markdown here... Use the toolbar above to format."
                />
              </div>
              <div className={`${styles.pane} ${activeTab === 'preview' ? styles.active : ''}`}>
                <div className={`${styles.preview} ${blogStyles.content}`}>
                  {content ? (
                    <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeHighlight]}>
                      {content}
                    </ReactMarkdown>
                  ) : (
                    <div style={{ opacity: 0.5, fontStyle: 'italic', textAlign: 'center', marginTop: '2rem' }}>
                      Live preview will appear here...
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <button type="submit" className={styles.submitBtn} disabled={loading}>
          {loading ? 'PUBLISHING...' : 'PUBLISH HACKLOG'}
        </button>

        {status && (
          <div className={`${styles.message} ${status.success ? styles.success : styles.error}`}>
            {status.message}
          </div>
        )}
      </form>
    </main>
  );
}
