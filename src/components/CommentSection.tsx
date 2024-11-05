import React, { useState } from 'react';
import { MessageCircle, ThumbsUp, Calendar, Send } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface Comment {
  id: string;
  author: string;
  content: string;
  date: string;
  likes: number;
}

const CommentSection: React.FC = () => {
  const { t } = useLanguage();
  const [showCommentForm, setShowCommentForm] = useState(false);
  const [newComment, setNewComment] = useState({ author: '', content: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Simulated comments data
  const [comments, setComments] = useState<Comment[]>([
    {
      id: '1',
      author: 'Sarah Chen',
      content: 'Amazing portfolio! The password generator project is exactly what I was looking for.',
      date: '2024-03-15',
      likes: 12
    },
    {
      id: '2',
      author: 'Marc Dubois',
      content: 'Très impressionné par la qualité du code et le design moderne.',
      date: '2024-03-14',
      likes: 8
    },
    {
      id: '3',
      author: 'Yuki Tanaka',
      content: 'とても素晴らしいポートフォリオですね！レストランのウェブサイトが特に印象的です。',
      date: '2024-03-13',
      likes: 15
    }
  ]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.author.trim() || !newComment.content.trim()) return;

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const comment: Comment = {
      id: Date.now().toString(),
      author: newComment.author,
      content: newComment.content,
      date: new Date().toISOString().split('T')[0],
      likes: 0
    };
    
    setComments(prev => [comment, ...prev]);
    setNewComment({ author: '', content: '' });
    setShowCommentForm(false);
    setIsSubmitting(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
          {t('comments.title')}
        </h3>
        <div className="flex items-center space-x-4">
          <span className="text-gray-400">
            <MessageCircle className="inline-block w-5 h-5 mr-2" />
            {comments.length} {t('comments.count')}
          </span>
          <button
            onClick={() => setShowCommentForm(true)}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            {t('comments.addComment')}
          </button>
        </div>
      </div>

      {showCommentForm && (
        <div className="bg-gray-800/50 rounded-xl p-6 mb-8">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="author" className="block text-sm font-medium text-gray-300 mb-1">
                {t('comments.name')}
              </label>
              <input
                type="text"
                id="author"
                value={newComment.author}
                onChange={(e) => setNewComment(prev => ({ ...prev, author: e.target.value }))}
                className="w-full px-4 py-2 bg-gray-700/50 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder={t('comments.namePlaceholder')}
                required
              />
            </div>
            <div>
              <label htmlFor="content" className="block text-sm font-medium text-gray-300 mb-1">
                {t('comments.message')}
              </label>
              <textarea
                id="content"
                value={newComment.content}
                onChange={(e) => setNewComment(prev => ({ ...prev, content: e.target.value }))}
                className="w-full px-4 py-2 bg-gray-700/50 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none h-24"
                placeholder={t('comments.messagePlaceholder')}
                required
              />
            </div>
            <div className="flex justify-end space-x-3">
              <button
                type="button"
                onClick={() => setShowCommentForm(false)}
                className="px-4 py-2 text-gray-400 hover:text-gray-300 transition-colors"
              >
                {t('comments.cancel')}
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center space-x-2"
              >
                <span>{isSubmitting ? t('comments.posting') : t('comments.post')}</span>
                <Send className="w-4 h-4" />
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="space-y-6">
        {comments.map((comment) => (
          <div key={comment.id} className="bg-gray-800/50 rounded-xl p-6 hover:bg-gray-800/70 transition-colors">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h4 className="font-semibold text-lg text-blue-400">{comment.author}</h4>
                <div className="flex items-center text-gray-400 text-sm mt-1">
                  <Calendar className="w-4 h-4 mr-2" />
                  {new Date(comment.date).toLocaleDateString()}
                </div>
              </div>
              <button className="flex items-center space-x-2 text-gray-400 hover:text-blue-400 transition-colors">
                <ThumbsUp className="w-4 h-4" />
                <span>{comment.likes}</span>
              </button>
            </div>
            <p className="text-gray-300">{comment.content}</p>
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <button className="px-6 py-3 bg-blue-500/20 text-blue-400 rounded-lg hover:bg-blue-500/30 transition-colors">
          {t('comments.loadMore')}
        </button>
      </div>
    </div>
  );
};

export default CommentSection;