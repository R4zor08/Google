interface GoogleLogoProps {
  className?: string;
}
export function GoogleLogo({ className }: GoogleLogoProps) {
  return (
    <h1
      className={`font-google-sans select-none tracking-tight ${className ?? ''}`}
      style={{
        fontWeight: 500
      }}
      aria-label="Google">
      
      <span
        style={{
          color: '#4285F4'
        }}>
        
        G
      </span>
      <span
        style={{
          color: '#EA4335'
        }}>
        
        o
      </span>
      <span
        style={{
          color: '#FBBC05'
        }}>
        
        o
      </span>
      <span
        style={{
          color: '#4285F4'
        }}>
        
        g
      </span>
      <span
        style={{
          color: '#34A853'
        }}>
        
        l
      </span>
      <span
        style={{
          color: '#EA4335'
        }}>
        
        e
      </span>
    </h1>);

}