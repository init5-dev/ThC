import { useState } from 'react';

const PublishNote = () => {
  const [post, setPost] = useState('');

  const handlePublish = () => {
    alert('Publicado: ' + post);
  };

  const handleWhatsAppShare = () => {
    const url = `https://wa.me/?text=${encodeURIComponent(post)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 p-4">
      <div className="w-full max-w-lg">
        <textarea
          className="textarea textarea-bordered w-full h-48 p-4 text-lg"
          placeholder="¿En qué estás pensando?"
          value={post}
          onChange={(e) => setPost(e.target.value)}
        ></textarea>
      </div>

      <div className="fixed bottom-4 left-4 flex gap-2">
        <button
          onClick={handlePublish}
          className="btn btn-primary btn-circle shadow-lg"
        >
          📤
        </button>

        <button
          onClick={handleWhatsAppShare}
          className="btn btn-success btn-circle shadow-lg"
        >
          🟢
        </button>
      </div>
    </div>
  );
};

export default PublishNote;
