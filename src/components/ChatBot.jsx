import { useState } from 'react';
import { Button, Form, InputGroup, ListGroup, Spinner, Card } from 'react-bootstrap';
import { GoogleGenAI } from '@google/genai';


const ai = new GoogleGenAI({
  apiKey: import.meta.env.VITE_GEMINI_API_KEY
});


const PRESETS = {
  'How do I sell my license?':
    'Click “Get a Quote” in home, add your details, and we’ll send you a valuation.',
  'What payout methods do you offer?':
    'We currently support bank transfer and PayPal—paid out within 24 hours.'
};

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: 'bot', text: '👋 Hi there! Ask me anything about SoftSell.' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    const question = input.trim();
    if (!question) return;
    setMessages(m => [...m, { from: 'user', text: question }]);
    setInput('');

    if (PRESETS[question]) {
      setMessages(m => [...m, { from: 'bot', text: PRESETS[question] }]);
      return;
    }

    setLoading(true);
    try {
      const res = await ai.models.generateContent({
        model: 'gemini-2.0-flash',
        contents: question
      });
      let reply = res.text.trim().replace(/[*_]/g, '');
      if (!reply) reply = "Sorry, I couldn't think of a response.";
      setMessages(m => [...m, { from: 'bot', text: reply }]);
    } catch (err) {
      console.error(err);
      setMessages(m => [
        ...m,
        { from: 'bot', text: '😞 Something went wrong. Please try again.' }
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      
      <Button
        variant="info"
        onClick={() => setOpen(o => !o)}
        style={{
          position: 'fixed',
          bottom: '2rem',
          right: '2rem',
          borderRadius: '50%',
          width: '3.5rem',
          height: '3.5rem',
          zIndex: 1000
        }}
      className='fs-3 p-2' >
        🤖
      </Button>

      {/* Chat Window */}
      {open && (
        <Card
          style={{
            position: 'fixed',
            padding:'10px',
            bottom: '6rem',
            right: '2rem',
            width: '330px',
            height: '400px',
            display: 'flex',
            flexDirection: 'column',
            zIndex: 1000,
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
          }}
        >
          <Card.Header className="d-flex justify-content-between align-items-center">
            <span>Chat with SoftSell Bot</span>
            <Button
              variant="link"
              size="sm"
              onClick={() => setOpen(false)}
              style={{ textDecoration: 'none' }}
            >
              ✕
            </Button>
          </Card.Header>

          <Card.Body
            className="p-0 overflow-auto flex-grow-1"
            style={{ backgroundColor: '#f8f9fa' }}
          >
            <ListGroup variant="flush">
              {messages.map((m, i) => {
                const isUser = m.from === 'user';
                return (
                  <ListGroup.Item
                    key={i}
                    className="d-flex"
                    style={{
                      justifyContent: isUser ? 'flex-end' : 'flex-start',
                      border: 'none'
                    }}
                  >
                    <div
                      style={{
                        backgroundColor: isUser ? '#0d6efd' : '#e9ecef',
                        color: isUser ? 'white' : 'black',
                        borderRadius: '1rem',
                        padding: '0.5rem 0.7rem',
                        maxWidth: '80%',
                        wordBreak: 'break-word'
                      }}
                    >
                      {m.text}
                    </div>
                  </ListGroup.Item>
                );
              })}
            </ListGroup>
          </Card.Body>

          <Card.Footer className="p-0">
            <InputGroup>
              <Form.Control
                placeholder="Type a question..."
                value={input}
                onChange={e => setInput(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && sendMessage()}
              />
              <Button
                variant="success"
                onClick={sendMessage}
                disabled={loading}
              >
                {loading ? (
                  <Spinner animation="border" size="sm" />
                ) : (
                  'Send'
                )}
              </Button>
            </InputGroup>
          </Card.Footer>
        </Card>
      )}
    </>
  );
}
