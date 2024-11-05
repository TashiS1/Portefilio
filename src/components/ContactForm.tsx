import React, { useState } from 'react';
import { Send } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    if (formState.email && formState.message) {
      setStatus('success');
      setFormState({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    } else {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          value={formState.name}
          onChange={(e) => setFormState(prev => ({ ...prev, name: e.target.value }))}
          className="w-full px-4 py-2 bg-gray-800/50 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          placeholder="Your name"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          value={formState.email}
          onChange={(e) => setFormState(prev => ({ ...prev, email: e.target.value }))}
          className="w-full px-4 py-2 bg-gray-800/50 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
          placeholder="your@email.com"
          required
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2">
          Message
        </label>
        <textarea
          id="message"
          value={formState.message}
          onChange={(e) => setFormState(prev => ({ ...prev, message: e.target.value }))}
          className="w-full px-4 py-2 bg-gray-800/50 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none h-32"
          placeholder="Your message..."
          required
        />
      </div>
      <button
        type="submit"
        disabled={status === 'sending'}
        className={`w-full py-3 px-6 rounded-lg flex items-center justify-center space-x-2 
          ${status === 'sending' ? 'bg-gray-600' : 'bg-blue-600 hover:bg-blue-700'} 
          transition duration-300`}
      >
        <span>{status === 'sending' ? 'Sending...' : 'Send Message'}</span>
        <Send className="w-4 h-4" />
      </button>
      
      {status === 'success' && (
        <div className="text-green-400 text-center">Message sent successfully!</div>
      )}
      {status === 'error' && (
        <div className="text-red-400 text-center">Something went wrong. Please try again.</div>
      )}
    </form>
  );
};

export default ContactForm;