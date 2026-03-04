import React, { useState } from 'react';
import './Register.css';

const Register = () => {
  const [formData, setFormData] = useState({
    email: '',
    full_name: '',
    college: '',
    department: '',
    level: '',
    interest: '',
    heard_from: ''
  });
  
  const [status, setStatus] = useState('idle'); // idle, submitting, success, error
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      let data;
      const contentType = response.headers.get("content-type");
      if (contentType && contentType.includes("application/json")) {
        data = await response.json();
      } else {
        const text = await response.text();
        console.error("Server returned non-JSON response:", text);
        throw new Error(`Unexpected response from server (${response.status}). Are you running on the right port?`);
      }

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong. Please try again.');
      }

      setStatus('success');
    } catch (error) {
      console.error('Registration error:', error);
      setStatus('error');
      setErrorMessage(error.message);
    }
  };

  if (status === 'success') {
    return (
      <div className="register-page">
        <div className="ambient-glow-bg"></div>
        <div className="ambient-noise"></div>
        <div className="register-container success-state">
          <div className="success-icon">✓</div>
          <h2>Registration Successful!</h2>
          <p>Thank you for registering for Campus to Career 2.0.</p>
          <p>We've received your details and can't wait to see you there!</p>
          <a href="/" className="btn-primary back-home-btn">Back to Home</a>
        </div>
      </div>
    );
  }

  return (
    <div className="register-page">
      <div className="ambient-glow-bg"></div>
      <div className="ambient-noise"></div>
      
      <div className="register-container">
        <div className="register-header">
          <h2>Register for Event</h2>
          <p>Campus to Career 2.0</p>
        </div>

        {status === 'error' && (
          <div className="error-message">
            {errorMessage}
          </div>
        )}

        <form onSubmit={handleSubmit} className="register-form">
          <div className="form-group">
            <label>Email <span className="required">*</span></label>
            <input 
              type="email" 
              name="email" 
              placeholder="Your email" 
              required 
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>What is your full name? <span className="required">*</span></label>
            <input 
              type="text" 
              name="full_name" 
              placeholder="Your answer" 
              required 
              value={formData.full_name}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Which college are you in? <span className="required">*</span></label>
            <div className="radio-group">
              {['SMS', 'Engineering', 'Pharmacy', 'Law', 'MHS', 'Sciences'].map(college => (
                <label key={college} className="radio-label">
                  <input 
                    type="radio" 
                    name="college" 
                    value={college} 
                    required 
                    checked={formData.college === college}
                    onChange={handleChange}
                  />
                  <span className="radio-custom"></span>
                  {college}
                </label>
              ))}
            </div>
          </div>

          <div className="form-group">
            <label>What Department are you in? <span className="required">*</span></label>
            <input 
              type="text" 
              name="department" 
              placeholder="Your answer" 
              required 
              value={formData.department}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>What level are you in? <span className="required">*</span></label>
            <div className="radio-group">
              {['100', '200', '300', '400', '500'].map(level => (
                <label key={level} className="radio-label">
                  <input 
                    type="radio" 
                    name="level" 
                    value={level} 
                    required 
                    checked={formData.level === level}
                    onChange={handleChange}
                  />
                  <span className="radio-custom"></span>
                  {level}
                </label>
              ))}
            </div>
          </div>

          <div className="form-group">
            <label>What caught your interest? <span className="required">*</span></label>
            <div className="radio-group">
              {[
                'Global Scholarships', 
                'CV, interview, cover letter', 
                'LinkedIn', 
                'Founders Panel', 
                'Content Creators panel', 
                'Giveaway'
              ].map(interest => (
                <label key={interest} className="radio-label">
                  <input 
                    type="radio" 
                    name="interest" 
                    value={interest} 
                    required 
                    checked={formData.interest === interest}
                    onChange={handleChange}
                  />
                  <span className="radio-custom"></span>
                  {interest}
                </label>
              ))}
            </div>
          </div>

          <div className="form-group">
            <label>How did you hear about the event? <span className="required">*</span></label>
            <div className="radio-group">
              {[
                'Billboard', 
                'Group chat', 
                'AESA', 
                'COMSSA', 
                'ASVA', 
                'SRC', 
                'SAMSSA', 
                'DevMe'
              ].map(source => (
                <label key={source} className="radio-label">
                  <input 
                    type="radio" 
                    name="heard_from" 
                    value={source} 
                    required 
                    checked={formData.heard_from === source}
                    onChange={handleChange}
                  />
                  <span className="radio-custom"></span>
                  {source}
                </label>
              ))}
            </div>
          </div>

          <div className="form-actions">
            <button 
              type="submit" 
              className="btn-primary submit-btn" 
              disabled={status === 'submitting'}
            >
              {status === 'submitting' ? 'Submitting...' : 'Submit'}
            </button>
            <button 
              type="button" 
              className="clear-btn"
              onClick={() => setFormData({
                email: '', full_name: '', college: '', department: '', 
                level: '', interest: '', heard_from: ''
              })}
            >
              Clear form
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
