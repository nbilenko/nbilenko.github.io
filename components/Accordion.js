function Accordion({ id, heading, content }) {
    const [isOpen, setIsOpen] = useState(true);
  
    return (
      <div>
        <div id={heading} onClick={() => setIsOpen(!isOpen)}>
          {heading}
          {!isOpen && (
            <span className="ml-4 text-gray-50 text-xs">...read more...</span>
          )}
        </div>
        {isOpen && <div id={`collapse${id}`}>{content}</div>}
      </div>
    );
  }
  