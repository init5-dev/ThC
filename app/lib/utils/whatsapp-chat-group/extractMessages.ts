export const extractAuthorMessages = (text: string, author: string) => {
  const messages = text.split('\n').filter(line => line.includes(`${author}:`));
  return messages.map(line => {
    const [datetime, authorMessage] = line.split(' - ');
    const [date, time] = datetime.split(', ');
    const [author, message] = authorMessage.split(': ');
    return {
      author: author.trim(),
      date: new Date(date.split('/').reverse().join('-')).toISOString().split('T')[0], // formato YYYY-MM-DD
      time: time.trim(),
      message: message ? message.trim() : ''
    };
  });
};
