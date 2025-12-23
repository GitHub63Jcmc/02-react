
export function Link ({ href, children, ...restOfProps}) {
  const handleClick = (event) => {
    // 🚀 MEJORA: Detectar si el usuario quiere abrir en pestaña nueva
    const isMainButton = event.button === 0; // Clic izquierdo
    const isModifiedEvent = event.metaKey || event.altKey || event.ctrlKey || event.shiftKey;
    const isManageableEvent = isMainButton && !isModifiedEvent;

    if (isManageableEvent) {
      event.preventDefault();
      window.history.pushState({}, '', href);
      window.dispatchEvent(new PopStateEvent('popstate'));
    }
  }
  
  return  (
    <a href={href} {...restOfProps} onClick={handleClick} target={restOfProps.target}>
      {children}
    </a>
  )
}