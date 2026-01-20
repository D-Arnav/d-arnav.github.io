import { FiMail, FiCopy, FiCheck } from "react-icons/fi";
import { useState } from "react";
import "./MailIcon.css";

function MailIcon() {
  const email = "darnav@umich.edu";
  const [copied, setCopied] = useState(false);

  const copyEmail = (e) => {
    e.preventDefault();
    e.stopPropagation();

    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="mail-wrapper">
      <FiMail size={22} />

      <div className="mail-tooltip">
        <span className="mail-text">{email}</span>
        <button onClick={copyEmail} className="copy-btn">
          {copied ? <FiCheck size={16} /> : <FiCopy size={16} />}
        </button>
      </div>
    </div>
  );
}

export default MailIcon;
