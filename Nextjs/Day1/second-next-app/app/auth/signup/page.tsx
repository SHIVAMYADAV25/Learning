"use client";

import React from "react";

const SignUpPage: React.FC = () => {
  return (
    <div className="auth-shell">
      <div className="auth-visual">
        <div className="auth-brand-pill">Atlas</div>
        <h1 className="auth-title">Create your workspace.</h1>
        <p className="auth-subtitle">
          Bring your team, tasks, and ideas into one calm, focused surface.
        </p>
        <div className="auth-metrics">
          <div>
            <span className="metric-label">Teams onboarded</span>
            <span className="metric-value">4.2k</span>
          </div>
          <div>
            <span className="metric-label">Countries</span>
            <span className="metric-value">36</span>
          </div>
        </div>
      </div>

      <div className="auth-panel">
        <h2 className="panel-title">Create account</h2>
        <p className="panel-subtitle">
          Set up your workspace in less than a minute.
        </p>

        <form
          className="auth-form auth-form--active"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="field-group">
            <label className="field-label" htmlFor="signup-name">
              Full name
            </label>
            <input
              id="signup-name"
              type="text"
              className="field-input"
              placeholder="Jordan Carter"
            />
          </div>

          <div className="field-group">
            <label className="field-label" htmlFor="signup-email">
              Work email
            </label>
            <input
              id="signup-email"
              type="email"
              className="field-input"
              placeholder="you@company.com"
            />
          </div>

          <div className="field-row">
            <div className="field-group">
              <label className="field-label" htmlFor="signup-password">
                Password
              </label>
              <input
                id="signup-password"
                type="password"
                className="field-input"
                placeholder="At least 8 characters"
              />
            </div>
            <div className="field-group">
              <label className="field-label" htmlFor="signup-role">
                Role
              </label>
              <select
                id="signup-role"
                className="field-input field-select"
                defaultValue=""
              >
                <option value="">Select role</option>
                <option>Developer</option>
                <option>Designer</option>
                <option>Product</option>
                <option>Other</option>
              </select>
            </div>
          </div>

          <label className="checkbox-row">
            <input type="checkbox" />
            <span>I agree to the Terms and Privacy.</span>
          </label>

          <button type="submit" className="primary-btn">
            Create workspace
          </button>
        </form>

        <p className="auth-footer">
          Already have an account? <a href="/signin">Sign in</a>.
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;
