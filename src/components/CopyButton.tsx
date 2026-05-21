import { useState } from 'react';
import { CopyIcon, CheckIcon } from 'lucide-react';
interface CopyButtonProps {
  label: string;
  description?: string;
  code: string;
}
export function CopyButton({ label, description, code }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
    } catch (err) {
      const textarea = document.createElement('textarea');
      textarea.value = code;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <button
      type="button"
      onClick={handleCopy}
      title={description}
      aria-label={
      copied ?
      `${label} code copied to clipboard` :
      `Copy ${label} code to clipboard`
      }
      className={`inline-flex items-center gap-2 px-4 h-9 rounded text-sm font-google-sans transition-all duration-150 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#1A73E8] ${copied ? 'bg-[#0F9D58] text-white border border-[#0F9D58]' : 'bg-[#F8F9FA] text-[#3C4043] border border-[#F8F9FA] hover:border-[#DADCE0] hover:shadow-sm'}`}>
      
      {copied ?
      <>
          <CheckIcon className="w-4 h-4" strokeWidth={2.5} />
          Copied
        </> :

      <>
          <CopyIcon className="w-4 h-4" strokeWidth={2} />
          {label}
        </>
      }
    </button>);

}