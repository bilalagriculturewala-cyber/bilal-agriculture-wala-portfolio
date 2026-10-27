import React, { useState } from 'react';
import { Mail, Linkedin, Facebook, Send, CheckCircle2, AlertCircle, MessageCircle, Edit2, ArrowUpRight } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

export const Contact: React.FC = () => {
  const { data, updateSocial, isEditMode } = usePortfolio();

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [editingSocial, setEditingSocial] = useState(false);
  const [socialInputs, setSocialInputs] = useState({
    linkedIn: data.social.linkedIn,
    facebook: data.social.facebook,
    whatsApp: data.social.whatsApp,
  });

  const validate = () => {
    const errors: Record<string, string> = {};
    if (!formData.name.trim()) errors.name = 'Please provide your name.';
    if (!formData.email.trim()) {
      errors.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please provide a valid email address.';
    }
    if (!formData.subject.trim()) errors.subject = 'Please enter a subject.';
    if (!formData.message.trim()) errors.message = 'Please write a message.';
    return errors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors = validate();
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      // Direct transparent client state
      setFormSubmitted(true);
    }
  };

  const handleSendDirectEmail = () => {
    const mailtoSubject = encodeURIComponent(`[Portfolio Inquiry] ${formData.subject}`);
    const mailtoBody = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${data.social.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
  };

  const handleSaveSocial = () => {
    updateSocial(socialInputs);
    setEditingSocial(false);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-white border-b border-[#174D38]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Left Column: Direct Info & Social Connect */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="text-[10px] sm:text-[11px] font-semibold tracking-widest uppercase text-[#B59A63] flex items-center gap-1.5 mb-2">
                <span>✦</span>
                <span>Get In Touch</span>
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#174D38] font-display mb-3 sm:mb-4">
                Let’s Connect & Collaborate
              </h2>
              <p className="text-sm sm:text-base text-[#202923]/70 leading-relaxed mb-6 sm:mb-8">
                I welcome conversations with educational institutes, agriculture researchers, practical farmers, and technology mentors interested in building useful knowledge.
              </p>

              {/* Direct Email Card */}
              <div className="p-5 sm:p-6 rounded-2xl bg-[#F8F7F2] border border-[#174D38]/15 mb-6 shadow-2xs">
                <span className="block text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#B59A63] mb-1">
                  Direct Email Address
                </span>
                <a
                  href={`mailto:${data.social.email}`}
                  className="text-base sm:text-lg font-bold text-[#174D38] hover:text-[#0D3022] hover:underline flex items-center gap-2 break-all min-h-[44px]"
                >
                  <Mail className="w-4 h-4 shrink-0 text-[#B59A63]" />
                  <span>{data.social.email}</span>
                </a>
                <p className="text-xs text-[#202923]/60 mt-1">
                  Click to open your mail client with a direct message draft.
                </p>
              </div>

              {/* Social Profiles & Optional WhatsApp */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#202923]/70">
                    Online Channels
                  </span>
                  {(isEditMode || !editingSocial) && (
                    <button
                      onClick={() => setEditingSocial(!editingSocial)}
                      className="text-xs text-[#174D38] hover:underline flex items-center gap-1 font-semibold min-h-[40px] px-2"
                    >
                      <Edit2 className="w-3.5 h-3.5" />
                      <span>{editingSocial ? 'Close' : 'Edit Links'}</span>
                    </button>
                  )}
                </div>

                {editingSocial ? (
                  <div className="p-4 sm:p-5 rounded-xl bg-[#F8F7F2] border border-[#174D38]/20 space-y-3 text-xs">
                    <div>
                      <label className="block font-semibold mb-1 text-[#202923]">LinkedIn Profile URL</label>
                      <input
                        type="url"
                        value={socialInputs.linkedIn}
                        onChange={(e) => setSocialInputs({ ...socialInputs, linkedIn: e.target.value })}
                        className="w-full text-base sm:text-xs p-2.5 sm:p-2 border rounded-lg bg-white border-[#174D38]/20"
                        placeholder="https://linkedin.com/in/..."
                      />
                    </div>
                    <div>
                      <label className="block font-semibold mb-1 text-[#202923]">Facebook Profile URL</label>
                      <input
                        type="url"
                        value={socialInputs.facebook}
                        onChange={(e) => setSocialInputs({ ...socialInputs, facebook: e.target.value })}
                        className="w-full text-base sm:text-xs p-2.5 sm:p-2 border rounded-lg bg-white border-[#174D38]/20"
                        placeholder="https://facebook.com/..."
                      />
                    </div>
                    <div>
                      <label className="block font-semibold mb-1 text-[#202923]">
                        WhatsApp Number (Optional, only shown if provided)
                      </label>
                      <input
                        type="tel"
                        value={socialInputs.whatsApp}
                        onChange={(e) => setSocialInputs({ ...socialInputs, whatsApp: e.target.value })}
                        className="w-full text-base sm:text-xs p-2.5 sm:p-2 border rounded-lg bg-white border-[#174D38]/20"
                        placeholder="e.g. +923001234567"
                      />
                    </div>
                    <div className="flex flex-wrap gap-2 pt-1">
                      <button
                        onClick={handleSaveSocial}
                        className="px-4 py-2 bg-[#174D38] text-white rounded-lg text-xs font-semibold min-h-[42px]"
                      >
                        Save Profiles
                      </button>
                      <button
                        onClick={() => setEditingSocial(false)}
                        className="px-4 py-2 bg-gray-200 text-[#202923] rounded-lg text-xs font-medium min-h-[42px]"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col gap-2.5">
                    {/* LinkedIn */}
                    {data.social.linkedIn && (
                      <a
                        href={data.social.linkedIn}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center justify-between p-3.5 rounded-xl border border-[#174D38]/15 hover:border-[#174D38] hover:bg-[#F8F7F2] active:bg-[#E4EAE0]/40 transition-colors text-xs font-semibold text-[#202923] min-h-[48px]"
                      >
                        <span className="flex items-center gap-2.5">
                          <Linkedin className="w-4 h-4 text-[#0077b5]" />
                          <span>LinkedIn Profile</span>
                        </span>
                        <span className="text-xs text-[#174D38] flex items-center gap-0.5">
                          <span>Visit</span>
                          <ArrowUpRight className="w-3.5 h-3.5 text-[#B59A63]" />
                        </span>
                      </a>
                    )}

                    {/* Facebook */}
                    {data.social.facebook && (
                      <a
                        href={data.social.facebook}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center justify-between p-3.5 rounded-xl border border-[#174D38]/15 hover:border-[#174D38] hover:bg-[#F8F7F2] active:bg-[#E4EAE0]/40 transition-colors text-xs font-semibold text-[#202923] min-h-[48px]"
                      >
                        <span className="flex items-center gap-2.5">
                          <Facebook className="w-4 h-4 text-[#1877f2]" />
                          <span>Facebook Profile</span>
                        </span>
                        <span className="text-xs text-[#174D38] flex items-center gap-0.5">
                          <span>Visit</span>
                          <ArrowUpRight className="w-3.5 h-3.5 text-[#B59A63]" />
                        </span>
                      </a>
                    )}

                    {/* WhatsApp */}
                    {data.social.whatsApp ? (
                      <a
                        href={`https://wa.me/${data.social.whatsApp.replace(/[^0-9]/g, '')}`}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center justify-between p-3.5 rounded-xl border border-emerald-500/30 bg-emerald-50/70 hover:bg-emerald-100/80 active:bg-emerald-200/80 transition-colors text-xs font-semibold text-emerald-950 min-h-[48px]"
                      >
                        <span className="flex items-center gap-2.5">
                          <MessageCircle className="w-4 h-4 text-emerald-600" />
                          <span>Chat on WhatsApp</span>
                        </span>
                        <span className="text-xs text-emerald-700 flex items-center gap-0.5">
                          <span>Direct Chat</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </span>
                      </a>
                    ) : (
                      <div className="p-3.5 rounded-xl border border-dashed border-[#174D38]/20 text-[11px] text-[#202923]/60 flex items-center justify-between min-h-[44px]">
                        <span>WhatsApp button hidden until number is configured.</span>
                        <button
                          onClick={() => setEditingSocial(true)}
                          className="text-[#174D38] font-bold hover:underline p-1 min-h-[40px] flex items-center"
                        >
                          Add Number
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Privacy notice */}
            <div className="mt-6 sm:mt-8 pt-4 border-t border-[#174D38]/10 text-xs text-[#202923]/60">
              <span>
                Personal contact details are protected. Telephone numbers are kept private unless explicitly added.
              </span>
            </div>
          </div>

          {/* Right Column: Contact Form with Honest Feedback */}
          <div className="lg:col-span-7 bg-[#F8F7F2] p-5 sm:p-9 rounded-2xl border border-[#174D38]/15 shadow-xs">
            <h3 className="text-xl sm:text-2xl font-bold text-[#174D38] tracking-tight mb-2 font-display">
              Send a Message
            </h3>
            <p className="text-xs sm:text-sm text-[#202923]/70 mb-5 sm:mb-6 leading-relaxed">
              Fill in your inquiry below. You can send it directly to <strong>{data.social.email}</strong>.
            </p>

            {formSubmitted ? (
              <div className="p-5 sm:p-7 rounded-xl bg-white border border-[#174D38]/20 space-y-4 animate-in fade-in">
                <div className="flex items-center gap-3 text-[#174D38]">
                  <CheckCircle2 className="w-6 h-6 text-[#174D38] shrink-0" />
                  <h4 className="text-base sm:text-lg font-bold text-[#202923] font-display">
                    Message Draft Prepared
                  </h4>
                </div>

                <div className="p-4 rounded-lg bg-[#F8F7F2] text-xs sm:text-sm text-[#202923]/80 leading-relaxed border border-[#174D38]/10">
                  <p className="font-semibold text-[#174D38] mb-1">
                    Direct Delivery Notice:
                  </p>
                  <p>
                    Because this client portfolio does not connect to an external server backend, your message has not been silently transmitted. To ensure your inquiry reaches Bilal immediately, please click the button below to send your pre-formatted note via your email app to <strong>{data.social.email}</strong>.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <button
                    onClick={handleSendDirectEmail}
                    className="w-full sm:w-auto px-5 py-3 rounded-lg bg-[#174D38] text-white text-xs font-semibold hover:bg-[#0D3022] active:bg-[#0A241A] flex items-center justify-center gap-2 shadow-xs min-h-[48px]"
                  >
                    <Mail className="w-4 h-4 text-[#B59A63]" />
                    <span>Open Email Client & Send</span>
                  </button>

                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="w-full sm:w-auto px-4 py-3 rounded-lg border border-[#174D38]/30 bg-white text-[#202923] text-xs font-semibold hover:bg-gray-50 min-h-[48px]"
                  >
                    Write Another Message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name Field with text-base on mobile */}
                  <div>
                    <label className="block text-xs font-bold text-[#202923] mb-1">
                      Your Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full px-3.5 py-3 text-base sm:text-sm rounded-lg border bg-white outline-hidden transition-colors ${
                        formErrors.name ? 'border-red-500' : 'border-[#174D38]/20 focus:border-[#174D38]'
                      }`}
                      placeholder="e.g. Tariq Ahmed"
                    />
                    {formErrors.name && (
                      <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1 font-medium">
                        <AlertCircle className="w-3 h-3" />
                        <span>{formErrors.name}</span>
                      </p>
                    )}
                  </div>

                  {/* Email Field with text-base on mobile */}
                  <div>
                    <label className="block text-xs font-bold text-[#202923] mb-1">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full px-3.5 py-3 text-base sm:text-sm rounded-lg border bg-white outline-hidden transition-colors ${
                        formErrors.email ? 'border-red-500' : 'border-[#174D38]/20 focus:border-[#174D38]'
                      }`}
                      placeholder="tariq@example.com"
                    />
                    {formErrors.email && (
                      <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1 font-medium">
                        <AlertCircle className="w-3 h-3" />
                        <span>{formErrors.email}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Subject Field with text-base on mobile */}
                <div>
                  <label className="block text-xs font-bold text-[#202923] mb-1">
                    Subject / Topic <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className={`w-full px-3.5 py-3 text-base sm:text-sm rounded-lg border bg-white outline-hidden transition-colors ${
                      formErrors.subject ? 'border-red-500' : 'border-[#174D38]/20 focus:border-[#174D38]'
                    }`}
                    placeholder="e.g. Agricultural Training / Collaboration Inquiry"
                  />
                  {formErrors.subject && (
                    <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1 font-medium">
                      <AlertCircle className="w-3 h-3" />
                      <span>{formErrors.subject}</span>
                    </p>
                  )}
                </div>

                {/* Message Field with text-base on mobile */}
                <div>
                  <label className="block text-xs font-bold text-[#202923] mb-1">
                    Your Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`w-full px-3.5 py-3 text-base sm:text-sm rounded-lg border bg-white outline-hidden transition-colors ${
                      formErrors.message ? 'border-red-500' : 'border-[#174D38]/20 focus:border-[#174D38]'
                    }`}
                    placeholder="Share your inquiry or practical opportunity..."
                  />
                  {formErrors.message && (
                    <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1 font-medium">
                      <AlertCircle className="w-3 h-3" />
                      <span>{formErrors.message}</span>
                    </p>
                  )}
                </div>

                {/* Submit button full-width on mobile */}
                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#174D38] hover:bg-[#0D3022] active:bg-[#0A241A] text-[#F8F7F2] text-sm font-semibold transition-all shadow-xs min-h-[48px]"
                  >
                    <Send className="w-4 h-4 text-[#B59A63]" />
                    <span>Submit Inquiry</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleSendDirectEmail}
                    className="text-xs sm:text-sm text-[#174D38] hover:underline font-semibold text-center sm:text-right py-2 min-h-[40px] flex items-center justify-center sm:justify-end"
                  >
                    Or open direct email draft &rarr;
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
