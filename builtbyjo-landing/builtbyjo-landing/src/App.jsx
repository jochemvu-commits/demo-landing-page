import React, { useState } from 'react';

// WhatsApp Demo Component (embedded)
const WhatsAppDemo = () => {
  const scenarios = [
    {
      id: 1,
      title: "Trial Booking",
      subtitle: "Inquiry → Booked",
      icon: "💰",
      messages: [
        { from: "customer", text: "Hi, I'm interested in joining. What are your membership prices?", time: "10:34 AM" },
        { from: "ai", text: "Hey! 👋 Thanks for reaching out to FitZone Studio.\n\nWe have a few membership options:\n\n• Drop-in class: £15\n• Monthly unlimited: £89/month\n• 10-class pack: £120 (valid 3 months)\n\nWe also offer a FREE trial class so you can experience the studio first. Would you like to book one?", time: "10:34 AM" },
        { from: "customer", text: "Yes, I'd like to try a class first", time: "10:35 AM" },
        { from: "ai", text: "Great choice! Let me get you booked in.\n\nWhat's your name?", time: "10:35 AM" },
        { from: "customer", text: "Sarah Mitchell", time: "10:35 AM" },
        { from: "ai", text: "Nice to meet you Sarah! 😊\n\nWe have availability this week:\n• Tomorrow (Wed) - 7am, 12pm, 6pm\n• Thursday - 7am, 9am, 6pm\n• Friday - 12pm, 5pm, 7pm\n\nWhich works best for you?", time: "10:35 AM" },
        { from: "customer", text: "Thursday 6pm", time: "10:36 AM" },
        { from: "ai", text: "Perfect! You're booked in for Thursday at 6pm. ✅\n\nArrive 10 mins early for a quick intro. See you Thursday Sarah!", time: "10:36 AM" },
      ]
    },
    {
      id: 2,
      title: "After Hours",
      subtitle: "11pm → Instant reply",
      icon: "🌙",
      messages: [
        { from: "customer", text: "Hey are you open tomorrow?", time: "11:23 PM" },
        { from: "ai", text: "Hi! 👋 Yes, we're open tomorrow!\n\nOur hours:\nMonday-Friday: 6am - 9pm\nSaturday-Sunday: 8am - 6pm\n\nWere you looking to book a class or just drop by?", time: "11:23 PM" },
        { from: "customer", text: "Oh wow fast reply! Yeah I want to check it out", time: "11:24 PM" },
        { from: "ai", text: "Haha we're here 24/7! 😊\n\nI'd recommend booking a free trial class. I can get you set up right now if you'd like?", time: "11:24 PM" },
        { from: "customer", text: "Yes please", time: "11:25 PM" },
        { from: "ai", text: "Awesome! What's your name?", time: "11:25 PM" },
      ]
    },
    {
      id: 3,
      title: "Smart Handoff",
      subtitle: "Complex → Human",
      icon: "🔄",
      messages: [
        { from: "customer", text: "Hi, I need to cancel my membership. I'm moving abroad.", time: "2:45 PM" },
        { from: "ai", text: "Hi there, thanks for letting us know.\n\nI'm sorry to hear you're leaving! For membership cancellations, I'll connect you with our team who can help process this.\n\nOne of our team will message you within 2 hours. If urgent, call us at 020-7123-4567.\n\nIs there anything else I can help with?", time: "2:45 PM" },
        { from: "customer", text: "No that's all, thanks", time: "2:46 PM" },
        { from: "ai", text: "No problem. Our team will be in touch shortly. Best of luck with your move! 🌍", time: "2:46 PM" },
        { from: "system", text: "⚠️ Human handoff requested\n\nTopic: Membership cancellation\nPriority: Normal\n\nPlease respond within 2 hours.", time: "2:46 PM" },
      ]
    }
  ];

  const [activeScenario, setActiveScenario] = useState(0);
  const [visibleMessages, setVisibleMessages] = useState(scenarios[0].messages.length);
  
  const currentScenario = scenarios[activeScenario];
  const displayedMessages = currentScenario.messages.slice(0, visibleMessages);

  const switchScenario = (index) => {
    setActiveScenario(index);
    setVisibleMessages(scenarios[index].messages.length);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
      {/* Scenario Tabs */}
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', justifyContent: 'center' }}>
        {scenarios.map((scenario, index) => (
          <button
            key={scenario.id}
            onClick={() => switchScenario(index)}
            style={{
              padding: '8px 16px',
              borderRadius: '20px',
              border: activeScenario === index ? '2px solid #25D366' : '2px solid rgba(255,255,255,0.1)',
              background: activeScenario === index ? 'rgba(37, 211, 102, 0.15)' : 'rgba(255,255,255,0.03)',
              color: activeScenario === index ? '#25D366' : '#888',
              cursor: 'pointer',
              fontSize: '13px',
              fontWeight: '500',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              transition: 'all 0.2s ease'
            }}
          >
            <span>{scenario.icon}</span>
            <span>{scenario.title}</span>
          </button>
        ))}
      </div>

      {/* Phone */}
      <div style={{
        width: '320px',
        background: '#000',
        borderRadius: '36px',
        padding: '10px',
        boxShadow: '0 25px 80px rgba(0,0,0,0.4)'
      }}>
        <div style={{
          width: '100%',
          background: '#0b141a',
          borderRadius: '28px',
          overflow: 'hidden'
        }}>
          {/* Header */}
          <div style={{
            background: '#1f2c34',
            padding: '12px 14px',
            display: 'flex',
            alignItems: 'center',
            gap: '10px'
          }}>
            <div style={{
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #25D366, #128C7E)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '14px',
              fontWeight: '700',
              color: 'white'
            }}>FZ</div>
            <div>
              <div style={{ color: '#e9edef', fontWeight: '600', fontSize: '14px' }}>FitZone Studio</div>
              <div style={{ color: '#25D366', fontSize: '11px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                <span style={{ width: '6px', height: '6px', background: '#25D366', borderRadius: '50%' }}></span>
                AI Online
              </div>
            </div>
          </div>

          {/* Messages */}
          <div style={{
            height: '340px',
            overflowY: 'auto',
            padding: '12px',
            display: 'flex',
            flexDirection: 'column',
            gap: '6px',
            background: '#0b141a'
          }}>
            {displayedMessages.map((msg, index) => (
              <div key={index} style={{
                display: 'flex',
                justifyContent: msg.from === 'customer' ? 'flex-end' : 'flex-start'
              }}>
                <div style={{
                  maxWidth: msg.from === 'system' ? '95%' : '82%',
                  padding: '7px 10px',
                  borderRadius: msg.from === 'customer' ? '10px 10px 3px 10px' : msg.from === 'system' ? '10px' : '10px 10px 10px 3px',
                  background: msg.from === 'customer' ? '#005c4b' : msg.from === 'system' ? 'rgba(139, 92, 246, 0.15)' : '#1f2c34',
                  border: msg.from === 'system' ? '1px solid rgba(139, 92, 246, 0.3)' : 'none',
                  color: '#e9edef',
                  fontSize: '13px',
                  lineHeight: '1.35',
                  whiteSpace: 'pre-wrap'
                }}>
                  {msg.from === 'system' && (
                    <div style={{ fontSize: '9px', color: '#a78bfa', fontWeight: '600', marginBottom: '4px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                      📋 Owner Notification
                    </div>
                  )}
                  {msg.text}
                  <div style={{ fontSize: '10px', color: '#8696a0', textAlign: 'right', marginTop: '3px' }}>
                    {msg.time} {msg.from === 'customer' && <span style={{ color: '#53bdeb' }}>✓✓</span>}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div style={{
            padding: '8px 10px',
            background: '#1f2c34',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            <div style={{
              flex: 1,
              background: '#2a3942',
              borderRadius: '18px',
              padding: '8px 14px',
              color: '#8696a0',
              fontSize: '13px'
            }}>Type a message</div>
            <span style={{ fontSize: '18px' }}>🎤</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main Landing Page
export default function LandingPage() {
  const [email, setEmail] = useState('');

  return (
    <div style={{
      minHeight: '100vh',
      background: '#050505',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      color: '#fff',
      overflowX: 'hidden'
    }}>
      
      {/* Nav */}
      <nav style={{
        padding: '20px 40px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <div style={{
          fontSize: '20px',
          fontWeight: '700',
          color: '#fff',
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}>
          <span style={{
            background: 'linear-gradient(135deg, #25D366, #128C7E)',
            padding: '6px 10px',
            borderRadius: '8px',
            fontSize: '16px'
          }}>⚡</span>
          builtbyjo
        </div>
        <a 
          href="#contact"
          style={{
            padding: '10px 24px',
            background: 'transparent',
            border: '1px solid rgba(255,255,255,0.2)',
            borderRadius: '8px',
            color: '#fff',
            textDecoration: 'none',
            fontSize: '14px',
            fontWeight: '500',
            transition: 'all 0.2s'
          }}
        >
          Get Started
        </a>
      </nav>

      {/* Hero */}
      <section style={{
        padding: '80px 40px 60px',
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '60px',
        alignItems: 'center'
      }}>
        <div>
          <div style={{
            display: 'inline-block',
            padding: '6px 14px',
            background: 'rgba(37, 211, 102, 0.1)',
            border: '1px solid rgba(37, 211, 102, 0.3)',
            borderRadius: '20px',
            fontSize: '13px',
            color: '#25D366',
            marginBottom: '24px'
          }}>
            🤖 AI-Powered Customer Support
          </div>
          
          <h1 style={{
            fontSize: '52px',
            fontWeight: '700',
            lineHeight: '1.1',
            margin: '0 0 24px 0',
            letterSpacing: '-1px'
          }}>
            Never Miss a Customer Message
            <span style={{
              display: 'block',
              background: 'linear-gradient(135deg, #25D366, #00d4aa)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>Again.</span>
          </h1>
          
          <p style={{
            fontSize: '18px',
            color: '#888',
            lineHeight: '1.6',
            margin: '0 0 32px 0',
            maxWidth: '480px'
          }}>
            An AI agent that answers your WhatsApp 24/7. Handles inquiries, books appointments, answers FAQs. You wake up to new bookings, not missed messages.
          </p>

          <div style={{
            display: 'flex',
            gap: '16px',
            marginBottom: '48px'
          }}>
            <a 
              href="#contact"
              style={{
                padding: '16px 32px',
                background: 'linear-gradient(135deg, #25D366, #128C7E)',
                borderRadius: '10px',
                color: '#fff',
                textDecoration: 'none',
                fontSize: '16px',
                fontWeight: '600',
                boxShadow: '0 4px 20px rgba(37, 211, 102, 0.3)',
                transition: 'all 0.2s'
              }}
            >
              Book a Demo →
            </a>
            <a 
              href="#how-it-works"
              style={{
                padding: '16px 32px',
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '10px',
                color: '#fff',
                textDecoration: 'none',
                fontSize: '16px',
                fontWeight: '500',
                transition: 'all 0.2s'
              }}
            >
              See How It Works
            </a>
          </div>

          {/* Social Proof */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '24px',
            color: '#666',
            fontSize: '14px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ color: '#25D366', fontSize: '18px' }}>✓</span>
              Setup in 48 hours
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ color: '#25D366', fontSize: '18px' }}>✓</span>
              No tech skills needed
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ color: '#25D366', fontSize: '18px' }}>✓</span>
              Cancel anytime
            </div>
          </div>
        </div>

        {/* Demo */}
        <div>
          <WhatsAppDemo />
        </div>
      </section>

      {/* Problem Section */}
      <section style={{
        padding: '80px 40px',
        background: 'linear-gradient(180deg, transparent 0%, rgba(37, 211, 102, 0.03) 100%)'
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{
            fontSize: '36px',
            fontWeight: '700',
            marginBottom: '24px'
          }}>
            Sound Familiar?
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '24px',
            marginTop: '48px'
          }}>
            {[
              { icon: '😫', title: 'Missed Messages', desc: 'Customer messaged at 9pm, you replied at 9am. They already booked with your competitor.' },
              { icon: '🔄', title: 'Same Questions', desc: '"What are your hours?" "How much is a class?" You answer the same thing 20 times a day.' },
              { icon: '📱', title: 'Always On-Call', desc: "Can't enjoy dinner without checking WhatsApp. Your business owns you, not the other way around." }
            ].map((item, i) => (
              <div key={i} style={{
                padding: '32px 24px',
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(255,255,255,0.06)',
                borderRadius: '16px',
                textAlign: 'left'
              }}>
                <div style={{ fontSize: '40px', marginBottom: '16px' }}>{item.icon}</div>
                <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '8px' }}>{item.title}</h3>
                <p style={{ fontSize: '14px', color: '#888', lineHeight: '1.5', margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" style={{
        padding: '80px 40px',
        maxWidth: '1000px',
        margin: '0 auto'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 style={{ fontSize: '36px', fontWeight: '700', marginBottom: '16px' }}>
            How It Works
          </h2>
          <p style={{ fontSize: '18px', color: '#888' }}>
            Live in 48 hours. No tech skills required.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '24px'
        }}>
          {[
            { step: '01', title: 'Quick Call', desc: 'We learn about your business, services, and how you want to handle inquiries.' },
            { step: '02', title: 'We Build It', desc: 'We train your AI on your business. Prices, hours, services, FAQs - everything.' },
            { step: '03', title: 'You Review', desc: 'Test it yourself. Make sure it sounds like you and handles things the way you want.' },
            { step: '04', title: 'Go Live', desc: 'Connect to your WhatsApp Business. Start getting bookings while you sleep.' }
          ].map((item, i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              <div style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, rgba(37, 211, 102, 0.2), rgba(37, 211, 102, 0.05))',
                border: '1px solid rgba(37, 211, 102, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px',
                fontSize: '20px',
                fontWeight: '700',
                color: '#25D366'
              }}>
                {item.step}
              </div>
              <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '8px' }}>{item.title}</h3>
              <p style={{ fontSize: '14px', color: '#888', lineHeight: '1.5', margin: 0 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section style={{
        padding: '80px 40px',
        background: 'rgba(255,255,255,0.01)'
      }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{ fontSize: '36px', fontWeight: '700', marginBottom: '16px' }}>
              What Your AI Agent Does
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '20px'
          }}>
            {[
              { icon: '💬', title: 'Answers Instantly', desc: 'Responds in seconds, 24/7. No more lost customers at 11pm.' },
              { icon: '📅', title: 'Books Appointments', desc: 'Collects details, checks availability, confirms the booking.' },
              { icon: '❓', title: 'Handles FAQs', desc: 'Prices, hours, location, services - trained on YOUR business.' },
              { icon: '🔔', title: 'Smart Handoffs', desc: 'Complex issues get flagged to you with full context.' },
              { icon: '🗣️', title: 'Sounds Like You', desc: 'Not robotic. Friendly, professional, on-brand.' },
              { icon: '📊', title: 'Daily Summary', desc: 'See all conversations, bookings, and flagged items.' }
            ].map((item, i) => (
              <div key={i} style={{
                padding: '28px',
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(255,255,255,0.06)',
                borderRadius: '12px',
                display: 'flex',
                gap: '16px',
                alignItems: 'flex-start'
              }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  background: 'rgba(37, 211, 102, 0.1)',
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '24px',
                  flexShrink: 0
                }}>
                  {item.icon}
                </div>
                <div>
                  <h3 style={{ fontSize: '17px', fontWeight: '600', marginBottom: '4px', margin: '0 0 4px 0' }}>{item.title}</h3>
                  <p style={{ fontSize: '14px', color: '#888', lineHeight: '1.5', margin: 0 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section style={{
        padding: '80px 40px',
        maxWidth: '800px',
        margin: '0 auto'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <h2 style={{ fontSize: '36px', fontWeight: '700', marginBottom: '16px' }}>
            Simple Pricing
          </h2>
          <p style={{ fontSize: '18px', color: '#888' }}>
            One plan. Everything included. No surprises.
          </p>
        </div>

        <div style={{
          padding: '48px',
          background: 'linear-gradient(135deg, rgba(37, 211, 102, 0.08), rgba(37, 211, 102, 0.02))',
          border: '1px solid rgba(37, 211, 102, 0.2)',
          borderRadius: '20px',
          textAlign: 'center'
        }}>
          <div style={{
            fontSize: '14px',
            color: '#25D366',
            fontWeight: '600',
            marginBottom: '8px',
            textTransform: 'uppercase',
            letterSpacing: '1px'
          }}>
            All-Inclusive
          </div>
          
          <div style={{
            fontSize: '64px',
            fontWeight: '700',
            marginBottom: '8px'
          }}>
            €799<span style={{ fontSize: '24px', color: '#888', fontWeight: '400' }}>/month</span>
          </div>
          
          <div style={{
            fontSize: '16px',
            color: '#888',
            marginBottom: '32px'
          }}>
            + €500 one-time setup fee
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '16px',
            textAlign: 'left',
            marginBottom: '32px'
          }}>
            {[
              '24/7 AI WhatsApp agent',
              'Unlimited conversations',
              'Appointment booking',
              'Custom FAQ training',
              'Smart human handoffs',
              'Daily summary reports',
              'WhatsApp Business setup',
              '48-hour delivery'
            ].map((item, i) => (
              <div key={i} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                fontSize: '15px',
                color: '#ccc'
              }}>
                <span style={{ color: '#25D366' }}>✓</span>
                {item}
              </div>
            ))}
          </div>

          <a 
            href="#contact"
            style={{
              display: 'inline-block',
              padding: '18px 48px',
              background: 'linear-gradient(135deg, #25D366, #128C7E)',
              borderRadius: '10px',
              color: '#fff',
              textDecoration: 'none',
              fontSize: '17px',
              fontWeight: '600',
              boxShadow: '0 4px 20px rgba(37, 211, 102, 0.3)'
            }}
          >
            Get Started Today →
          </a>

          <div style={{
            marginTop: '20px',
            fontSize: '14px',
            color: '#666'
          }}>
            Cancel anytime. No long-term contracts.
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{
        padding: '80px 40px',
        background: 'rgba(255,255,255,0.01)'
      }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '36px', fontWeight: '700', marginBottom: '48px', textAlign: 'center' }}>
            Questions?
          </h2>

          {[
            { q: 'What if the AI gets something wrong?', a: "It's trained specifically on YOUR business, so mistakes are rare. But when it's unsure, it hands off to you with full context. You're always in control." },
            { q: 'Do I need WhatsApp Business?', a: "Yes, but we'll help you set it up if you don't have it. It's free and takes 10 minutes." },
            { q: 'Can it handle multiple languages?', a: 'Yes! We can train it to respond in any language your customers speak.' },
            { q: 'What happens if I want to cancel?', a: 'Cancel anytime with 30 days notice. No penalties, no drama. We'll even help you transition.' },
            { q: 'How is this different from a chatbot?', a: "Traditional chatbots follow scripts and feel robotic. Our AI understands context, handles complex requests, and sounds human. It's like hiring a great receptionist that works 24/7." }
          ].map((item, i) => (
            <div key={i} style={{
              padding: '24px 0',
              borderBottom: '1px solid rgba(255,255,255,0.06)'
            }}>
              <h3 style={{ fontSize: '17px', fontWeight: '600', marginBottom: '12px', margin: '0 0 12px 0' }}>{item.q}</h3>
              <p style={{ fontSize: '15px', color: '#888', lineHeight: '1.6', margin: 0 }}>{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section id="contact" style={{
        padding: '100px 40px',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2 style={{
            fontSize: '42px',
            fontWeight: '700',
            marginBottom: '20px',
            lineHeight: '1.2'
          }}>
            Ready to Stop Missing Customers?
          </h2>
          
          <p style={{
            fontSize: '18px',
            color: '#888',
            marginBottom: '40px'
          }}>
            Book a 15-minute call. We'll show you exactly how it works for your business.
          </p>

          <div style={{
            display: 'flex',
            gap: '12px',
            justifyContent: 'center',
            maxWidth: '450px',
            margin: '0 auto'
          }}>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                flex: 1,
                padding: '16px 20px',
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '10px',
                color: '#fff',
                fontSize: '16px',
                outline: 'none'
              }}
            />
            <button style={{
              padding: '16px 32px',
              background: 'linear-gradient(135deg, #25D366, #128C7E)',
              border: 'none',
              borderRadius: '10px',
              color: '#fff',
              fontSize: '16px',
              fontWeight: '600',
              cursor: 'pointer',
              boxShadow: '0 4px 20px rgba(37, 211, 102, 0.3)'
            }}>
              Book Demo
            </button>
          </div>

          <p style={{
            marginTop: '16px',
            fontSize: '14px',
            color: '#555'
          }}>
            Free 15-min call. No pressure. No spam.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        padding: '40px',
        borderTop: '1px solid rgba(255,255,255,0.05)',
        textAlign: 'center'
      }}>
        <div style={{
          fontSize: '16px',
          fontWeight: '600',
          marginBottom: '16px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px'
        }}>
          <span style={{
            background: 'linear-gradient(135deg, #25D366, #128C7E)',
            padding: '4px 8px',
            borderRadius: '6px',
            fontSize: '12px'
          }}>⚡</span>
          builtbyjo
        </div>
        <p style={{ fontSize: '14px', color: '#555', margin: 0 }}>
          © 2026 builtbyjo. AI automation for service businesses.
        </p>
      </footer>

      {/* Responsive styles */}
      <style>{`
        @media (max-width: 900px) {
          section > div[style*="grid-template-columns: 1fr 1fr"] {
            grid-template-columns: 1fr !important;
          }
          h1 {
            font-size: 36px !important;
          }
        }
        input::placeholder {
          color: #666;
        }
        a:hover, button:hover {
          transform: translateY(-2px);
          transition: transform 0.2s;
        }
      `}</style>
    </div>
  );
}
