"use client";

import React from "react";

const SignIn: React.FC = () => {
  return (
    <div className="auth-shell">
      <div className="auth-visual">
        <div className="auth-brand-pill">Atlas</div>
        <h1 className="auth-title">Welcome back.</h1>
        <p className="auth-subtitle">
          Pick up exactly where you left off. Your work, your people, your flow.
        </p>
        <div className="auth-metrics">
          <div>
            <span className="metric-label">Sessions today</span>
            <span className="metric-value">1.3k</span>
          </div>
          <div>
            <span className="metric-label">Avg. focus</span>
            <span className="metric-value">82%</span>
          </div>
        </div>
      </div>

      <div className="auth-panel">
        <h2 className="panel-title">Sign in</h2>
        <p className="panel-subtitle">
          Use your work email to access your workspace.
        </p>

        <form
          className="auth-form auth-form--active"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="field-group">
            <label className="field-label" htmlFor="signin-email">
              Email
            </label>
            <input
              id="signin-email"
              type="email"
              className="field-input"
              placeholder="you@example.com"
            />
          </div>

          <div className="field-row">
            <div className="field-group">
              <label className="field-label" htmlFor="signin-password">
                Password
              </label>
              <input
                id="signin-password"
                type="password"
                className="field-input"
                placeholder="••••••••"
              />
            </div>
            <button type="button" className="field-link">
              Forgot?
            </button>
          </div>

          <button type="submit" className="primary-btn">
            Continue
          </button>

          <div className="divider">
            <span>or continue with</span>
          </div>

          <div className="social-row">
            <button type="button" className="social-btn">
              Google
            </button>
            <button type="button" className="social-btn">
              GitHub
            </button>
            <button type="button" className="social-btn">
              Apple
            </button>
          </div>
        </form>

        <p className="auth-footer">
          New here? <a href="/signup">Create an account</a>.
        </p>
      </div>
    </div>
  );
};

export default SignIn;
